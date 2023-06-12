"use client";
import React, { useEffect, useState } from "react";
import { Tabs, TabsHeader, TabsBody, Tab, TabPanel } from "@/components/ClientSide";
import CardPromotersAprovados from "@/components/Admin/Promoters/Cards/Aprovados";
import CardPromotersPendentes from "@/components/Admin/Promoters/Cards/Pendentes";
import CardPromotersSuspensos from "@/components/Admin/Promoters/Cards/Suspensos";

export default function adm_promoters() {
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
            if (response.ok){                       //Verifica se a resposta da API foi 200
                //const conteudoResposta = await response.json()      //obtém o body da resposta da API
                //if (conteudoResposta.status === novoStatus){        //Verifica se o status foi realmente alterado
                setAtualizar(!atualizar)                        //Se o status foi realmente alterado, atualiza a lista de promoters
                //} else {                                            //Senão
                //    alert("Não foi possível mudar o status do usuário!")    //Mostra que não foi possível alterar o status
                //}   
            } else {                                                //Caso a resposta da requisição para API seja diferente de 200
            alert("Não foi possível mudar o status do usuário!")             //Mostra que não foi possível alterar o status
            }
        } catch (e) {
            alert("Erro ao se comunicar com a API para mudar o status do usuário!")
        }
        
    }

    const data2 = [
        {
            id: 19,
            id_usuario: 42,
            cpf: "12312312312",
            cnpj: "",
            status: "pendente",
            data_nasc: "1999-05-30T00:00:00.000Z",
            telefone: "12312312312",
            id_endereco: 49,
            eventos: [],
            endereco: {
                id: 49, "rua": "Rua Z",
                numero: 123, "bairro": "Feira 6", "cidade": "Rua Z",
                estado: "BA", "cep": "21312-312", "complemento": "Nenhum"
            },
            usuario: {
                id: 42,
                nome: "Josevaldo",
                email: "jose123valdo@gmail.com"
            }
        },
        {
            id: 18,
            id_usuario: 33,
            cpf: "28419554006",
            cnpj: null,
            status: "aprovado",
            data_nasc: "2023-06-06T21:15:28.144Z",
            telefone: "6838738801",
            id_endereco: 40,
            eventos: [],
            endereco: {
                id: 40,
                rua: "Rua dos Jasmins",
                numero: 12,
                bairro: "Jardim das Flores",
                cidade: "São Paulo",
                estado: "SP",
                cep: "04567-890",
                complemento: "Apto 42"
            },
            usuario: {
                id: 33,
                nome: "Seu Jorge",
                email: "jorge@gmaiil.com"
            }
        },
        {
            id: 17,
            id_usuario: 32,
            cpf: "58429911014",
            cnpj: null,
            status: "aprovado",
            data_nasc: "2023-06-06T21:15:22.795Z",
            telefone: "8536231962",
            id_endereco: 39,
            eventos: [
                {
                    id: 11,
                    nome: "Festinha de Tosta",
                    horaInicio: "2023-06-01T21:00:00.000Z",
                    horaFim: "2023-01-07T01:00:00.000Z",
                    descricao: "Uma festa que ira ver Tosta",
                    banner: "nada",
                    id_promoter: 17,
                    id_endereco: 35,
                    status: "suspenso"
                }],
            endereco: {
                id: 39,
                rua: "Rua das Flores",
                numero: 123, "bairro": "Jardim Botânico",
                cidade: "Porto Alegre",
                estado: "RS", "cep": "90210-123",
                complemento: "Apartamento 401"
            },
            usuario: {
                id: 32,
                nome: "Borger Manuel",
                email: "borgerzada@outlook.com"
            }
        },
        {
            id: 16,
            id_usuario: 31,
            cpf: "72417917033",
            cnpj: null,
            status: "aprovado",
            data_nasc: "2023-06-06T21:15:22.469Z",
            telefone: "9136945571",
            id_endereco: 38,
            eventos: [
                {
                    id: 13,
                    nome: "Lollapalooza Brasil",
                    horaInicio: "2023-11-04T18:00:00.000Z",
                    horaFim: "2023-11-04T03:00:00.000Z",
                    descricao: "O Lollapalooza Brasil está de volta com um line-up imperdível de artistas nacionais e internacionais. Prepare-se para um fim de semana incrível no Autódromo de Interlagos, em São Paulo, repleto de música, arte e entretenimento. Explore diferentes gêneros musicais, desde o rock e pop até a música eletrônica e alternativa.",
                    banner: "/img/event-banner/lollapalooza.jpg",
                    id_promoter: 16,
                    id_endereco: 36,
                    status: "disponível"
                }
            ],
            endereco:
            {
                id: 38,
                rua: "Rua dos Girassóis",
                numero: 123,
                bairro: "Jardim das Flores",
                cidade: "Curitiba",
                estado: "PR",
                cep: "80000-000",
                complemento: ""
            },
            usuario:
            {
                id: 31,
                nome: "Luan Gabirel",
                email: "luanzito@gmaiil.com"
            }
        },
        {
            id: 15,
            id_usuario: 30,
            cpf: "45267413020",
            cnpj: null,
            status: "suspenso",
            data_nasc: "2023-06-06T21:15:21.081Z",
            telefone: "6523848514",
            id_endereco: 33,
            eventos: [
                {
                    id: 10,
                    nome: "Djavan Turnê D 2023",
                    horaInicio: "2023-07-30T22:00:00.000Z",
                    horaFim: "2023-07-31T02:00:00.000Z",
                    descricao: "Depois de encerrar o ano de 2022 com participações marcantes em importantes festivais, Djavan volta aos palcos em 2023 com uma longa série de shows da turnê ‘D’!",
                    banner: "/img/event-banner/show_djavan.jpeg",
                    id_promoter: 15,
                    id_endereco: 34,
                    status: "disponivel"
                },
                {
                    id: 12,
                    nome: "Rock in Rio",
                    horaInicio: "2023-09-29T20:00:00.000Z",
                    horaFim: "2023-09-30T05:00:00.000Z",
                    descricao: "O Rock in Rio está de volta para mais uma edição épica. Prepare-se para vivenciar dias incríveis de música, diversão e energia inigualável. O festival trará artistas nacionais e internacionais renomados, com performances emocionantes e shows memoráveis. Desfrute de uma experiência única no coração do Rio de Janeiro, na Cidade do Rock, com uma atmosfera vibrante e uma diversidade musical que atende a todos os gostos e estilos.",
                    banner: "/img/event-banner/rock-in-rio.jpg",
                    id_promoter: 15,
                    id_endereco: 35,
                    status: "disponível"
                },
                {
                    id: 14,
                    nome: "Festival de Verão Salvador",
                    horaInicio: "2023-12-10T21:00:00.000Z",
                    horaFim: "2023-12-11T07:00:00.000Z",
                    descricao: "O Festival de Verão Salvador é o lugar onde a alegria encontra a música. Desfrute de dias ensolarados, praia e shows incríveis no Parque de Exposições, em Salvador. Com uma mistura de ritmos como axé, sertanejo, pagode e música eletrônica, o festival promete agitar o público com artistas renomados.",
                    banner: "/img/event-banner/festival-de-verao.jpg",
                    id_promoter: 15,
                    id_endereco: 37,
                    status: "disponível"
                }
            ],
            endereco:
            {
                id: 33,
                rua: "Rua da Paz",
                numero: 123,
                bairro: "Centro",
                cidade: "São Paulo",
                estado: "SP", 
                cep: "01010-010", 
                complemento: "Apartamento 42"
            },
            usuario: 
            {
                id: 30,
                nome: "Rafeael Tosta",
                email: "tostinha123@yahoo.com" 
            }
        }
    ]

    
    function formatDate(date: string): string {
        const fullDate = date.slice(0,16).replaceAll('-', '/').replaceAll('T', '-').split('-');   
        const dateymdA = fullDate[0].split('/').reverse();      // Obtém o ano, mês e dia para ordenar como -> dia/mês/ano
        const dateymdS = `${dateymdA[0]}/${dateymdA[1]}/${dateymdA[2]}`;    // Formata a data para ser exibida corretamente
        return `${dateymdS}`
    }

    return (
        <div className="top-5 mx-8 mt-14 mb-14 h-[90vh] overflow-hidden rounded-lg">                        {/*h-[590px]*/}
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
                    /*animate={{
                        initial: { y: 250 },
                        mount: { y: 0 },
                        unmount: { y: 250 },
                      }}*/
                    className="flex flex-col overflow-y-scroll h-[80vh] bg-cinza-wil" /*h-[527px] */
                >
                    {labels.map(({ statusTab }) => (
                        <TabPanel key={statusTab} value={statusTab} className="flex flex-col items-center">
                            <div className="grid grid-cols-12 h-full xl:gap-x-8 md:gap-8 gap-y-8 mt-4 mb-4"> {/*md:col-span-6 xl:col-span-4 2xl:col-span-6*/}
                                {promotersList.map(({ id, status, usuario, cpf, cnpj, eventos, data_nasc, telefone }) => (
                                    status === statusTab && status === 'pendente' ? <CardPromotersPendentes key={id} email={usuario.email} telefone={telefone} nome={usuario.nome} identificacao={cpf ? cpf : cnpj ? cnpj : 'não identificado'} nascimento={formatDate(data_nasc)} setStatus={setStatus} />
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