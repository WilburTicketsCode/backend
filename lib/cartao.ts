import { getCliente } from "./cliente"
import prisma from "./prisma"
import { getUsuario } from "./usuario"

export type Cartao = {
    num_cartao: string,
    dono_cartao: string,
    data_vencimento: string,
    cvv: string
    usuario_email: string
}

export async function inserirCartao(cartao: Cartao) {

    const usuario = await getUsuario(cartao.usuario_email)
    console.log("USUARIO: ", usuario)

    const cartaoBD = await prisma.cartao_Credito.findUnique({
        where: {
            num_cartao: cartao.num_cartao
        }
    })

    console.log(cartaoBD)

    if (cartaoBD !== null) {
        if (usuario !== null) {
            if (usuario.cliente !== null) {
                const cliente = await prisma.cliente.findUnique({
                    where: {
                        id_usuario: usuario?.id
                    }
                })

                if (cliente !== null) {
                    cliente.id_cartao = cartaoBD.id
                    const clienteCartaoAdicionado = await prisma.cliente.update({
                        where: {
                            id_usuario: usuario.id
                        },
                        data: cliente,
                    })
                }
                return cartaoBD
            }
        }
    } else {
        if (usuario !== null) {
            if (usuario.cliente !== null) {
                const cliente = await prisma.cliente.findUnique({
                    where: {
                        id_usuario: usuario?.id
                    }
                })
                console.log("CLIENTE: ", cliente)
                if (cliente !== null){
                    const cartaoData = await prisma.cartao_Credito.create({
                        data: {
                            num_cartao: cartao.num_cartao,
                            dono_cartao: cartao.dono_cartao,
                            data_vencimento: cartao.data_vencimento,
                            cvv: cartao.cvv,
                        }
                    })
                    console.log("CARTAO: ", cartaoData)
                    cliente.id_cartao = cartaoData.id
                    const clienteCartaoAdicionado = await prisma.cliente.update({
                        where: {
                            id_usuario: usuario.id
                        },
                        data: cliente,
                    })
                    console.log("CLIENTE EDITADO: ", clienteCartaoAdicionado)
                    return cartaoData
                }
            }
        }
    }

    return cartaoBD
    
}