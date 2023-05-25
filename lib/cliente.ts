import { Prisma } from "@prisma/client";
import { prisma } from "./prisma";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { cpfDuplicado, emailDuplicado } from "./erros";

export type Clientes = Prisma.PromiseReturnType<typeof getClientes>;
export type Cliente = Prisma.PromiseReturnType<typeof getCliente>;

export async function getClientes() {
    const data = await prisma.cliente.findMany({
        include: {
            endereco: true,
            usuario: true,
            cartao: true,
            compras: true,
        },
        orderBy: [{
            id: "desc"
          }
        ],
    })

    return data
}

export async function getCliente(id: number) {
    const data = await prisma.cliente.findUnique({
      where: {
        id: id,
      },
      include: {
        endereco: true,
        usuario: true,
        cartao: true,
        compras: true,
      },
    });
  
    return data;
  }

  export async function inserirCliente(cliente: Cliente) {
   
    if (cliente === null) {
      return null
    } else {
      try {
        if (cliente.cartao !== null) {
          const clienteDATA = prisma.cliente.create({
            data: {
              usuario: {
                create: {
                  nome: cliente.usuario.nome,
                  email: cliente.usuario.email,
                  senha: cliente.usuario.senha
                }
              },
              cartao: {
                create: {
                  num_cartao: cliente.cartao.num_cartao,
                  dono_cartao: cliente.cartao.dono_cartao,
                  data_vencimento: cliente.cartao.data_vencimento,
                  cvv: cliente.cartao.cvv
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
          return clienteDATA
        } else {
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
          return clienteDATA
        }
       
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