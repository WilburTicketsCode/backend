'use Client'

import CartTickets from "@/components/ShoppingCart/CartTickets"
import TotalCart from "@/components/ShoppingCart/TotalCart"
import ListTickets from "@/components/ShoppingCart/ListTickets"
import {Button} from '@/components/ClientSide'

export default function Cart(){
    return(
        <div>
            <div className="flex flex-col lg:flex-row-reverse lg:gap-3 lg:justify-center lg:items-start items-center w-[98vw] min-h-[8rem] m-10">

                <div className="mt-3">
                    <TotalCart></TotalCart>
                </div>

                <div >
                    <div>
                        <ListTickets></ListTickets>
                    </div>
                    
                </div>

                
            </div>
        </div>
    )
}