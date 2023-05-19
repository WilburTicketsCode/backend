import CardIngressoItem from "../cardIngressosItem"

export default function CardIngresso(){ 
    return(
        <div className="container  mx-auto">

            <div className ="bg-white overflow-y-auto sm:h-52 md:w-72 h-[420px]  lg:h-96 w-96 rounded-lg ">

                <h6 className="text font-semibold px-2">Revisar Ingressos</h6> 

                <div>

                <CardIngressoItem imagem = "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" 
                data = "05/04" nome = "Djavan turnê A" quantidade = "2" precoToTal = "100,00"/> 

                <CardIngressoItem imagem = "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                data = "06/05" nome = "Djavan turnê B" quantidade = "10" precoToTal = "1000,00"/>
                
                <CardIngressoItem imagem = "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" 
                data = "07/06" nome = "Djavan turnê C" quantidade = "8" precoToTal = "500,00"/>

                <CardIngressoItem imagem = "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" 
                data = "08/07" nome = "Djavan turnê D" quantidade = "21" precoToTal = "10000,00"/> 



                </div>
            </div>
            
        </div>
    )
}