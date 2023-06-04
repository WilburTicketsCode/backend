import { Prisma } from "@prisma/client";
import { prisma } from "./prisma";

export type Usuario = Prisma.PromiseReturnType<typeof getUsuario>;
export type edicaoUsuarioTipo = {
  tipo: string,
  novoDado: string,
  emailDoUsuario: string
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

    if (data !== null){
      const { senha, ...usuarioSemSenha } = data;
      return usuarioSemSenha
    }
    return null

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
      console.error('Erro ao atualizar o usuário:', error);
      return null
    }
  }
}