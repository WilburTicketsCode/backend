import { PrismaClient } from '@prisma/client'
import { data } from 'autoprefixer';
import { create } from 'domain';
const prisma = new PrismaClient()

async function main() {

  await prisma.compra.deleteMany()
  await prisma.ingresso.deleteMany()
  await prisma.lotacao.deleteMany()
  await prisma.evento.deleteMany()
  await prisma.promoter.deleteMany()
  await prisma.cliente.deleteMany()
  await prisma.administrador.deleteMany()
  await prisma.usuario.deleteMany()
  await prisma.endereco.deleteMany()
  await prisma.cartao_Credito.deleteMany()

  /* ADMINISTRADOR 1 */
  const adm1 = await prisma.administrador.create({
    data: {
      cpf: "95545192069",
      super_adm: true,
      usuario: {
        create: { 
        nome: "Pedro",
        email: "pedro200@hotmail.com",
        senha: "pedropedro99"}
      }
    }
  })

  /* ADMINISTRADOR 2 */
  const adm2 = await prisma.administrador.create({
    data: {
      cpf: "27770383099",
      super_adm: false,
      usuario: {
        create: {
          nome: "Nalbert",
          email: "nalbert100@gmail.com",
          senha: "nalbert123"
        }
      }
    }
  })

  /* PERFIS DE INGREO */
  const perfilInteira = await prisma.perfil.create({
    data: {
      nome: "Inteira"
    }
  })

  const perfilMeia = await prisma.perfil.create({
    data: {
      nome: "Meia"
    }
  })

  const perfilGratuita = await prisma.perfil.create({
    data: {
      nome: "Gratuita"
    }
  })

  /* SETORES DE INGREÇO */
  const sertorVip = await prisma.setor.create({
    data: {
      nome: "Vip"
    }
  })

  const sertorCamarote = await prisma.setor.create({
    data: {
      nome: "Camarote"
    }
  })
  
  const sertorBackstage = await prisma.setor.create({
    data: {
      nome: "Backstage"
    }
  })

  /* PROMOTER 1 */
  const promoter1 = await prisma.promoter.create({
    data: {
      usuario: {
        create: {
          nome: "Rafeael Tosta",
          email: "tostinha123@yahoo.com",
          senha: "Tosta1134"
        }
      },
      cpf: "45267413020",
      status: "aprovado",
      data_nasc: new Date(),
      telefone: "6523848514",
      endereco: {
        create: {
          rua: "Rua da Paz",
          numero: 123,
          bairro: "Centro",
          cidade: "São Paulo",
          estado: "SP",
          cep: "01010-010",
          complemento: "Apartamento 42"
       }
      }
    }
  })

  //Criação de Enderço do Evento
  const endereco1 = await prisma.endereco.create({
    data: {
      "rua": "Avenida das Flores",
      numero: 1234,
      bairro: "Jardim das Tulipas",
      cidade: "São Paulo",
      estado: "SP",
      cep: "04567-890",
      complemento: "Apartamento 56"
    }
  })

  //Criação do Evento
  const evento1 = await prisma.evento.create({
    data: {
      nome: "Djavan Turnê D 2023",
      horaInicio: new Date("2023-05-30 19:00"),
      horaFim: new Date("2023-05-30 23:00"),
      descricao: "Depois de encerrar o ano de 2022 com participações marcantes em importantes festivais, Djavan volta aos palcos em 2023 com uma longa série de shows da turnê ‘D’!",
      banner: "nada",
      status: 'disponivel',
      id_promoter: promoter1.id,
      id_endereco: endereco1.id
    }
  })

  //Cirnado lotações do Evento
  const lotacao1 = await prisma.lotacao.create({
    data: {
      id_evento: evento1.id,
      id_perfil: perfilInteira.id,
      id_setor: sertorVip.id,
      quantidade: 100,
      valorTotal: 200
    }
  })

  const lotacao2 = await prisma.lotacao.create({
    data: {
      id_evento: evento1.id,
      id_perfil: perfilMeia.id,
      id_setor: sertorVip.id,
      quantidade: 100,
      valorTotal: 100
    }
  })

   /* PROMOTER 2 */
   const promoter2 = await prisma.promoter.create({
    data: {
      usuario: {
        create: {
          nome: "Luan Gabirel",
          email: "luanzito@gmaiil.com",
          senha: "1234"
        }
      },
      cpf: "72417917033",
      status: "aprovado",
      data_nasc: new Date(),
      telefone: "9136945571",
      endereco: {
        create: {
          rua: "Rua dos Girassóis",
          numero: 123,
          bairro: "Jardim das Flores",
          cidade: "Curitiba",
          estado: "PR",
          cep: "80000-000",
          complemento: ""
          }
      }
    }
  })

   /* PROMOTER 3 */
   const promoter3 = await prisma.promoter.create({
    data: {
      usuario: {
        create: {
          nome: "Borger Manuel",
          email: "borgerzada@outlook.com",
          senha: "123456"
        }
      },
      cpf: "58429911014",
      status: "aprovado",
      data_nasc: new Date(),
      telefone: "8536231962",
      endereco: {
        create: {
          rua: "Rua das Flores",
          numero: 123,
          bairro: "Jardim Botânico",
          cidade: "Porto Alegre",
          estado: "RS",
          cep: "90210-123",
          complemento: "Apartamento 401"
          }
      }
    }
  })

  //Criação de Enderço do Evento
  const endereco2 = await prisma.endereco.create({
    data: {
      rua: "Rua da Paz",
      numero: 100,
      bairro: "Jardim das Flores",
      cidade: "São Paulo",
      estado: "SP",
      cep: "04535-070",
      complemento: "Apto 501"
   }
  })

  //Criação do Evento
  const evento2 = await prisma.evento.create({
    data: {
      nome: "Festinha de Tosta",
      horaInicio: new Date("2023-06-01 18:00"),
      horaFim: new Date("2023-01-06 22:00"),
      descricao: "Uma festa que ira ver Tosta",
      banner: "nada",
      status: 'suspenso',
      id_promoter: promoter3.id,
      id_endereco: endereco2.id
    }
  })

  //Cirnado lotações do Evento
  const lotacao3 = await prisma.lotacao.create({
    data: {
      id_evento: evento2.id,
      id_perfil: perfilInteira.id,
      id_setor: sertorVip.id,
      quantidade: 100,
      valorTotal: 200
    }
  })

  const lotacao4 = await prisma.lotacao.create({
    data: {
      id_evento: evento2.id,
      id_perfil: perfilMeia.id,
      id_setor: sertorVip.id,
      quantidade: 100,
      valorTotal: 100
    }
  })

  const lotacao5 = await prisma.lotacao.create({
    data: {
      id_evento: evento2.id,
      id_perfil: perfilInteira.id,
      id_setor: sertorCamarote.id,
      quantidade: 300,
      valorTotal: 500
    }
  })

  const lotacao6 = await prisma.lotacao.create({
    data: {
      id_evento: evento2.id,
      id_perfil: perfilMeia.id,
      id_setor: sertorCamarote.id,
      quantidade: 100,
      valorTotal: 250
    }
  })

  
   /* PROMOTER 4 */
   const promoter4 = await prisma.promoter.create({
    data: {
      usuario: {
        create: {
          nome: "Seu Jorge",
          email: "jorge@gmaiil.com",
          senha: "123456789"
        }
      },
      cpf: "28419554006",
      status: "suspenso",
      data_nasc: new Date(),
      telefone: "6838738801",
      endereco: {
        create: {
          rua: "Rua dos Jasmins",
          numero: 12,
          bairro: "Jardim das Flores",
          cidade: "São Paulo",
          estado: "SP",
          cep: "04567-890",
          complemento: "Apto 42"
        }
      }
    }
  })

  /* CLEINTE 1 */
  const cliente1 = await prisma.cliente.create({
    data: {
      cpf: '66668230016',
      telefone: '6926587229',
      data_nasc: new Date(),
      usuario: {
        create: {
          nome: "Jorge Amado",
          email: "seujorgeamado@yahoo.com",
          senha: "1234"
        }
      },
      endereco: {
        create: {
          rua: "Rua da Consolação",
          numero: 1000,
          bairro: "Consolação",
          cidade: "São Paulo",
          estado: "SP",
          cep: "01302-907",
          complemento: "Apt 501"
        }  
      },
      cartao: {
        create: {
          num_cartao: "123123123123",
          dono_cartao: "Juliano Folenta",
          data_vencimento: "2023",
          cvv: "123",
        }
      }
    }
  })

  //Criando compra do Cliente
  const compra1 = await prisma.compra.create({
    data: {
      id_cliente: cliente1.id,
      data_hora: new Date(),
      ingressos: {
          createMany: {
            data:[ {
              valor_pago: 200,
              id_lotacao: lotacao1.id
            }, {
              valor_pago: 200,
              id_lotacao: lotacao1.id
            }]
          }
        }
      }
  })
  
  /* CLEINTE 2 */
  const cliente2 = await prisma.cliente.create({
    data: {
      cpf: '66668240016',
      telefone: '5926587229',
      data_nasc: new Date(),
      usuario: {
        create: {
          nome: "Josivaldo da Silva",
          email: "meuemail@yahoo.com",
          senha: "1234232"
        }
      },
      endereco: {
        create: {
          rua: "Rua Barão de Itapetininga",
          numero: 37,
          bairro: "República",
          cidade: "São Paulo",
          estado: "SP",
          cep: "01042-000",
          complemento: "Sala 12"
       }
       
      },
      cartao: {
        create: {
          num_cartao: "9999999999999999",
          dono_cartao: "Josivaldo da Silva",
          data_vencimento: "245",
          cvv: "444",
        }
      }
    }
  })

  const compra2 = await prisma.compra.create({
    data: {
      id_cliente: cliente2.id,
      data_hora: new Date(),
      ingressos: {
          create: {
              valor_pago: 200,
              id_lotacao: lotacao1.id
          }
        }
      }
  })

  /* CLEINTE 3 */
  const cliente3 = await prisma.cliente.create({
    data: {
      cpf: '62807982085',
      telefone: '6725361968',
      data_nasc: new Date(),
      usuario: {
        create: {
          nome: "Andre Rodrigues",
          email: "andrezito@yahoo.com",
          senha: "123"
        }
      },
      endereco: {
        create: {
          rua: "Rua Barão de Itapetininga",
          numero: 150,
          bairro: "República",
          cidade: "São Paulo",
          estado: "SP",
          cep: "01042-000",
          complemento: "Sala 12"
       }
       
      },
      cartao: {
        create: {
          num_cartao: "1111111111111111",
          dono_cartao: "Josemar Almeida",
          data_vencimento: "2055",
          cvv: "333",
        }
      }
    }
  })

  const cliente4 = await prisma.cliente.create({
    data: {
      cpf: '66168230016',
      telefone: '6906587229',
      data_nasc: new Date(),
      usuario: {
        create: {
          nome: "Jorge Amado",
          email: "seuxxxamado@yahoo.com",
          senha: "1234"
        }
      },
      endereco: {
        create: {
          rua: "Rua da Consolação",
          numero: 1000,
          bairro: "Consolação",
          cidade: "São Paulo",
          estado: "SP",
          cep: "01302-907",
          complemento: "Apt 501"
        }  
      },
    }
  })

} main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })

/*Parabéns 
professor
você
chegou ao
FIM!!!! */
