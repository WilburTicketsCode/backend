import { prisma } from "../../../../lib/prisma"

interface RequestBody {
    email: string
    password: string
}
export async function POST(request:Request) {
    const body:RequestBody = await request.json()

    const user = await prisma.usuario.findFirst({
        where: {
            email: body.email,
        }
    })

    if (user && user.senha === body.password){
        const {senha, ...userWithoutPass} = user
        return new Response(JSON.stringify(userWithoutPass))
    } else {
        return new Response(JSON.stringify(null))
    }

}