'use client'
import React,{useState,useEffect} from "react";
import { useSession } from "next-auth/react";
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

interface User {
  id: number;
  nome: string;
  email: string;
  senha: string;
  adm: null | boolean;
  promoter: null | boolean;
  cliente: Cliente;
}

interface Cliente {
  id: number;
  cpf: string;
  data_nasc: string;
  id_usuario: number;
  id_cartao: number;
  id_endereco: number;
  telefone: string;
}



export default function CostumerP() {
  const [type, setType] = useState("registrationData");
  const [existCard, setExistCard] = useState(false);
  const [data, setData] = useState<User | null>(null);
    const {data: session} = useSession();
    
    const email = session?.user?.email;

    useEffect(() => {
        const fetchData = async () => {
          try {
            
            /*const response = await fetch(`https://backend-wilbortick.vercel.app/api/usuario/${email}`);*/
            const response = await fetch(`https://localhost:3000/api/usuario/${email}`);
            const jsonData = await response.json();
            setData(jsonData);
            console.log(jsonData)
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
        fetchData();
      }, [email]);



  return (
    <div className="flex w-full items-center justify-center rounded-md pt-28 md:pt-40 pb-28 md:pb-40 bg-gradient-to-br from-indigo-300 via-purple-800 to-blue-200" >
      <Tabs value={type} className="overflow-visible h-[100%]  w-[100%] lg:w-5/6 rounded-lg bg-gray-100" >
        <TabsHeader className="h-[5rem] text-black bg-light-blue-200">
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
          <RegistrationData cType={data} />
          </TabPanel>
          <TabPanel className=" overflow-auto" value="address">
            <Address cType={data}/>
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