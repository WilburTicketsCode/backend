'use client'
import { Button } from '@/components/ClientSide';
import { useShoppingCart } from "@/contexts/ShoppingCartContext"

export default function CartButton(){
    const {addToCart} = useShoppingCart()
    return(
        <div>
            <Button type="submit" onClick={() => addToCart()} className="bg-roxo-wil m-auto flex gap-3 rounded-full p-2">
                Adicionar ao carrinho
            </Button> 
        </div>
    )
}