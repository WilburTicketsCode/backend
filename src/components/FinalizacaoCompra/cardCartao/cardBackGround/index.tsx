import CardCartaoItem from "../cardCartaoItem"
import Dropdown from "../dropdownParcelas"

export default function CardCartao() {
    return (
        <div className="container py-auto mx-auto">
            <div className="bg-white sm:h-28 md:w-64 h-32 lg:h-40 w-96 rounded-lg  ">

                <h6 className="font-semibold px-2">Método de Pagamento</h6>

                <CardCartaoItem imagem="https://i.pinimg.com/originals/37/ec/77/37ec777fa00a64ebb61e47ede3205567.png"
                    bandeira="Mastercard" finalCartao="0478" />
                
                <div className="relative flex flex-col justify-center items-center gap-5 pt-1">
                <Dropdown/>
                </div>
            </div>

        </div>
    )
}