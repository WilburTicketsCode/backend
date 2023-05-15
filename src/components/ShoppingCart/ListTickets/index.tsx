import CartTickets from "@/components/ShoppingCart/CartTickets"

export default function ListTickets(){
    return(
        <div className="bg-[#FFF9F9] w-[350px] min-h-[615px] mt-3 rounded-xl flex flex-col items-center">
            <h1 className="text-center text-[30px]">Carrinho de Compras</h1>
            <CartTickets></CartTickets>
            <CartTickets></CartTickets>
        </div>
    )
}