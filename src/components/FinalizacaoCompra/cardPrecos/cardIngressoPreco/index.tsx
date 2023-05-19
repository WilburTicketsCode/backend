import CardPreco from "../cardBackGround"


export default function CardPrecoTotal(props:any){
    return(
        <div className="card flex flex-row px-2 py-2 h-[220px]">

        <div className="flex flex-row rounded-lg bg-gray-200 w-full h-full px-2 py-2">

                <h2 className="font-semibold px-1 text-[11px] ">Ingressos:</h2> 

                <div className="flex flex-col items-end ">
                    
                    <div>
                    <p className="font-sans text-[8px] px-32 py-1">100,00{props.preco}</p>
                    <p className="font-sans text-[8px] px-32 py-1">1000,00{props.preco}</p>
                    <p className="font-sans text-[8px] px-32 py-1">500,00{props.preco}</p>
                    <p className="font-sans text-[8px] px-32 py-1">10000,00{props.preco}</p>

                    <p className="font-sans text-[10px] px-py-1">--------------------------------------------------------------</p>

                    <p className="font-sans text-[8px] px-28 py-1">Total:R$11600,00{props.total} </p>

                    <button className="bg-purple-800 h-[23px] w-[100px] rounded-lg font-sans text-[10px] text-white">Finalizar Pagamento</button>
                    
                    </div>

                    
                    
                </div>

                

                

        </div>

        </div>
    )
}