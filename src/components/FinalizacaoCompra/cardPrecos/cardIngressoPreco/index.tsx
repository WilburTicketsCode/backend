import CardPreco from "../cardBackGround"


export default function CardPrecoTotal(props:any){
    return(
        <div className="card flex flex-row overflow-x-hidden overflow-y-auto px-2 py-2 h-[220px]">

        <div className="flex flex-row rounded-lg  bg-gray-200 sm:h-[120px] sm:w-[450px] md:h-[130px] md:w-[300px]  lg:w-[300px] lg:h-[200px] px-2 py-2">

                <h2 className="font-semibold px-1 text-[11px] ">Ingressos:</h2> 

                <div className="flex flex-col items-end ">
                    
                    <div>
                    <p className="font-sans text-[8px] sm:px-64 md:px-32 ">100,00{props.preco}</p>
                    <p className="font-sans text-[8px] sm:px-64 md:px-32 ">1000,00{props.preco}</p>
                    <p className="font-sans text-[8px] sm:px-64 md:px-32 ">500,00{props.preco}</p>
                    <p className="font-sans text-[8px] sm:px-64 md:px-32 ">10000,00{props.preco}</p>


                    <p className="font-sans text-[8px] sm:px-60 md:px-28 py-1">Total: R$ 11600,00{props.total} </p>

                    <button className="bg-purple-800  h-[23px] w-[100px] rounded-lg font-sans text-[10px] text-white">Finalizar Pagamento</button>
                    
                    </div>

                    
                    
                </div>

                

                

        </div>

        </div>
    )
}