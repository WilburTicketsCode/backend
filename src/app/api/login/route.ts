import prisma from "../../../../lib/prisma";

interface RequestBody {
    email: string
    password: string
}
export async function POST(request:Request) {
    const body:RequestBody = await request.json()

    const user = await prisma.usuario.findUnique({
        where: {
          email: body.email,
        },
        include: {
          adm: true,
          promoter: true,
          cliente: true
        }
      });

    if (user && user.senha === body.password){
        if (user.adm !== null){
            const userWithoutPass = {
                name: user.nome,
                email: user.email,
                role: "administrador",
                id: user.adm.cpf
            }
            return new Response(JSON.stringify(userWithoutPass))
        } else if (user.promoter !== null){
            if (user.promoter && user.promoter.cnpj !== null){
                const userWithoutPass = {
                    name: user.nome,
                    email: user.email,
                    role: "promoter",
                    id: user.promoter.cnpj
                }
                return new Response(JSON.stringify(userWithoutPass))
            } else if (user.promoter && user.promoter.cpf !== null){
                const userWithoutPass = {
                    name: user.nome,
                    email: user.email,
                    role: "promoter",
                    id: user.promoter.cpf
                }
                return new Response(JSON.stringify(userWithoutPass))
            }
            
        } else if (user.cliente !== null) {
            const userWithoutPass = {
                name: user.nome,
                email: user.email,
                role: "cliente",
                id: user.cliente.cpf
            } 
            return new Response(JSON.stringify(userWithoutPass))
        }
    } else {
        return new Response(JSON.stringify("ERROR 03"))
    }

}