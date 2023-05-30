import CardEventoPromoter from "@/components/cardEventoPromoter"

export default function eventosPromoter() {
    return (
        <div className="flex flex-col h-full items-center py-10 justify-center mt-4 pt-20 bg-gradient-to-br from-indigo-300 via-purple-800 to-blue-200">
            <div className="grid grid-cols-12 md:col-span-6 xl:col-span-4 h-full xl:gap-x-14 md:gap-8 gap-y-8 mt-4 mb-4">
                <CardEventoPromoter imagem="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                    data="05/04" local="Recife - PE" nome="Djavan turnê A" evento={4} ></CardEventoPromoter>

                <CardEventoPromoter imagem="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                    data="06/05" local="Salvador - BA" nome="Djavan turnê B" evento={3} ></CardEventoPromoter>

                <CardEventoPromoter imagem="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                    data="07/06" local="Cachoeira - BA" nome="Djavan turnê C" evento={2}></CardEventoPromoter>

                <CardEventoPromoter imagem="https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                    data="08/07" local="Feira de Santana - BA" nome="Djavan turnê D" evento={1} ></CardEventoPromoter>
            </div>
        </div>
    )
}