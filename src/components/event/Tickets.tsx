export default function Tickets({setor} : any) {
    return (
        <div className="mb-8">
            <div className="rounded-lg bg-indigo-400">
                <p className="text-center">{setor}</p>
            </div>
            <div className="flex flex-wrap gap-20">
                <div className="flex-col">
                    <p>Meia</p>
                    <p>R$100,00</p>
                    <input type="number" min="0" defaultValue="0" className="w-10 h-10 outline outline-offset-2 outline-1 outline-deep-purple-400 rounded-md"/>
                </div>
                <div className="flex-col">
                    <p>Inteira</p>
                    <p>R$200,00</p>
                    <input type="number" min="0" defaultValue="0" className="w-10 h-10 outline outline-offset-2 outline-1 outline-deep-purple-400 rounded-md"/>
                </div>

                <div className="flex-col">
                    <p>Gratuita</p>
                    <p>R$0,00</p>
                    <input type="number" min="0" defaultValue="0" className="w-10 h-10 outline outline-offset-2 outline-1 outline-deep-purple-400 rounded-md"/>

                </div>

            </div>
        </div>
    )
}