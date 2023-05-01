import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
async function main() {
   const card = await prisma.cartao_Credito.create({
    data:{
        "num_cartao": "6052 6589 6548 0123",
        "dono_cartao": "Nalbert Santos Araujo",
        "data_vencimento": "12/28",
        "cvv":    "609"    
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