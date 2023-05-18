"use client"

import FormSecurityData from "./components/formSecurityData";
import FormPersonalData from "./components/formPersonalData";
import { useState } from "react";
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
    Typography,
  } from "@material-tailwind/react";

export default function PromoterPage() {
    // Para controle do Tabs
    const [type, setType] = useState("personal");

    return(
        <div className='w-full h-full flex items-center justify-center'>       
            <div  className='box-gray w-full h-[90%] md:h-[80%] md:w-[50%] gap-6 flex flex-col justify-center items-center overflow-auto bg-white rounded-xl mt-20 md:mt-36  mb-20'>
                <Tabs value={type} >
                    <TabsHeader className="rounded-none border-b border-blue-gray-50 bg-transparent"
                    indicatorProps={{
                    className: "bg-transparent border-b-2 border-blue-500 shadow-none rounded-5 bg-blue-500/10 shadow-none text-blue-500",
                    }}>
                        <Tab value="personal" onClick={() => { setType("personal") }}>
                            <Typography className="text-base font-bold" >Pessoal</Typography> 
                        </Tab>
                        <Tab value="security" onClick={() => { setType("security") }}>
                            <Typography className="text-base font-bold" >Segurança</Typography> 
                        </Tab>
                    </TabsHeader>

                    <TabsBody>
                        <TabPanel className="h-full overflow-auto" value="personal">
                            <FormPersonalData/>
                        </TabPanel>
                        <TabPanel className="h-full overflow-auto" value="security">
                            <FormSecurityData/>
                        </TabPanel>
                    </TabsBody>
                </Tabs>
            </div>
        </div>
    )
}

