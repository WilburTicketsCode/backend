import Example from "@/components/cardEventoPromoter"

export default function eventosPromoter (){
    return(
       <div className="flex items-center justify-center min-h-screen container mx-auto">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2  lg:grid-cols-3 h-36">

            <Example imagem = "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" 
            data="05/04" local="Recife - PE" nome="Djavan turnê A" ></Example>

            <Example imagem = "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
            data="06/05" local="Salvador - BA" nome="Djavan turnê B"></Example>

            <Example imagem = "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" 
            data="07/06" local="Cachoeira - BA" nome="Djavan turnê C"></Example>

            <Example imagem = "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" 
            data="08/07" local="Feira de Santana - BA" nome="Djavan turnê D"></Example>
            </div>
       </div> 
    )
}