import {Button} from '@/components/ClientSide'
import Link from 'next/link';

export default function TotalCart(){
    return(
        <div className="flex flex-col w-[350px] h-[200px] bg-[#FFF9F9] rounded-lg">

            <h1 className="text-center text-[30px]">Total do Carrinho:</h1>

            <div className="flex items-center justify-center m-auto bg-[#D9D9D9] h-[50px] w-[270px]">
                <h1 className="text-center text-[30px]">R$ 5400,00</h1>
            </div>

            <div className="flex flex-col items-center mt-auto mb-2">
                <Link href={'/shoppingCart/finalizacaoCompra'}><Button className="bg-purple-800 w-[140px] h-[40px] p-0 rounded-xl">Fechar pedido</Button></Link> 
            </div>
        </div>
    )
}