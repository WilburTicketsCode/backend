import { Prisma } from "@prisma/client";
import { prisma } from "./prisma";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";


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
  /*const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const senhaRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const cpfRegex = /^\d{11}$/;

  if (!emailRegex.test(email) || !senhaRegex.test(senha) || !cpfRegex.test(cpf)) {
    return null
  }*/
  if (adm === null) {
    return null
  } else {

    const administradorData = prisma.administrador.create({
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

  }

}

