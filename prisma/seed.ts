import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()



const Usuarios = [
    {
      "name": "Lee Mccullough",
      "email": "integer.sem@icloud.org",
      "senha": "mesmasenha"
    },
    {
      "name": "Lawrence Miles",
      "email": "nec.cursus@outlook.ca",
      "senha": "mesmasenha"
    },
    {
      "name": "Dana Good",
      "email": "phasellus.ornare@outlook.com",
      "senha": "mesmasenha"
    },
    {
      "name": "Hayes Dotson",
      "email": "sagittis@icloud.org",
      "senha": "mesmasenha"
    },
    {
      "name": "Emi Wilson",
      "email": "dui.nec@icloud.com",
      "senha": "mesmasenha"
    },
    {
      "name": "Carson Mcpherson",
      "email": "tellus@icloud.com",
      "senha": "mesmasenha"
    },
    {
      "name": "Zorita Hardy",
      "email": "ullamcorper@hotmail.org",
      "senha": "mesmasenha"
    },
    {
      "name": "Mercedes Alvarado",
      "email": "ut.tincidunt@hotmail.ca",
      "senha": "mesmasenha"
    },
    {
      "name": "Reuben Gonzales",
      "email": "maecenas.ornare.egestas@icloud.com",
      "senha": "mesmasenha"
    },
    {
      "name": "Madaline Welch",
      "email": "ante.bibendum.ullamcorper@outlook.ca",
      "senha": "mesmasenha"
    },
    {
      "name": "Nomlanga Foster",
      "email": "sed.dictum.eleifend@google.couk",
      "senha": "mesmasenha"
    },
    {
      "name": "Barry Melendez",
      "email": "vestibulum.nec@google.ca",
      "senha": "mesmasenha"
    },
    {
      "name": "Laith Dale",
      "email": "nostra.per@aol.com",
      "senha": "mesmasenha"
    },
    {
      "name": "Thane Carr",
      "email": "elit@protonmail.couk",
      "senha": "mesmasenha"
    },
    {
      "name": "Sopoline Guzman",
      "email": "est.mauris@outlook.couk",
      "senha": "mesmasenha"
    },
    {
      "name": "Chester Bowman",
      "email": "quam@yahoo.ca",
      "senha": "mesmasenha"
    },
    {
      "name": "Judah Gillespie",
      "email": "ipsum.sodales@outlook.couk",
      "senha": "mesmasenha"
    },
    {
      "name": "Stacey Forbes",
      "email": "id.magna@hotmail.ca",
      "senha": "mesmasenha"
    },
    {
      "name": "Bree Gilbert",
      "email": "amet@hotmail.net",
      "senha": "mesmasenha"
    },
    {
      "name": "Carol Lloyd",
      "email": "cras.eget@hotmail.com",
      "senha": "mesmasenha"
    }
  ];
  
  const cartoes = [
    {
      num_cartao: '1111222233334444',
      dono_cartao: 'John Doe',
      data_vencimento: '12/2022',
      cvv: '123'
    },
    {
      num_cartao: '5555666677778888',
      dono_cartao: 'Jane Doe',
      data_vencimento: '06/2023',
      cvv: '456'
    },
    {
      num_cartao: '9999888877776666',
      dono_cartao: 'Bob Smith',
      data_vencimento: '01/2025',
      cvv: '789'
    },
    {
      num_cartao: '3333444455556666',
      dono_cartao: 'Alice Johnson',
      data_vencimento: '10/2024',
      cvv: '987'
    },
    {
      num_cartao: '7777888899990000',
      dono_cartao: 'Eve Wilson',
      data_vencimento: '09/2023',
      cvv: '654'
    },
    {
      num_cartao: '4444555566667777',
      dono_cartao: 'Tom Brown',
      data_vencimento: '08/2024',
      cvv: '321'
    },
    {
      num_cartao: '0000111122223333',
      dono_cartao: 'Jill Green',
      data_vencimento: '11/2023',
      cvv: '654'
    },
    {
      num_cartao: '6666777788889999',
      dono_cartao: 'Sam Taylor',
      data_vencimento: '05/2025',
      cvv: '987'
    },
    {
      num_cartao: '2222333344445555',
      dono_cartao: 'Chris Anderson',
      data_vencimento: '02/2024',
      cvv: '123'
    },
    {
      num_cartao: '8888999911112222',
      dono_cartao: 'Karen Lee',
      data_vencimento: '03/2023',
      cvv: '456'
    },
    {
      num_cartao: '7777666655554444',
      dono_cartao: 'Mike Scott',
      data_vencimento: '06/2024',
      cvv: '789'
    },
    {
      num_cartao: '3333222211110000',
      dono_cartao: 'Anna Williams',
      data_vencimento: '07/2025',
      cvv: '654'
    },
    {
      num_cartao: '9999888877776669',
      dono_cartao: 'Alex Brown',
      data_vencimento: '04/2024',
      cvv: '321'
    },
    {
      num_cartao: '5555444433332222',
      dono_cartao: 'Julia Martin',
      data_vencimento: '12/2023',
      cvv: '987'
    }
  ];
  
  const Administradores = [
    {
      "cpf": "03885293040",
      "super_adm": true,
      "id_usuario": 22,
    },
    {
      "cpf": "53295726635",
      "super_adm": false,
      "id_usuario": 23,
    }
  ];

  const Setores = [
    {
      "name": "vip"
    },
    {
      "name": "backstage"
    },
    {
      "name": "camarote"
    }
  ]

  const Perfis = [
    {
      "name": "entrada inteira"
    },
    {
      "name": "meia entrada"
    },
    {
      "name": "entrada gratuita"
    }
  ];
  const addresses = [
    {
      "rua": "402-5353 Dui, Ave",
      "numero": 28,
      "bairro": "bibendum",
      "cidade": "Itajaí",
      "estado": "Santa Catarina",
      "cep": "42429-256",
      "complemento": "Galpão"
    },
    {
      "rua": "P.O. Box 652, 4481 Lectus Street",
      "numero": 44,
      "bairro": "euismod urna.",
      "cidade": "Imperatriz",
      "estado": "Maranhão",
      "cep": "74750-713",
      "complemento": "Casa"
    },
    {
      "rua": "Ap #491-6513 Aliquet Av.",
      "numero": 67,
      "bairro": "accumsan",
      "cidade": "Guarulhos",
      "estado": "São Paulo",
      "cep": "35153858",
      "complemento": "Galpão"
    },
    {
      "rua": "Ap #353-9805 Nulla. Rd.",
      "numero": 48,
      "bairro": "lobortis",
      "cidade": "Marabá",
      "estado": "Pará",
      "cep": "99753-539",
      "complemento": "Casa"
    },
    {
      "rua": "747-1536 Eu, St.",
      "numero": 20,
      "bairro": "Curabitur",
      "cidade": "Maringá",
      "estado": "Paraná",
      "cep": "36139657",
      "complemento": "Galpão"
    },
    {
      "rua": "Ap #460-2326 Magna St.",
      "numero": 196,
      "bairro": "et, rutrum",
      "cidade": "Governador Valadares",
      "estado": "Minas Gerais",
      "cep": "58799-774",
      "complemento": "Galpão"
    },
    {
      "rua": "751-3934 Sed Road",
      "numero": 183,
      "bairro": "netus",
      "cidade": "Aparecida de Goiânia",
      "estado": "Goiás",
      "cep": "89121-242",
      "complemento": "Apartamento"
    },
    {
      "rua": "847-3070 Feugiat Avenue",
      "numero": 9,
      "bairro": "erat",
      "cidade": "Barra do Corda",
      "estado": "Maranhão",
      "cep": "67016-244",
      "complemento": "Apartamento"
    },
    {
      "rua": "P.O. Box 763, 3454 Gravida. Rd.",
      "numero": 128,
      "bairro": "ut,",
      "cidade": "Aparecida de Goiânia",
      "estado": "Goiás",
      "cep": "44064-438",
      "complemento": "Apartamento"
    },
    {
      "rua": "P.O. Box 326, 2783 Massa Av.",
      "numero": 122,
      "bairro": "scelerisque",
      "cidade": "Blumenau",
      "estado": "Santa Catarina",
      "cep": "65095-748",
      "complemento": "Apartamento"
    },
    {
      "rua": "890-1194 Egestas Road",
      "numero": 57,
      "bairro": "Etiam vestibulum",
      "cidade": "Paranaguá",
      "estado": "Paraná",
      "cep": "95917-803",
      "complemento": "Casa"
    },
    {
      "rua": "Ap #282-4945 Luctus Ave",
      "numero": 162,
      "bairro": "erat",
      "cidade": "Paranaguá",
      "estado": "Paraná",
      "cep": "68781-499",
      "complemento": "Galpão"
    },
    {
      "rua": "Ap #411-6070 Eget, St.",
      "numero": 181,
      "bairro": "gravida non,",
      "cidade": "Jaboatão dos Guararapes",
      "estado": "Pernambuco",
      "cep": "62608-314",
      "complemento": "Apartamento"
    },
    {
      "rua": "545-4282 Tempus St.",
      "numero": 146,
      "bairro": "vehicula et,",
      "cidade": "Florianópolis",
      "estado": "Santa Catarina",
      "cep": "41336-747",
      "complemento": "Galpão"
    },
    {
      "rua": "Ap #945-7068 Interdum. Av.",
      "numero": 2,
      "bairro": "fames ac",
      "cidade": "Florianópolis",
      "estado": "Santa Catarina",
      "cep": "68211-067",
      "complemento": "Galpão"
    },
    {
      "rua": "Ap #868-7892 Blandit Street",
      "numero": 160,
      "bairro": "Nunc sed",
      "cidade": "Balsas",
      "estado": "Maranhão",
      "cep": "37381111",
      "complemento": "Casa"
    },
    {
      "rua": "369-5704 Orci St.",
      "numero": 25,
      "bairro": "eu neque",
      "cidade": "São João de Meriti",
      "estado": "Rio de Janeiro",
      "cep": "11561-117",
      "complemento": "Apartamento"
    },
    {
      "rua": "P.O. Box 383, 9521 Feugiat Street",
      "numero": 166,
      "bairro": "leo,",
      "cidade": "Goiânia",
      "estado": "Goiás",
      "cep": "37671437",
      "complemento": "Galpão"
    },
    {
      "rua": "744-3943 Urna. Avenue",
      "numero": 69,
      "bairro": "tellus sem",
      "cidade": "Bayeux",
      "estado": "Paraíba",
      "cep": "82975-475",
      "complemento": "Galpão"
    },
    {
      "rua": "6265 Mauris Rd.",
      "numero": 150,
      "bairro": "ligula.",
      "cidade": "Sousa",
      "estado": "Paraíba",
      "cep": "35742125",
      "complemento": "Apartamento"
    },
    {
      "rua": "Ap #488-1025 Mi Rd.",
      "numero": 18,
      "bairro": "purus gravida",
      "cidade": "Ipatinga",
      "estado": "Minas Gerais",
      "cep": "42991-237",
      "complemento": "Apartamento"
    },
    {
      "rua": "328-7720 Enim. Rd.",
      "numero": 30,
      "bairro": "blandit",
      "cidade": "Guarulhos",
      "estado": "São Paulo",
      "cep": "30139079",
      "complemento": "Galpão"
    }
  ]

  const Clientes = [
    {
    "cpf": "78036298121",
    "data_nasc": "2000-03-12",
    "id_usuario": 22,
    "id_cartao": 22,
    "id_endereco": 1,
    "telefone": "87654321987"
    },
    {
    "cpf": "19374858301",
    "data_nasc": "2001-10-23",
    "id_usuario": 23,
    "id_cartao": 23,
    "id_endereco": 2,
    "telefone": "45678912345"
    },
    {
    "cpf": "84651293709",
    "data_nasc": "1999-05-08",
    "id_usuario": 24,
    "id_cartao": 24,
    "id_endereco": 3,
    "telefone": "98765432101"
    },
    {
    "cpf": "23659814700",
    "data_nasc": "2002-02-17",
    "id_usuario": 25,
    "id_cartao": 25,
    "id_endereco": 4,
    "telefone": "32165498709"
    },
    {
    "cpf": "80274361910",
    "data_nasc": "1998-11-30",
    "id_usuario": 26,
    "id_cartao": 26,
    "id_endereco": 5,
    "telefone": "23456789012"
    },
    {
    "cpf": "94768302598",
    "data_nasc": "2003-09-05",
    "id_usuario": 27,
    "id_cartao": 27,
    "id_endereco": 6,
    "telefone": "67890123456"
    },
    {
    "cpf": "51834927601",
    "data_nasc": "1997-04-28",
    "id_usuario": 28,
    "id_cartao": 28,
    "id_endereco": 7,
    "telefone": "89012345678"
    },
    {
    "cpf": "92736180442",
    "data_nasc": "2004-12-20",
    "id_usuario": 29,
    "id_cartao": 29,
    "id_endereco": 8,
    "telefone": "01234567890"
    },
    {
    "cpf": "63481792563",
    "data_nasc": "1996-07-09",
    "id_usuario": 30,
    "id_cartao": 30,
    "id_endereco": 9,
    "telefone": "76543210987"
    },
    {
    "cpf": "18274935670",
    "data_nasc": "2005-05-29",
    "id_usuario": 31,
    "id_cartao": 31,
    "id_endereco": 10,
    "telefone": "54321098765"
    },
    {
    "cpf": "94750382609",
    "data_nasc": "1995-12-31",
    "id_usuario": 32,
    "id_cartao": 32,
    "id_endereco": 11,
    "telefone": "67890543210"
    },
    {
    "cpf": "38475629100",
    "data_nasc": "2000-09-14",
    "id_usuario": 33,
    "id_cartao": 33,
    "id_endereco": 12,
    "telefone": "45678901234"
    },
    {
    "cpf": "92836471581",
    "data_nasc": "1999-06-23",
    "id_usuario": 34,
    "id_cartao": 34,
    "id_endereco": 13,
    "telefone": "89012345678"
    },
    {
    "cpf": "12654389027",
    "data_nasc": "2001-03-06",
    "id_usuario": 35,
    "id_cartao": 35,
    "id_endereco": 14,
    "telefone": "12345678901"
    }
    ]
    const Eventos = [
        {
          "data": "2023-07-02",
          "descricao": "Festival de música eletrônica",
          "nome": "Electro Wave",
          "id_endereco": 19,
          "id_promoter": 3,
          "banner": "electro-wave.jpg"
        },
        {
          "data": "2023-07-05",
          "descricao": "Exposição de arte abstrata",
          "nome": "Abstratus",
          "id_endereco": 20,
          "id_promoter": 1,
          "banner": "abstratus.jpg"
        },
        {
          "data": "2023-07-10",
          "descricao": "Desfile de moda",
          "nome": "Fashion Week",
          "id_endereco": 21,
          "id_promoter": 2,
          "banner": "fashion-week.jpg"
        },
        {
          "data": "2023-07-12",
          "descricao": "Festival de cinema independente",
          "nome": "Cine Independe",
          "id_endereco": 22,
          "id_promoter": 4,
          "banner": "cine-independe.jpg"
        },
        {
          "data": "2023-07-15",
          "descricao": "Feira de arte popular",
          "nome": "Arte Popular",
          "id_endereco": 1,
          "id_promoter": 1,
          "banner": "arte-popular.jpg"
        },
        {
          "data": "2023-07-20",
          "descricao": "Festival de gastronomia italiana",
          "nome": "Festa Italiana",
          "id_endereco": 2,
          "id_promoter": 3,
          "banner": "festa-italiana.jpg"
        },
        {
          "data": "2023-07-22",
          "descricao": "Mostra de teatro infantil",
          "nome": "Teatro Kids",
          "id_endereco": 21,
          "id_promoter": 2,
          "banner": "teatro-kids.jpg"
        },
        {
          "data": "2023-07-25",
          "descricao": "Conferência de negócios",
          "nome": "Business Summit",
          "id_endereco": 20,
          "id_promoter": 4,
          "banner": "business-summit.jpg"
        },
        {
          "data": "2023-07-30",
          "descricao": "Feira de turismo",
          "nome": "Travel Expo",
          "id_endereco": 22,
          "id_promoter": 1,
          "banner": "travel-expo.jpg"
        },
        {
          "data": "2023-08-02",
          "descricao": "Festival de música sertaneja",
          "nome": "Sertanejo Fest",
          "id_endereco": 16,
          "id_promoter": 3,
          "banner": "sertanejo-fest.jpg"
        }
      ];

      const Ingressos = [
        {"valor_pago": 234.56, "id_lotacao": 1, "id_compra": 1},
        {"valor_pago": 987.65, "id_lotacao": 2, "id_compra": 2},
        {"valor_pago": 456.78, "id_lotacao": 3, "id_compra": 3},
        {"valor_pago": 321.09, "id_lotacao": 4, "id_compra": 4},
        {"valor_pago": 654.32, "id_lotacao": 5, "id_compra": 5}
        ]

const Lotacoes = [
  {
    "valorTotal": 200.5,
    "quantidade": 50,
    "id_perfil": 1,
    "id_setor": 3,
    "id_evento": 11
  },
  {
    "valorTotal": 100.0,
    "quantidade": 150,
    "id_perfil": 2,
    "id_setor": 3,
    "id_evento": 11
  },
  {
    "valorTotal": 300,
    "quantidade": 50,
    "id_perfil": 1,
    "id_setor": 2,
    "id_evento": 12
  },
  {
    "valorTotal": 50,
    "quantidade": 30,
    "id_perfil": 1,
    "id_setor": 3,
    "id_evento": 13
  },
  {
    "valorTotal": 0,
    "quantidade": 60,
    "id_perfil": 3,
    "id_setor": 3,
    "id_evento": 14
  },
  {
    "valorTotal": 200,
    "quantidade": 60,
    "id_perfil": 1,
    "id_setor": 2,
    "id_evento": 15
  },
  {
    "valorTotal": 100,
    "quantidade": 20,
    "id_perfil": 2,
    "id_setor": 2,
    "id_evento": 15
  },
  {
    "valorTotal": 0,
    "quantidade": 60,
    "id_perfil": 3,
    "id_setor": 3,
    "id_evento": 16
  },
  {
    "valorTotal": 0,
    "quantidade": 60,
    "id_perfil": 3,
    "id_setor": 3,
    "id_evento": 16
  },
  {
    "valorTotal": 100,
    "quantidade": 60,
    "id_perfil": 1,
    "id_setor": 1,
    "id_evento": 17
  },
  {
    "valorTotal": 150,
    "quantidade": 60,
    "id_perfil": 1,
    "id_setor": 2,
    "id_evento": 17
  },
  {
    "valorTotal": 170.5,
    "quantidade": 60,
    "id_perfil": 1,
    "id_setor": 3,
    "id_evento": 17
  },
  {
    "valorTotal": 50,
    "quantidade": 60,
    "id_perfil": 2,
    "id_setor": 1,
    "id_evento": 17
  },
  {
    "valorTotal": 75,
    "quantidade": 60,
    "id_perfil": 2,
    "id_setor": 2,
    "id_evento": 17
  },
  {
    "valorTotal": 135.25,
    "quantidade": 60,
    "id_perfil": 2,
    "id_setor": 3,
    "id_evento": 17
  },
  {
    "valorTotal": 0,
    "quantidade": 30,
    "id_perfil": 3,
    "id_setor": 3,
    "id_evento": 18
  },
  {
    "valorTotal": 0,
    "quantidade": 70,
    "id_perfil": 3,
    "id_setor": 3,
    "id_evento": 19
  },
  {
    "valorTotal": 300,
    "quantidade": 90,
    "id_perfil": 1,
    "id_setor": 3,
    "id_evento": 20
  },
  {
    "valorTotal": 150,
    "quantidade": 30,
    "id_perfil": 2,
    "id_setor": 3,
    "id_evento": 20
  }
  
  
]



const Compras = [
  {
    "id_cliente": 1,
    "ingressos": [1],
    "data_hora": new Date(),
    "numero_cartao": "1111222233334444"
  },
  {
    "id_cliente": 2,
    "ingressos": [2, 3],
    "data_hora": new Date(),
    "numero_cartao": "5555666677778888"
  },
  {
    "id_cliente": 3,
    "ingressos": [4],
    "data_hora": new Date(),
    "numero_cartao": "9999888877776666"
  },
  {
    "id_cliente": 4,
    "ingressos": [5],
    "data_hora": new Date(),
    "numero_cartao": "3333444455556666"
  }
]



async function main() {

  for (const compraUnica of Compras) {
    const compra = await prisma.compra.create({
      data:{
        "id_cliente": compraUnica.id_cliente,
        "data_hora": compraUnica.data_hora,
        "numero_cartao": compraUnica.numero_cartao
      }
    })
  }

  /*for (const lotacaoUnico of Lotacoes) {
    const lotacao = await prisma.lotacao.create({
      data:{
        "valorTotal": lotacaoUnico.valorTotal,
        "quantidade": lotacaoUnico.quantidade,
        "id_perfil": lotacaoUnico.id_perfil,       
        "id_setor": lotacaoUnico.id_setor,    
        "id_evento": lotacaoUnico.id_evento
      }
    })
  }*/

   /* for (const eventoUnico of Eventos) {
        const evento = await prisma.evento.create({
          data:{
            "data": new Date(eventoUnico.data),
            "descricao": eventoUnico.descricao,
            "nome": eventoUnico.nome,       
            "id_endereco": eventoUnico.id_endereco,    
            "id_promoter": eventoUnico.id_promoter,
            "banner": eventoUnico.banner,        
          }
        })
      }
*/
    /*for (const ingressoUnico of Ingressos) {
        const ingresso = await prisma.ingresso.create({
          data:{
            "valor_pago": ingressoUnico.valor_pago,
            "id_lotacao": ingressoUnico.id_lotacao,
            "id_compra": ingressoUnico.id_compra,
          }
        })
}*/

    /*const promoter = await prisma.promoter.create({
        data:{
            "id_usuario" : 24,
            "cpf" : "75848596587",
            "cnpj" : null,
            "status" : "aprovado", 
            "data_nasc": new Date(1999, 12, 24),
            "telefone" : "89854798615",  
            "id_endereco" : 15    
        } 
       })
        const promoter2 = await prisma.promoter.create({
          data:{
              "id_usuario" : 25,
              "cpf" : "78848591452",
              "cnpj" : null,
              "status" : "pendente", 
              "data_nasc": new Date(1997, 10, 20),
              "telefone" : "89854718547",  
              "id_endereco" : 16    
          }
    
    
       }) 
    
       const promoter3 = await prisma.promoter.create({
        data:{
            "id_usuario" : 26,
            "cpf" : null,
            "cnpj" : "74568591405742",
            "status" : "aprovado", 
            "data_nasc": new Date(1990, 8, 15),
            "telefone" : "65853218547",  
            "id_endereco" : 17   
        } 
    
     }) 
    
     const promoter4 = await prisma.promoter.create({
      data:{
          "id_usuario" : 27,
          "cpf" : null,
          "cnpj" : "74562346505742",
          "status" : "suspenso", 
          "data_nasc": new Date(1992, 5, 12),
          "telefone" : "65645218547",  
          "id_endereco" : 18    
      } 
    
    })*/

    /*for (const clienteUnico of Clientes) {
        const cliente = await prisma.cliente.create({
          data:{
            "cpf": clienteUnico.cpf,
            "telefone": clienteUnico.telefone,
            "data_nasc": new Date(clienteUnico.data_nasc),
            "id_usuario": clienteUnico.id_usuario,
            "id_endereco": clienteUnico.id_endereco,
            "id_cartao": clienteUnico.id_cartao,
          }
        })
}*/


    /*for (const endereco of addresses) {
        const setor = await prisma.endereco.create({
          data:{
            "rua": endereco.rua,
            "numero": endereco.numero,
            "bairro": endereco.bairro,
            "cidade": endereco.cidade,
            "estado": endereco.estado,
            "cep": endereco.cep,
            "complemento": endereco.complemento
          }
        })
      }*/

    /*for (const setorUnico of Setores) {
        const setor = await prisma.setor.create({
          data:{
            "nome": setorUnico.name
          }
        })
      }
  
    for (const perfilUnico of Perfis) {
      const perfil = await prisma.perfil.create({
        data:{
          "nome": perfilUnico.name
        }
      })
    }*/



    /*for (const AdmUnico of Administradores) {
        const Adm = await prisma.administrador.create({
          data:{
            "cpf": AdmUnico.cpf,
            "super_adm": AdmUnico.super_adm,
            "id_usuario": AdmUnico.id_usuario,
          }
        })
      }*/
    /*for (const cartao of cartoes) {
        await prisma.cartao_Credito.create({
          data: {
            num_cartao: cartao.num_cartao,
            dono_cartao: cartao.dono_cartao,
            data_vencimento: cartao.data_vencimento,
            cvv: cartao.cvv,
          },
        });
      }
    
    for (const UsuarioUnico of Usuarios) {
        const usuario = await prisma.usuario.create({
          data:{
            "nome": UsuarioUnico.name,
            "email": UsuarioUnico.email,
            "senha": UsuarioUnico.senha,
          }
        })
      }*/

      for (const clienteUnico of Clientes) {
        const cliente = await prisma.cliente.create({
          data:{
            "cpf": clienteUnico.cpf,
            "data_nasc": new Date(clienteUnico.data_nasc),
            "id_usuario": clienteUnico.id_usuario,
            "id_endereco": clienteUnico.id_endereco,
            "id_cartao": clienteUnico.id_cartao,
          }
        })
   
   
   


}main()
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