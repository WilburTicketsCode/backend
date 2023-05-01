import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
   const card = await prisma.administrador.create({
    data:{
        "cpf": "985.654.968-98"
        "super_adm": true;
        
        Usuario:{
            create: {
            "nome" : "Albert",
            "email" : "Nsa@gmail.com",
            "senha": "566854964"}
        }

           
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