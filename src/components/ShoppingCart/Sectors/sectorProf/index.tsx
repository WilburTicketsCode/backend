import {Button} from '@/components/ClientSide'

export default function SectorProf(props: any){
    return(
        <div className="grid grid-cols-3 h-[30px]">

            <p className="flex mx-auto text-center items-center text-[#404C76] font-bold">{props.nomePerfil}</p>
            
            <div className="flex mx-auto text-center items-center">

                <Button className="h-[15px] w-[15px] p-0 text-blue-gray-700 bg-gray-500">-</Button>
                
                <p className='mx-1 bg-[#D9D9D9] w-[20px]'>{props.quantidade}</p>
                
                <Button className="h-[15px] w-[15px] p-0 text-blue-gray-700 bg-gray-500">+</Button>
                
                <Button className="h-[15px] w-[15px] p-0 bg-transparent ml-1">
                    <img src="/icons/bin.svg" alt="" className="h-[15px] w-[15px]"/>
                </Button>

            </div>

            <div className= "flex ml-1 col-auto row-auto items-center">
                <p className="flex text-left items-center ">R${props.preco}</p>
            </div>

        </div>
    )
}