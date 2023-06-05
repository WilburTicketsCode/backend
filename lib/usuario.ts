import { Prisma } from "@prisma/client";
import { prisma } from "./prisma";
import { usuarioNaoEncontrado } from "./erros";

export type Usuario = Prisma.PromiseReturnType<typeof getUsuario>;
export type edicaoUsuarioTipo = {
  tipo: string,
  novoDado: string,
  emailDoUsuario: string
}

export async function verificarEmailESenha(email: string, senha: string) {
  const user = await prisma.usuario.findUnique({
    where: {
      email: email,
    },
    include: {
      adm: true,
      promoter: true,
      cliente: true
    }
  });

  if (user && user.senha === senha) {
    if (user.adm !== null) {
      const userWithoutPass = {
        name: user.nome,
        email: user.email,
        role: "administrador",
        id: user.adm.cpf
      }
      return userWithoutPass
    } else if (user.promoter !== null) {
      if (user.promoter && user.promoter.cnpj !== null) {
        const userWithoutPass = {
          name: user.nome,
          email: user.email,
          role: "promoter",
          id: user.promoter.cnpj
        }
        return userWithoutPass
      } else if (user.promoter && user.promoter.cpf !== null) {
        const userWithoutPass = {
          name: user.nome,
          email: user.email,
          role: "promoter",
          id: user.promoter.cpf
        }
        return userWithoutPass
      }

    } else if (user.cliente !== null) {
      const userWithoutPass = {
        name: user.nome,
        email: user.email,
        role: "cliente",
        id: user.cliente.cpf
      }
      return userWithoutPass
    }
  } else {
    throw new usuarioNaoEncontrado('Login falhou, email ou senha errados.')
  }
}

export async function getUsuario(email: string) {
  const data = await prisma.usuario.findUnique({
    where: {
      email: email,
    },
    include: {
      adm: true,
      promoter: true,
      cliente: true
    }
  });
  if (data === null) throw new usuarioNaoEncontrado('Usuario com esse email não foi encontrar')

  const { senha, ...usuarioSemSenha } = data;
  return usuarioSemSenha


}

export async function edicaoUsuario(tipoDeEdicao: string, novoDadoAlterado: string, emailUsuario: string) {
  if (tipoDeEdicao === 'trocar senha') {
    try {
      const user = await prisma.usuario.update({
        where: { email: emailUsuario },
        data: { senha: novoDadoAlterado },
      });
      console.log('Usuario atualizado:', user);
      return user
    } catch (error) {
      throw new usuarioNaoEncontrado('Erro ao atualizar o usuário.')
    }
  }
}