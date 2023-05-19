

export default function CardIngressoItem(props: any){
    return(

        <div className="card flex flex-row px-2 py-2">

            <div className="card-details flex flex-row  rounded-lg bg-gray-200 h-12 w-full">
                <img src={props.imagem} 
                alt="thumnail" className="tumbnail rounded-lg px-py " 
                height="50" width="75"/>

                <div className="top flex flex-row justify justify-between">
                    <div className=" flex flex-col">
                    <p className=" text-[11px] font-sans px-1 "> 
                    {props.nome} 
                    </p>
                    <p className=" text-[11px] font-sans px-1 "> 
                    -{props.data}-
                    </p>
                    </div>
                    <div className="flex flex-col">
                        <p className="text-[11px] font-sans px-2 "> 
                        Quantidade:
                        </p>
                        <p className="text-[11px] font-sans px-7 ">
                            {props.quantidade}X
                        </p>
                    </div>
                    <p className="text-[8px] font-sans w-3 py-8 ">{props.precoToTal}</p>

                    
                </div> 

            </div>

            
        </div>
    )
}