import SectorProf from "./sectorProf"

export default function Sector(props: any){
    return(
        <div className="grid grid-cols-4 h-[90px] m-2">

            <div className="flex flex-col font-bold text-[#404C76]">
                <p>{props.nomeSetor}</p>
            </div>

            <div className="col-span-3">
                <SectorProf nomePerfil="Inteira" quantidade="1" preco="600,00"></SectorProf>
                <SectorProf nomePerfil="Meia" quantidade="1" preco="300,00"></SectorProf>
                <SectorProf nomePerfil="Gratuita" quantidade="1" preco="0,00"></SectorProf>
            </div>

        </div>
    )
}