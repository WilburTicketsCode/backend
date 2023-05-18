
export default function Tickets(props: any) {
    return (
        <div className="mb-8 bg-gray-100 rounded-md p-4">
            <div className="grid gap-8 lg:grid-cols-4 md:grid-cols-4 sm:grid text-sm text-center">
                <h4 className="font-bold">{props.setor}</h4>
                <h4 className="text-deep-purple-400 font-bold">{props.perfil}</h4>
                <h4 className="font-bold">{props.valor.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</h4>
                <div className="justify-center"><input type="number" min="0" defaultValue="0" className="w-10 h-7 outline outline-offset-2 outline-1 outline-deep-purple-400 rounded-md"/></div>
            </div>
        </div>
    )
}