import { Prisma } from "@prisma/client";
import { prisma } from "./prisma";

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

    try{
      await prisma.$disconnect()
    }
    catch (e) {
      console.error(e)
      await prisma.$disconnect()
      process.exit(1)
    }
  
    return data;
}

export async function inserirAdministrador(nome: string, email: string, senha: string, cpf: string,
  superAdm: boolean) {

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const senhaRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const cpfRegex = /^\d{11}$/;

  if (!emailRegex.test(email) || !senhaRegex.test(senha) || !cpfRegex.test(cpf)) {
    return null
  }

  try {
    const adm = prisma.administrador.create({
      data: {
        usuario: {
          create: {
            nome: nome,
            email: email,
            senha: senha
          }
        },
        cpf: cpf,
        super_adm: superAdm
      }
    })
    return adm
  } catch (e) {
    console.log(e)
    return null
  }
  
}

