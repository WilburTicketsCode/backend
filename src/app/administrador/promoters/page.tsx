"use client";
import React, { useState } from "react";
import { Tabs, TabsHeader, TabsBody, Tab, TabPanel } from "@/components/ClientSide";
import CardPromotersPendentes from "@/components/Admin/Promoters/Cards/Aprovados";

export default function adm_promoters() {
    const [activeTab, setActiveTab] = React.useState("aprovado");

    const labels = [
        {
            label: "Aprovados",
            statusTab: "aprovado",
        },
        {
            label: "Pendentes",
            statusTab: "pendente",
        },
        {
            label: "Suspensos",
            statusTab: "suspenso",
        }
    ]

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

    const data = [
        {
            label: "Aprovados",
            status: "aprovado",
            desc: `It really matters and then like it really doesn't matter.
                   What matters is the people who are sparked by it. And the people 
                   who are like offended by it, it doesn't matter.`,
        },
        {
            label: "Pendentes",
            status: "pendente",
            desc: `Because it's about motivating the doers. Because I'm here
                   to follow my dreams and inspire other people to follow their dreams, too.`,
        },
        {
            label: "Suspensos",
            status: "suspenso",
            desc: `We're not always in the position that we want to be at.
                   We're constantly growing. We're constantly making mistakes. We're
                   constantly trying to express ourselves and actualize our dreams.`,
        }
    ];
    return (
        <div className="bg-cinza-wil mx-8 mt-14 rounded-lg mb-14 h-[570px] overflow-hidden">
            <Tabs id="custom-animation" value={activeTab} >
                <TabsHeader
                    className="rounded-t-lg border-b bg-cinza-wil p-0"
                    indicatorProps={{
                        className: "border-b-4 border-roxo-wil shadow-none rounded-t-lg",
                    }}
                >
                    {labels.map(({ label, statusTab }) => (
                        <Tab
                            key={statusTab}
                            value={statusTab}
                            onClick={() => setActiveTab(statusTab)}
                            className={activeTab === statusTab ? "text-roxo-wil rounded-t-lg" : "text-roxo-wil/90 rounded-t-lg"}
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
                    className="flex flex-col overflow-y-scroll h-[527px]"
                >
                    {labels.map(({ statusTab }) => (
                        <TabPanel key={statusTab} value={statusTab} className="flex flex-col items-center">
                            <div className="grid grid-cols-12 md:col-span-6 xl:col-span-4 h-full xl:gap-x-8 md:gap-8 gap-y-8 mt-4 mb-4 2xl:col-span-3">
                                {data2.map(({ id, status, usuario, eventos }) => (
                                    status === statusTab &&
                                    <CardPromotersPendentes email={usuario.email} nome={usuario.nome} status={statusTab} eventos={eventos.length} id={id} /> /*email="fulano1@gmail.com" nome="Fulano1" status="Aprovado" eventos={20} id={1}*/
                                ))}
                            </div>
                        </TabPanel>
                    ))}
                </TabsBody>
            </Tabs>
        </div>
    )


};