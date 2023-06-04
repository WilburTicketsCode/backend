import Ticket from '@/components/Ticket';

function searchTicket(compras: any, ticketId: number) {
  for (let i = 0; i < compras.length; i++) {
    const compra = compras[i];
    for (let j = 0; j < compra.ingressos.length; i++) {
      const ticket = compra.ingressos[i];
      if (ticket.id === ticketId) {
        return ticket
      }
    }
  }
  return null
  }
  

function searchLotacao(eventos: any, lotacaoId: number) {
  for (let i = 0; i < eventos.length; i++) {
    const evento = eventos[i];
    for (let i = 0; i < evento.lotacao.length; i++) {
      const lotacao = evento.lotacao[i];
      if (lotacao.id === lotacaoId) {
        return [evento, lotacao]
      }
    }
  }
  return []
  }

async function loadEvent() {
  const res = await fetch(`http://localhost:3000/api/evento`, { 
          next: {
              revalidate: 3600 // Atualiza o cache a cada 1h
          } 
      }); 

  return res.json();
}

async function loadCustomer(cpf: String) {
  const res = await fetch(`http://localhost:3000/api/cliente/${cpf}`, { 
          next: {
              revalidate: 3600 // Atualiza o cache a cada 1h
          } 
      }); 

  return res.json();
}

async function loadPromoter(cpf: String) {
  const res = await fetch(`http://localhost:3000/api/promoter/${cpf}`, { 
          next: {
              revalidate: 3600 // Atualiza o cache a cada 1h
          } 
      }); 

  return res.json();
}


export default async function Dash() {
  const id_ingresso = 1;
  const customer = await loadCustomer("66668230016");
  const ticket = searchTicket(customer.compras, id_ingresso);
  const events = await loadEvent();
  const evento = searchLotacao(events, ticket.id_lotacao);

  let promoter;
  if (evento[0].promoter.cpf != null) {
    promoter = await loadPromoter(evento[0].promoter.cpf)
  } else {
    promoter = await loadPromoter(evento[0].promoter.cnpj)
  }

  let perfil;
  if (evento[1].id_perfil === 1) {
    perfil = "Inteira"
  } else if (evento[1].id_perfil === 2){
    perfil = "Meia"
  } else {
    perfil = "Gratuito"
  }

  let setor;
  if (evento[1].id_setor === 1) {
    setor = "Vip"
  } else if (evento[1].id_setor === 2){
    setor = "Camarote"
  } else {
    setor = "Backstage"
  }
  
  
  const data = {
    local: evento[0].endereco,
    data: evento[0].horaInicio,
    promoter: promoter.usuario.nome,
    id_ingresso: id_ingresso,
    perfil: perfil,
    setor: setor,
    nome: customer.usuario.nome,
    cpf: customer.cpf
  }

  console.log(data)

  return(
    <div className="w-full h-full pt-32 flex justify-center">
      <Ticket />
    </div>
  )
}