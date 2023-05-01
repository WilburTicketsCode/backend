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

async function main() {
   const card = await prisma.cartao_Credito.create({
    data:{
        "num_cartao": "6052 6589 6548 0123",
        "dono_cartao": "Nalbert Santos Araujo",
        "data_vencimento": "12/28",
        "cvv":    "609"    
    }
   })

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