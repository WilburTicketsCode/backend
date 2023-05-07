'use client'
import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";


   
  export default function CostumerP() {
    const [type,setType] = React.useState("registrationData");

    return(
      <Tabs value={type} className="overflow-visible">
      <TabsHeader className="h-[5rem] text-black">
          <Tab  value="registrationData" onClick={()=>{setType("registrationData")}}>
            Dados Cadastrais
          </Tab>
          <Tab  value="address" onClick={()=>{setType("address")}}>
            Endereço
          </Tab>
          <Tab  value="password" onClick={()=>{setType("password")}}>
            Alterar Senha
          </Tab>
      </TabsHeader>
      <TabsBody  animate={{
      initial: { x: 250 },
      mount: { x: 0 },
      unmount: { x: -250 },
    }}>
          <TabPanel className="h-full" value="registrationData"> 
            <div>Registro</div>
          </TabPanel>
          <TabPanel value="address"> 
            <div>endere</div>
          </TabPanel>
          <TabPanel value="password"> 
            <div>Senhaefefe</div>
          </TabPanel>
      </TabsBody>
    </Tabs>
    )
  ; }