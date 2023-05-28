import { getUsuario } from "../../../../lib/usuario"

interface RequestBody {
    email: string
    password: string
}
export async function POST(request:Request) {
    const body:RequestBody = await request.json()

    const user = await getUsuario(body.email);


    if (user && user.senha === body.password){
        if (user.adm !== null){
            const userWithoutPass = {
                name: user.nome,
                email: user.email,
                role: "administrador"
            }
            return new Response(JSON.stringify(userWithoutPass))
        } else if (user.promoter !== null){
            const userWithoutPass = {
                name: user.nome,
                email: user.email,
                role: "promoter"
            }
            return new Response(JSON.stringify(userWithoutPass))
        } else {
            const userWithoutPass = {
                name: user.nome,
                email: user.email,
                role: "cliente"
            } 
            return new Response(JSON.stringify(userWithoutPass))
        }
    } else {
        return new Response(JSON.stringify(null))
    }

}