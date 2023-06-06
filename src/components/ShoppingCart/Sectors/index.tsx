import SectorProf from "./sectorProf"
import { useShoppingCart } from "@/contexts/ShoppingCartContext"

export default function Sector(props: any){
    const { cartItems } = useShoppingCart()

    return(
        <div className="grid grid-cols-4 h-[90px] m-2">

            <div className="text-[14px] pt-2 flex flex-col font-bold text-[#404C76]">
                <p>{props.nomeSetor}</p>
            </div>

            <div className="col-span-3">
                {cartItems?.map(item =>(
                    item.id !== undefined?<SectorProf key={item.id} {...item}></SectorProf>:null
                ))}
            </div>

        </div>
    )
}