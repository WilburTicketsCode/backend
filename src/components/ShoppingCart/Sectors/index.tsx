import SectorProf from "./sectorProf"

export default function Sector(props: any){

    return(
        <div className="grid grid-cols-4 h-[4rem] m-2">

            <div className="text-[14px] pt-1 flex flex-col font-bold text-[#404C76]">
                <p>{props.nomeSetor}</p>
            </div>

            <div className="col-span-3">
                {props.lotacoes_setor?.map((ingre: any) =>{
                    return <SectorProf key={ingre.id} id={ingre.id} idSetor={props.id_setor}></SectorProf>
                })}
            </div>

        </div>
    )
}