

export default function CardIngressoItem(props: any) {
    return (

        <div className="card flex flex-row px-2 py-2">

            <div className="card-details flex flex-row  rounded-lg bg-gray-200 h-12 w-full">
                <img src={props.imagem}
                    alt="thumnail" className="tumbnail rounded-lg px-py "
                    height="50" width="75" />

                <div className="top flex flex-row justify justify-between  space-x-16">
                    <div className=" flex flex-col w-16">
                        <p className=" text-[11px] font-sans pl-2">
                            {props.nome}
                        </p>
                    </div>
                    <div className="flex flex-col w-16">
                        <p className="text-[11px] font-sans ">
                            Quantidade:
                        </p>
                        <p className="text-[11px] font-sans  ">
                            {props.quantidade}X
                        </p>
                        <p className="text-[8px] font-sans my-2">Total:R${props.precoToTal}</p>
                    </div>


                </div>

            </div>


        </div>
    )
}