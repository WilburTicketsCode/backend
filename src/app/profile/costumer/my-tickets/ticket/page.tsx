import Ticket from '@/components/Ticket';

/*
async function loadEvent(cpf: string) {
  const res = await fetch(`http://localhost:3000/api/cliente/${cpf}`, { 
          next: {
              revalidate: 3600 // Atualiza o cache a cada 1h
          } 
      }); 

  return res.json();
}


export default async function Dash({params}: {params: { cpf: string }}) {
  const cliente = await loadEvent(params.cpf);
  console.log(cliente)
  return(
    <div className="w-full h-full pt-32 flex justify-center">
      <Ticket cliente={cliente}/>
    </div>
  )
}
*/

export default function Dash() {
  return (
    <div className="w-full h-full pt-32 flex justify-center">
      <Ticket />
    </div>
  )
}