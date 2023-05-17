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
    const [type, setType] = useState("personal");
    return(
        <div className='box-gray mt-6 '>       
            <Tabs value={type} >
                <TabsHeader className="rounded-none border-b border-blue-gray-50 bg-transparent p-0"
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

                <TabsBody className="h-[88%]">
                    <TabPanel className="h-full overflow-auto" value="personal">
                        <FormPersonalData/>
                    </TabPanel>
                    <TabPanel className="h-full overflow-auto" value="security">
                        <FormSecurityData/>
                    </TabPanel>
                </TabsBody>

            </Tabs>
        </div>
    )
}


