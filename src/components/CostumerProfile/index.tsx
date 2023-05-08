'use client'
import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Typography,
} from "@material-tailwind/react";
import WithCard from "./EditCard/WithCard";
import NoCard from "./EditCard/NoCard";
import Address from "./Address";
import RegistrationData from "./RegistrationData";



export default function CostumerP() {
  const [type, setType] = React.useState("registrationData");
  const [existCard, setExistCard] = React.useState(false);

  return (
    <div className="flex h-full w-full items-center justify-center rounded-md" >
      <Tabs value={type} className="overflow-visible h-[95%]  w-[95%] lg:w-5/6 rounded-lg bg-gray-100" >
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
        <TabsBody className="h-[88%]" animate={{
          initial: { x: 250 },
          mount: { x: 0 },
          unmount: { x: -250 },
        }}>
          <TabPanel className="h-full" value="registrationData">
            <RegistrationData/>

          </TabPanel>
          <TabPanel className="h-full" value="address">
            <Address/>
          </TabPanel>
          <TabPanel className="h-full" value="card">
            {existCard ? <WithCard /> : <NoCard />}
          </TabPanel>
        </TabsBody>
      </Tabs>
    </div>
  )
    ;
}