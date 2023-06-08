import CardCartaoItem from "../cardCartaoItem"
import Dropdown from "../dropdownParcelas"

export default function CardCartao() {
    return (
        <div className="container py-auto mx-auto">
            <div className="bg-white overflow-y-auto sm:h-[150px] md:w-64 md:h-[155px] lg:h-[210px] w-96 rounded-lg  ">

                <h6 className="font-semibold px-2">Método de Pagamento</h6>

                <CardCartaoItem bandeira="Mastercard" finalCartao="0478" />
                
                <div className="relative flex flex-col justify-center items-center gap-5 pt-1">
                <Dropdown/>
                </div>
            </div>

        </div>
    )
}