import SectorProf from "./sectorProf"
import { useShoppingCart } from "@/contexts/ShoppingCartContext"
import { Lotacao } from "@prisma/client";

export default function Sector(props: any){
    const { cartItems } = useShoppingCart()
    let idsSetor: number []= []
    idsSetor = props.lotacoes_setor?.reduce((resultado:number[], lot: Lotacao) =>{
              if (!resultado?.includes(lot.id)) {
                resultado?.push(lot.id);
              }
                return resultado;
        }, [])

    return(
        <div className="grid grid-cols-4 h-[90px] m-2">

            <div className="text-[14px] pt-2 flex flex-col font-bold text-[#404C76]">
                <p>{props.nomeSetor}</p>
            </div>

            <div className="col-span-3">
                {props.lotacoes_setor?.map((ingre: any) =>{
                    return <SectorProf key={ingre.id} id={ingre.id}></SectorProf>
                })}
            </div>

        </div>
    )
}