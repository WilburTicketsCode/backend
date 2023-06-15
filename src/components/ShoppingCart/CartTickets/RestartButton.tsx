'use client'
import {useShoppingCart } from "@/contexts/ShoppingCartContext"
import {Button} from '@/components/ClientSide'

export default function RestartButton(){
    const {restartCartDef} = useShoppingCart();

    function toDo(){
        restartCartDef()
    }
    return(
        <div>
            <Button onClick={()=> toDo()}>Reiniciar carrinho</Button>
        </div>
    )
}