import { Prisma } from "@prisma/client";
import { prisma } from "./prisma";
import { Promoter } from "./promoter";

export type Eventos = Prisma.PromiseReturnType<typeof getEventos>;
export type Evento = Prisma.PromiseReturnType<typeof getEvento>;

export async function getEventos() {
  const data = await prisma.evento.findMany({
    include: {
      endereco: true,
      promoter: true,
      lotacao: true,
    },
    orderBy: [{
      id: "desc"
    }
    ],
  })

  return data
}

export async function getEvento(id: number) {
  const data = await prisma.evento.findUnique({
    where: {
      id: id,
    },
    include: {
      endereco: true,
      promoter: true,
      lotacao: {
        include: {
          perfil: true,
          setor: true
        }
      }
    },
  });

  return data;
}

export async function inserirEvento(evento: Evento) {

  if (evento === null) {
    return null
  } else {
    
    const endereco = await prisma.endereco.create({
      data: {
        
          bairro: evento.endereco.bairro,
          cep: evento.endereco.cep,
          cidade: evento.endereco.cidade,
          estado: evento.endereco.estado,
          numero: evento.endereco.numero,
          rua: evento.endereco.rua,
          complemento: evento.endereco.complemento
        
      }
    })
    const eventoDATA = await prisma.evento.create({
      data: {
        nome: evento.nome,
        horaInicio: evento.horaInicio,
        horaFim: evento.horaFim,
        descricao: evento.descricao,
        banner: evento.banner,
        id_endereco: endereco.id,
        id_promoter: evento.promoter.id,

      }
    })

    return eventoDATA

  }
}