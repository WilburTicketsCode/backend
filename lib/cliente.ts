import { Prisma } from "@prisma/client";
import { prisma } from "./prisma";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { cpfDuplicado, emailDuplicado, usuarioNaoEncontrado } from "./erros";
import { mailOptions, transporter, trocarDestinatario } from "./nodemailer";
import { Ingresso } from "./evento";

export type Clientes = Prisma.PromiseReturnType<typeof getClientes>;
export type Cliente = {
  cpf: string,
  telefone: string,
  data_nasc: Date,
  usuario: {
    nome: string,
    email: string,
    senha: string
  },
  endereco: {
    rua: string,
    numero: string,
    bairro: string,
    cidade: string,
    estado: string,
    cep: string,
    complemento: string,
  },
  cartao: {
    num_cartao: string,
    dono_cartao: string,
    data_vencimento: string,
    cvv: string,
  }
};
export type edicaoClienteTipo = {
  tipo: string,
  novoDado: string,
  cpfDoUsuario: string
}

export type Compra = {
  cpfCliente: string,
  ingressos: [Ingresso]
      
}

export async function getClientes() {
  const data = await prisma.cliente.findMany({
    include: {
      endereco: true,
      usuario: true,
      cartao: true,
      compras: {
        include: {
          ingressos: true,
        }
      },
    },
    orderBy: [{
      id: "desc"
    }
    ],
  })
  const listaClienteSemSenha: any = []
  data.map((u) => {
    if (u !== null) {
      const { usuario, ...clienteSemSenha } = u;
      const clienteSemSenhaCompleto = {
        ...clienteSemSenha,
        usuario: {
          ...usuario,
          senha: undefined // Exclui a propriedade "senha" do objeto interno "usuario"
        }
      }
      listaClienteSemSenha.push(clienteSemSenhaCompleto);
    }
  });

  return listaClienteSemSenha
}

export async function getCliente(cpf: string) {
  const data = await prisma.cliente.findUnique({
    where: {
      cpf: cpf,
    },
    include: {
      endereco: true,
      usuario: true,
      cartao: true,
      compras: {
        include: {
          ingressos: true,
        }
      }
    },
  });
  if (data === null) throw new usuarioNaoEncontrado('Cliente com esse CPF não foi encontrado')

  const { usuario, ...clienteSemSenha } = data;
  const clienteSemSenhaCompleto = {
    ...clienteSemSenha,
    usuario: {
      ...usuario,
      senha: undefined // Exclui a propriedade "senha" do objeto interno "usuario"
    }
  }
  return clienteSemSenhaCompleto;

}

export async function inserirCliente(cliente: Cliente) {

  if (cliente === null) {
    return null
  } else {
    try {

      const clienteDATA = prisma.cliente.create({
        data: {
          usuario: {
            create: {
              nome: cliente.usuario.nome,
              email: cliente.usuario.email,
              senha: cliente.usuario.senha
            }
          },
          endereco: {
            create: {
              bairro: cliente.endereco.bairro,
              cep: cliente.endereco.cep,
              cidade: cliente.endereco.cidade,
              estado: cliente.endereco.estado,
              numero: cliente.endereco.numero,
              rua: cliente.endereco.rua,
              complemento: cliente.endereco.complemento
            }
          },
          cpf: cliente.cpf,
          data_nasc: cliente.data_nasc,
          telefone: cliente.telefone,

        }
      })
      const { usuario, ...clienteSemSenha } = clienteDATA;
      const clienteSemSenhaCompleto = {
        ...clienteSemSenha,
        usuario: {
          ...usuario,
          senha: undefined // Exclui a propriedade "senha" do objeto interno "usuario"
        }
      }

      trocarDestinatario(cliente.usuario.email)
      await transporter.sendMail({
          ...mailOptions,
          subject: 'Verificando Conta Wilbor',
          text: 'Email de confirmação de criação de conta',
          html: '<h1>Conta Criada Wilbor</h1><p>Email enviado pela Wilbot.' +
          ' Sua conta foi criada no melhor site de venda de tickets.</p>'
      })
      
      return clienteSemSenhaCompleto


    } catch (e) {
      if (e instanceof PrismaClientKnownRequestError) {
        if (e.code === 'P2002') {
          if (e.message.split(' ')[8] === '`Usuario_email_key`') {
            throw new emailDuplicado("esté email já existe nos registros.")
          } else if (e.message.split(' ')[8] === '`Administrador_cpf_key`') {
            throw new cpfDuplicado("esté cpf já existe nos registros.")
          }
        }
      }
    }


  }
}

export async function edicaoCliente(tipoDeEdicao: string, novoDadoAlterado: string, cpfCliente: string) {

}

export async function adicionarCompra(listaIngressos: Ingresso[], cpfCliente: string) {
  const cliente = await getCliente(cpfCliente)
  try {
    const compra = await prisma.compra.create({
      data: {
        id_cliente: cliente.id,
      },
    })
    type QuantidadeRetada = {
      idLotacao: number,
      quantidadeRetirada: number
    }
    const lista:QuantidadeRetada[] = []
    listaIngressos.map(i => {
      if (lista.length === 0){
        lista.push({
          idLotacao: i.id_lotacao,
          quantidadeRetirada: 0
        })
      }
      lista.map(l => {
        if (l.idLotacao === i.id_lotacao){
          l.quantidadeRetirada += 1
        } else {
          let jaExiste = false
          lista.map(l => {
            if (l.idLotacao === i.id_lotacao){
              jaExiste = true
            }
          })
          if (!jaExiste){
            lista.push({
              idLotacao: i.id_lotacao,
              quantidadeRetirada: 1
            })
          }
        }
      })
    })
    console.log(lista)
    listaIngressos.map(async i => {
      const ingresso = await prisma.ingresso.create({
        data: {
          id_compra: compra.id,
          id_lotacao: i.id_lotacao,
          valor_pago: i.valor_pago
        }
      })
    })
    lista.map(async e => {
      const lotacaoAntes = await prisma.lotacao.findFirst({
        where: {id: e.idLotacao}
      })
      if (lotacaoAntes !== null){
        const lotacaoAlterada = await prisma.lotacao.update({
          where: {id: e.idLotacao},
          data: { quantidade: lotacaoAntes.quantidade - e.quantidadeRetirada}
        })
        console.log(lotacaoAlterada)
      }
    })
    return compra
  } catch (e) {
    return null
  }
}

