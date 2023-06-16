import { Prisma } from "@prisma/client";
import { prisma } from "./prisma";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { cpfDuplicado, emailDuplicado, usuarioNaoEncontrado } from "./erros";
import { mailOptions, transporter, trocarDestinatario } from "./nodemailer";

export type Promoters = Prisma.PromiseReturnType<typeof getPromoters>;
export type Promoter = {
    cpf: string,
    cnpj: string,
    status: string,
    telefone: string,
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
};

export type PromoterEdicao = {
    cpf: string | null,
    cnpj: string | null,
    telefone: string,
    usuario: {
        nome: string,
        email: string
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
};

export type edicaoPromoterTipo = {
    tipo: string,
    novoDado: string,
    cpfORcnpj: string
}


export async function getPromoters() {
    const data = await prisma.promoter.findMany({
        include: {
            usuario: true,
            eventos: true,
            endereco: true,
        },
        orderBy: [{
            id: "desc"
        }
        ],
    })

    const listaPromoterSemSenha: any = []
    data.map((u) => {
        if (u !== null) {
            const { usuario, ...promoterSemSenha } = u;
            const promoterSemSenhaCompleto = {
                ...promoterSemSenha,
                usuario: {
                    ...usuario,
                    senha: undefined // Exclui a propriedade "senha" do objeto interno "usuario"
                }
            }
            listaPromoterSemSenha.push(promoterSemSenhaCompleto);
        }
    });
    return listaPromoterSemSenha

}

export async function getPromoter(cpfORcnpj: string) {
    const data = await prisma.promoter.findMany({
        where: {
            OR: [
                { cpf: cpfORcnpj },
                { cnpj: cpfORcnpj }
            ]
        },
        include: {
            usuario: true,
            eventos: true,
            endereco: true,
        },
        orderBy: [{
            id: "desc"
        }
        ],
    })

    if (data[0] === null) throw new usuarioNaoEncontrado('Promoter com esse CPF não foi encontrado')

    const { usuario, ...promoterSemSenha } = data[0];
    const promoterSemSenhaCompleto = {
        ...promoterSemSenha,
        usuario: {
            ...usuario,
            senha: undefined // Exclui a propriedade "senha" do objeto interno "usuario"
        }
    }

    return promoterSemSenhaCompleto

}

export async function inserirPromoter(promoter: Promoter) {

    if (promoter === null) {
        return null
    } else {
        try {
            const promoterDATA = await prisma.promoter.create({
                data: {
                    usuario: {
                        create: {
                            nome: promoter.usuario.nome,
                            email: promoter.usuario.email,
                            senha: promoter.usuario.senha
                        }
                    },
                    cpf: promoter.cpf,
                    cnpj: promoter.cnpj,
                    status: promoter.status,
                    telefone: promoter.telefone,
                    endereco: {
                        create: {
                            rua: promoter.endereco.rua,
                            numero: promoter.endereco.numero,
                            bairro: promoter.endereco.bairro,
                            cidade: promoter.endereco.cidade,
                            estado: promoter.endereco.estado,
                            cep: promoter.endereco.cep,
                            complemento: promoter.endereco.complemento
                        }
                    }
                }
            })

            trocarDestinatario(promoter.usuario.email)
            await transporter.sendMail({
                ...mailOptions,
		subject: 'Verificando Conta Wilbor',
      	    	text: 'Email de confirmação de criação de conta',
          	html: '<h1>Conta Criada Wilbor</h1><p>Email enviado pela Wilbot.' +
          	' Sua conta foi criada no melhor site de venda de tickets.</p>'
            })
            return promoterDATA

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


export async function edicaoPromoter(tipoDeEdicao: string, novoDadoAlterado: string, cpfORcnpjDoPromoter: string) {
    if (tipoDeEdicao === 'trocar status') {
        try {
            const promoter = await getPromoter(cpfORcnpjDoPromoter)
            if (promoter !== null) {
                const promoterAtualizado = await prisma.promoter.update({
                    where: { id: promoter.id },
                    data: { status: novoDadoAlterado },
                });
                console.log("PROMOTER NA LIB: ", promoterAtualizado)
                return promoterAtualizado
            }
        } catch (e) {
            console.error('Erro ao atualizar o evento:', e);
            return null
        }
    }
}

export async function novaEdicaoPromoter(promoter: PromoterEdicao, id: string) {
    const res = await getPromoter(id);

	if (!res || res == undefined){
		throw new usuarioNaoEncontrado("Promoter com essa identificação não existe")
	}
    try {
        if (id.length === 11){

            const promoterAtualizado = await prisma.promoter.update({
                where: { cpf: id},
                data: {
                    telefone: promoter.telefone,
                    usuario: {
                        update: { nome: promoter.usuario.nome}
                    },
                    endereco: {
                        update: {
                            rua: promoter.endereco.rua,
                            numero: promoter.endereco.numero,
                            bairro: promoter.endereco.bairro,
                            cidade: promoter.endereco.cidade,
                            estado: promoter.endereco.estado,
                            cep: promoter.endereco.cep,
                            complemento: promoter.endereco.complemento,
                        }
                    }
                }
            })
        } else if (id.length === 14){
            const promoterAtualizado = await prisma.promoter.update({
                where: { cnpj: id},
                data: {
                    telefone: promoter.telefone,
                    usuario: {
                        update: { nome: promoter.usuario.nome}
                    },
                    endereco: {
                        update: {
                            rua: promoter.endereco.rua,
                            numero: promoter.endereco.numero,
                            bairro: promoter.endereco.bairro,
                            cidade: promoter.endereco.cidade,
                            estado: promoter.endereco.estado,
                            cep: promoter.endereco.cep,
                            complemento: promoter.endereco.complemento,
                        }
                    }
                }
            })
        }
    } catch (e) {
        console.error('Erro ao atualizar o promoter:', e);
        return null
    }
}

