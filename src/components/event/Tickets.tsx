
export default function Tickets(props: any) {
    return (
        <div className="mb-8 bg-gray-100 rounded-md p-4">
            <div className="grid grid-cols-4 gap-8 text-center">
                <p className="font-bold">{props.setor}</p>
                <p className="text-deep-purple-400 font-bold">{props.perfil}</p>
                <p>R${props.valor},00</p>
                <input type="number" min="0" defaultValue="0" className="w-10 h-7 outline outline-offset-2 outline-1 outline-deep-purple-400 rounded-md"/>
            </div>
        </div>
    )
}