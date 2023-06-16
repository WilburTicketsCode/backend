
import { useState } from "react";
import { Alert, Button } from "@material-tailwind/react";
import { useShoppingCart } from "@/contexts/ShoppingCartContext";
import { CheckCircleIcon } from "@heroicons/react/24/solid"
import { Compra } from "../../../../../../lib/cliente";
import { useSession } from "next-auth/react";
import { Lotacao } from "@prisma/client";
import { any } from "zod";


function refreshPage() {
    window.location.replace('/');
}


export default function ButtonFinalizar(Cartinfo: any) {
    const [openAlert, setOpenAlert] = useState(false);
    const { restartCartDef } = useShoppingCart();
    const { data: session } = useSession();


    let setores: number[] = []
    setores = Cartinfo.lotacoes?.reduce((resultado: number[], lot: Lotacao) => {
        if (!resultado?.includes(lot.id_setor)) {
            resultado?.push(lot.id_setor);
        }
        return resultado;
    }, [])


    function createIngressos() {

        const Ingressos = [];

        for (let eventos of Cartinfo.CartEventoss) {
            if (typeof eventos == "undefined") {
                console.log(typeof eventos);
                return []
            } else {
                for (let lotacoes of eventos.lotacao) {
                    if (Cartinfo.CartItems.map((item: any) => item.id).includes(lotacoes.id)) {

                        const nIngressos = Cartinfo.CartItems.find((item: any) => item.id === lotacoes.id).quantidade

                        for (let i = 0; i < nIngressos; i++) {
                            const Ingresso = {
                                valor_pago: lotacoes.valorTotal,
                                id_lotacao: lotacoes.id,
                            }

                            Ingressos.push(Ingresso)
                        }
                    }
                }


            }
        }

        return (Ingressos);
    }



    async function finalizarCompra(Compras: any) {
        const jaison = JSON.stringify({
            cpfCliente: Compras. cpfCliente,
            ingressos: Compras.ingressos
        })

        console.log("Exemplo de como o JSON para cadastrar compra deve ser feito:\n" +jaison)

        console.log(Compras)
        
        
        
        const res = await fetch("/api/cliente/finalizar-compra", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: jaison
        }) 
        
    

    }

    const buttonAction = () => {
        setOpenAlert(true);

        const ing = createIngressos();
        const cpf = session?.user.id;

        const Compra = {
            cpfCliente: cpf,
            ingressos: ing
    
        }
        finalizarCompra(Compra);
        restartCartDef();

        setTimeout(() => {
            setOpenAlert(false);
            refreshPage();
        }, 2000);

    }

    return (
        <>
            <button onClick={buttonAction} className="bg-purple-800  h-[23px] w-[100px] rounded-lg font-sans text-[10px] text-white">
                Finalizar Pagamento</button>


            <Alert
                open={openAlert}
                color="green"
                className="max-w-[20%] absolute bottom-5"
                icon={<CheckCircleIcon className="mt-px h-6 w-6" />}
            >
                <p className="font-normal">
                    Compra Finalizada!!
                </p>
            </Alert>
        </>

    )
}