'use client'
import React, {useState,useEffect} from "react";
import { useSession } from "next-auth/react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Typography,
} from "../../ClientSide";
import RegistrationData from "./profiledata";

interface Data {
  id: number;
  perfil_foto: string | null;
  cpf: string;
  id_usuario: number;
  usuario: {
    id: number;
    nome: string;
    email: string;
    senha: string;
  };

  compras: any[];
}




export default function AdminP() {
  const [type, setType] = useState("registrationData");
  const [data, setData] = useState<Data | null>(null);
    const {data: session} = useSession();
    console.log(session)
    const cpf = session?.user?.id;

    useEffect(() => {
        const fetchData = async () => {
          try {
            if (typeof cpf === 'undefined') {
              // Se o cpf for undefined, aguarde 1 segundo e chame a função novamente
              setTimeout(fetchData, 1000);
              return;
            }
            const response = await fetch(`/api/administrador/${cpf}`);
            const jsonData = await response.json();
            setData(jsonData);
            console.log(jsonData)
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
        fetchData();
      }, [cpf]);



  return (
    <div className="flex w-full items-center justify-center rounded-md pt-28 md:pt-40 pb-28 md:pb-40 bg-gradient-to-br from-indigo-300 via-purple-800 to-blue-200" >
      <Tabs value={type} className="overflow-visible h-[100%]  w-[100%] lg:w-5/6 rounded-lg bg-gray-100" >
        <TabsHeader className="h-[5rem] text-black bg-light-blue-200">
          <Tab value="registrationData" onClick={() => { setType("registrationData") }}>
            <Typography className="text-base font-bold" >Dados</Typography> 
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
        </TabsBody>
      </Tabs>
    </div>
  )
    ;
}
