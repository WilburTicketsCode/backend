import { NextResponse } from "next/server";
import { Cliente, getClientes, inserirCliente } from "../../../../lib/cliente";
import { cpfDuplicado, emailDuplicado } from "../../../../lib/erros";
import { mailOptions, transporter, trocarDestinatario } from "../../../../lib/nodemailer";


/* Banco pessoal
mysql://root:(SENHA)@localhost:3306/(NOME DO BANCO) 
*/

/* Banco PlanetScale (Com erro)
mysql://nh7ntf3fxeucxnnj0c6s:pscale_pw_Xy42bmYPRmC8byFrTK6SzV7jv4OABObnuFmuSZogCrY@aws.connect.psdb.cloud/bd_wilticket?sslaccept=strict
*/

export async function GET(request: Request) {
    const data = await getClientes()
    
    return NextResponse.json(data)
}

export async function POST(request:Request) {
    const dados: Cliente = await request.json()
    if (dados !== null){
        try {
            const cliente = await inserirCliente(dados)
    
            if (cliente === null) {
                return NextResponse.json("ERROR 00")
            } else {
                console.log("Dados criados.\n", cliente);
                trocarDestinatario(dados.usuario.email)
                    await transporter.sendMail({
                        ...mailOptions,
                        subject: 'Verificando Conta Wilbor',
                        text: 'Email vindo diretamente do mado do backend',
                        html: '<h1>MAGO DO BACKEND</h1><p>Email enviado pelo mago do backend' +
                        ' quando sua conta foi criada no melhor site do universo. Sinta-se' +
                        ' honrado de estar recebendo o email do mago do beck-end Pedro VI</p>'
                    })
                return NextResponse.json(cliente)
            }

        } catch (e) {
            if (e instanceof cpfDuplicado){
                return NextResponse.json("ERROR 01")
            } else if (e instanceof emailDuplicado){
                return NextResponse.json("ERROR 02")
            }
        }
        
       
    } 

}