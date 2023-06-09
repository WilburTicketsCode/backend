
export default function CardCartaoItem(props: any) {
    return(
    <div className="card flex flex-row px-2 py-3">

        <div className="card-details flex flex-row  rounded-lg h-12 w-full">


            <div className="top flex flex-row justify justify-between">

                <p className=" text-[11px] font-sans px-1 ">
                    Cartão de Crédito
                </p>


                <p className="text-[11px] font-sans text-gray-700 px-2 ">
                    termina em: {props.finalCartao}
                </p> 

                <p className="text-[11px] font-sans text-gray-700 px-2 ">
                    vence em: {props.dataVencimento}
                </p>
                
                <a href="/profile/costumer"><p className="text-[8px] font-sans text-blue-700 underline px-2 ">Alterar</p></a>
                

            </div>

        </div>


    </div>
    )
}