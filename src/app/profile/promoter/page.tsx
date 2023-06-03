"use client"

import FormSecurityData from "../../../components/Promoter/formSecurityData";
import FormPersonalData from "../../../components/Promoter/formPersonalData";
import {useState,useEffect} from "react";
import { useSession } from "next-auth/react";
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
    Typography,
  } from "../../../components/ClientSide";

export default function PromoterPage() {
    const obj = {
        name: 'João',
        cpf_cnpj: '00000000000',
        email: 'joazinho@uefs.br',
        phone: '11900000000',
        addres: 'Avenida Uefs',
        city: 'Feira de Santana City',
        state: 'Bahia',
        cep: '000000-00',
        selectField: 'cpf'
    };
    // Para controle do Tabs
    const [type, setType] = useState("personal");
    // Objeto com dados do promoter a serem passados
    const [dataPromoter, setDataPromoter] = useState<any | null>(null);

    const {data: session} = useSession();
    const cpfORcnpj = session?.user?.id;

    useEffect(() => {
        const fetchData = async () => {
            // Só chama a api se já tiver obtido os dados do cpf ou cnpj
            if (cpfORcnpj){
                try {
                    const response = await fetch(`/api/promoter/${cpfORcnpj}`);
                    const jsonData = await response.json();
                    setDataPromoter(jsonData);
                    console.log(jsonData)////////
                  } catch (error) {
                    // console.error('Error fetching data:', error);
                    console.log('Errei')
                  }
            }
        };
        fetchData();
      }, [cpfORcnpj]);

    return(
        <div className='w-full h-full flex items-center justify-center'>       
            <div  className='box-gray w-full h-[90%] md:h-[80%] md:w-[50%] gap-6 flex flex-col justify-center items-center overflow-auto bg-white rounded-xl mt-20 md:mt-36  mb-20'>
            {/* Artificio para só renderizar o componente quando tiver obtido os dados do usuário */}
            {dataPromoter && 
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
                            <FormPersonalData user={dataPromoter}/>
                        </TabPanel>
                        <TabPanel className="h-full overflow-auto" value="security">
                            <FormSecurityData/>
                        </TabPanel>
                    </TabsBody>
                </Tabs>
                }
            </div>
        </div>
    )
}