'use client'
import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Typography,
} from "../ClientSide";
import WithCard from "./EditCard/WithCard";
import NoCard from "./EditCard/NoCard";
import Address from "./Address";
import RegistrationData from "./RegistrationData";



export default function CostumerP() {
  const [type, setType] = React.useState("registrationData");
  const [existCard, setExistCard] = React.useState(false);

  return (
    <div className="flex w-full items-center justify-center rounded-md pt-28 md:pt-40 bg-gradient-to-br from-indigo-300 via-purple-800 to-blue-200" >
      <Tabs value={type} className="overflow-visible h-[100%]  w-[100%] lg:w-5/6 rounded-lg bg-gray-100" >
        <TabsHeader className="h-[5.2rem] text-black bg-light-blue-200">
          <Tab value="registrationData" onClick={() => { setType("registrationData") }}>
            <Typography className="text-base font-bold" >Dados</Typography> 
          </Tab>
          <Tab value="address" onClick={() => { setType("address") }}>
          <Typography className="text-base font-bold" >Endereço</Typography> 
          </Tab>
          <Tab value="card" onClick={() => { setType("card") }}>
          <Typography className="text-base font-bold" >Cartão de Credito</Typography> 
          </Tab>

        </TabsHeader>
        <TabsBody className="h-auto min-h-full" animate={{
          initial: { x: 250 },
          mount: { x: 0 },
          unmount: { x: -250 },
        }}>
          <TabPanel className="overflow-auto" value="registrationData">
            <RegistrationData/>
          </TabPanel>
          <TabPanel className=" overflow-auto" value="address">
            <Address/>
          </TabPanel>
          <TabPanel className="overflow-auto" value="card">
            {existCard ? <WithCard /> : <NoCard />}
          </TabPanel>
        </TabsBody>
      </Tabs>
    </div>
  )
    ;
}