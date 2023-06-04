"use client";
import React, { useState } from "react";
import { Tabs, TabsHeader, TabsBody, Tab, TabPanel } from "@/components/ClientSide";
import CardPromotersAdm from "@/components/Admin/PromotersAdmin";

export default function adm_promoters() {
    const [activeTab, setActiveTab] = React.useState("aprovados");
    const data = [
        {
            label: "Aprovados",
            value: "aprovados",
            desc: `It really matters and then like it really doesn't matter.
                   What matters is the people who are sparked by it. And the people 
                   who are like offended by it, it doesn't matter.`,
        },
        {
            label: "Pendentes",
            value: "pendentes",
            desc: `Because it's about motivating the doers. Because I'm here
                   to follow my dreams and inspire other people to follow their dreams, too.`,
        },
        {
            label: "Suspensos",
            value: "suspensos",
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
                    {data.map(({ label, value }) => (
                        <Tab
                            key={value}
                            value={value}
                            onClick={() => setActiveTab(value)}
                            className={activeTab === value ? "text-roxo-wil rounded-t-lg" : "text-roxo-wil/90 rounded-t-lg"}
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
                    {data.map(({ value, desc }) => (
                        <TabPanel key={value} value={value} className="flex flex-col items-center">
                            <div className="grid grid-cols-12 md:col-span-6 xl:col-span-4 h-full xl:gap-x-8 md:gap-8 gap-y-8 mt-4 mb-4 2xl:col-span-3">
                                <CardPromotersAdm email="fulano1@gmail.com" nome="Fulano1" status="Aprovado" eventos={20} id={1}/>
                                <CardPromotersAdm email="fulano2@gmail.com" nome="Fulano2" status="Suspenso" eventos={30} id={3}/>
                                <CardPromotersAdm email="fulano2@gmail.com" nome="Fulano2" status="Suspenso" eventos={30} id={3}/>
                                <CardPromotersAdm email="fulano2@gmail.com" nome="Fulano2" status="Suspenso" eventos={30} id={3}/>
                            </div>
                        </TabPanel>
                    ))}
                </TabsBody>
            </Tabs>
        </div>
    )


};