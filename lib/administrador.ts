import { Prisma } from "@prisma/client";
import { prisma } from "./prisma";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { cpfDuplicado, emailDuplicado } from "./erros";


export type Administradores = Prisma.PromiseReturnType<typeof getAdministradores>;
export type Administrador = Prisma.PromiseReturnType<typeof getAdministrador>;



export async function getAdministradores() {
  const data = await prisma.administrador.findMany({
    include: {
      usuario: true,
    },
    orderBy: [{
      id: "desc"
    }
    ],
  })
  return data
}

export async function getAdministrador(cpf: string) {
  const data = await prisma.administrador.findUnique({
    where: {
      cpf: cpf,
    },
    include: {
      usuario: true
    },
  });

  return data;
}

export async function inserirAdministrador(adm: Administrador) {
  if (adm === null) {
    return null
  } else {
    try {
      const administradorData = await prisma.administrador.create({
        data: {
          usuario: {
            create: {
              nome: adm.usuario.nome,
              email: adm.usuario.email,
              senha: adm.usuario.senha
            }
          },
          cpf: adm.cpf,
          super_adm: adm.super_adm
        }
      })
      return administradorData
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

