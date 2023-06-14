"use client";
import React, { useEffect, useState } from "react";
import { Tabs, TabsHeader, TabsBody, Tab, TabPanel } from "@/components/ClientSide";
import CardPromotersAprovados from "@/components/Admin/Promoters/Cards/Aprovados";
import CardPromotersPendentes from "@/components/Admin/Promoters/Cards/Pendentes";
import CardPromotersSuspensos from "@/components/Admin/Promoters/Cards/Suspensos";

export default function admPromoters() {
    const [activeTab, setActiveTab] = useState("pendente");
    const [promotersList, setPromotersList] = useState<any[]>([]);
    const [atualizar, setAtualizar] = useState(false)

    const labels = [
        {
            label: "Pendentes",
            statusTab: "pendente",
        },
        {
            label: "Aprovados",
            statusTab: "aprovado",
        },
        {
            label: "Suspensos",
            statusTab: "suspenso",
        }
    ]
    
    const fetchEvents = async () => {
        const reponse = await fetch("/api/promoter");
        const data = await reponse.json();
        setPromotersList(data);
    }

    let mudou = 1

    useEffect(() => {
        fetchEvents();
    }, [atualizar]);
    
    async function setStatus(identificador: string, novoStatus: string){
        try {
            const dados = JSON.stringify({      //Constroi o body da requisição para api
                tipo: 'trocar status',
                novoDado: novoStatus,
                cpfORcnpj: identificador
            })

            const response = await fetch("/api/promoter",   //Efetua a requisição para a API para alterar o status do promoter
            { 
                method: "PUT",
                headers: {
                "Content-Type": "application/json",
                },
                body: dados
            })  
            if (response.ok){                                       //Verifica se a resposta da API foi 200
                setAtualizar(!atualizar)                            //Se o status foi realmente alterado, atualiza a lista de promoters
            } else {                                                //Caso a resposta da requisição para API seja diferente de 200
            alert("Não foi possível mudar o status do usuário!")    //Mostra que não foi possível alterar o status
            }
        } catch (e) {
            alert("Erro ao se comunicar com a API para mudar o status do usuário!")
        }
        
    }
  
    return (
        <div className="mx-8 mt-14 mb-14 h-[95vh] overflow-hidden rounded-lg">
            <Tabs id="custom-animation" value={activeTab} >                                               
                <TabsHeader
                    className="rounded-none bg-cinza-wil bg-opacity-100 p-0 mt-8 border-b-2 border-purple-gray-200"
                    style={{borderRadius: "8px 8px 0px 0px"}}
                    indicatorProps={{
                        className: "border-b-4 border-roxo-wil shadow-none rounded-none bg-cinza-wil",
                        style: {borderRadius: "8px 8px 0px 0px"}
                    }}
                >
                    {labels.map(({ label, statusTab }) => (
                        <Tab
                            key={statusTab}
                            value={statusTab}
                            onClick={() => setActiveTab(statusTab)}
                            className={activeTab === statusTab ? "text-roxo-wil" : "text-roxo-wil/90"}
                        >
                            {label}
                        </Tab>
                    ))}
                </TabsHeader>
                <TabsBody
                    animate={{
                        initial: { y: 250 },
                        mount: { y: 0 },
                        unmount: { y: 250 },
                      }}
                    className="flex flex-col overflow-y-scroll h-[80vh] bg-cinza-wil"
                >
                    {labels.map(({ statusTab }) => (
                        <TabPanel key={statusTab} value={statusTab} className="flex flex-col items-center">
                            <div className="grid grid-cols-12 h-full xl:gap-x-8 md:gap-8 gap-y-8 mt-4 mb-4">
                                {promotersList.map(({ id, status, usuario, cpf, cnpj, eventos, endereco, telefone }) => (
                                    status === statusTab && status === 'pendente' ? <CardPromotersPendentes key={id} email={usuario.email} telefone={telefone} nome={usuario.nome} identificacao={cpf ? cpf : cnpj ? cnpj : 'não identificado'} endereco={endereco} setStatus={setStatus} />
                                    : status === statusTab && status === 'aprovado' ? <CardPromotersAprovados key={id} email={usuario.email} telefone={telefone} nome={usuario.nome} identificacao={cpf ? cpf : cnpj ? cnpj : 'não identificado'} eventos={eventos.length} setStatus={setStatus} />
                                    : status === statusTab && <CardPromotersSuspensos key={id} email={usuario.email} telefone={telefone} nome={usuario.nome} identificacao={cpf ? cpf : cnpj ? cnpj : 'não identificado'} eventos={eventos.length} setStatus={setStatus} />
                                ))}
                            </div>
                        </TabPanel>
                    ))}
                </TabsBody>
            </Tabs>
        </div>
    )

};