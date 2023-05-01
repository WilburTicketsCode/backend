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
  ]
  
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

async function main() {

    for (const endereco of addresses) {
        const setor = await prisma.Endereco.create({
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
      }

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
    
   
   
   

   //Criar usuarios
   for (const UsuarioUnico of Usuarios) {
    const usuario = await prisma.usuario.create({
      data:{
        "nome": UsuarioUnico.name,
        "email": UsuarioUnico.email,
        "senha": UsuarioUnico.senha,
      }
    })
  }
   

}main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })