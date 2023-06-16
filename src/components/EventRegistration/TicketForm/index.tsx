import UseStepperContext from "../../../use/UseStepperContext";
import {
  Input,
  Button,
  Card,
  Typography
} from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import React, { useEffect, useState } from "react";
import UseEventRegistrationContext from "../../../use/UseEventRegistrationContext";
import { useSession } from "next-auth/react";
import { Evento, Eventos } from "@/../lib/evento";





type TicketFormData = z.infer<typeof TicketFormSchema>;

const TicketFormSchema = z.object({
    id_setor: z.string(),
    id_perfil: z.string(),
    quantidade: z.string(),
    valorTotal: z.string(),
})

function formatNumber(value:string) {
  return value
  .replace(/[^0-9]/g, "")
  }
  
export default function TicketForm() {


  const {data: session} = useSession();

  const [events, setEvents] = useState<Eventos>([]);

     //------ Consulta a API
    const fetchEvents = async () => {
      const reponse = await fetch("/api/evento");
       const data = await reponse.json();
       setEvents(data);
    }

    useEffect(() => {
        fetchEvents();
    }, []);
    // ----- Fim Consulta a API
  const TABLE_HEAD = ["Setor", "Perfil", "Quantidade", "Valor", ""];

  type TableRow = {
    id_setor: string;
    id_perfil: string;
    quantidade: string;
    valorTotal: string;
  };

  const TABLE_ROWS: TableRow[] = [];

  const { infoStepper, setInfoStepper } = UseStepperContext();

  const { infoBasicInformationForm, infoDateForm, infoDescriptionForm,infoAdressForm,
  infoTicketForm, setInfoTicketForm } = UseEventRegistrationContext();

  const [ticketList, setTicketList] = useState(TABLE_ROWS);

  const { register, handleSubmit, watch, setValue, getValues, formState: { errors } } = useForm<TicketFormData>({
      resolver: zodResolver(TicketFormSchema),
      criteriaMode: 'all',
          mode: 'all',
          defaultValues: {
            id_setor: "",
            id_perfil: "",
            quantidade: "",
            valorTotal: "",
          },
    })

  const onSubmit = (data: TicketFormData) => {
    
    console.log(data);

    setInfoStepper({
      activeStep: infoStepper.activeStep+1
    });

    console.log(infoTicketForm)

    const evento = {
    nome: infoBasicInformationForm.name,
    horaInicio: new Date(infoDateForm.startDate),
    horaFim: new Date(infoDateForm.endDate),
    descricao: infoDescriptionForm.Description,
    banner: "/img/event-banner/default.jpg",
    status: "pendente",
    rua: infoAdressForm.street,
    numero: infoAdressForm.number,
    bairro: infoAdressForm.district,
    cidade: infoAdressForm.city,
    estado: infoAdressForm.state,
    cep: infoAdressForm.CEP.replace(/[-]/gi,""),
    complemento: infoAdressForm.complement,
    lotacoes: infoTicketForm
  }

    createEvento(evento)
  
  }
  const selectedid_perfil = watch("id_perfil");

  const handlePrev = (e: any) => {
    setInfoStepper({
      activeStep: infoStepper.activeStep-1
    });
  }

  const handleCadastroIngresso = () => {
    const formData = getValues(); // Obtenha os valores do formulário
    const newRow = {
      id_setor: formData.id_setor,
      id_perfil: formData.id_perfil,
      quantidade: formData.quantidade,
      valorTotal: formData.valorTotal
    };

    setInfoTicketForm([...infoTicketForm,
      {
        id_setor: formData.id_setor,
        id_perfil: formData.id_perfil,
        quantidade: formData.quantidade,
        valorTotal: formData.valorTotal,
      }
    ])
    setTicketList((prevRows) => [...prevRows, newRow]); // Adicione a nova linha à lista de linhas

    // Limpe o formulário após adicionar a linha
    setValue("id_setor", "");
    setValue("id_perfil", "");
    setValue("quantidade", "");
    setValue("valorTotal", "");

  };


  const handleEdit = (id_setor: string, id_perfil: string, quantidade: string, valor: string) => {

    setValue("id_setor", id_setor);
    setValue("id_perfil", id_perfil);
    setValue("quantidade", quantidade);
    setValue("valorTotal", valor);

    setTicketList((prevRows) =>
    prevRows.filter((row) => row.id_setor !== id_setor || row.id_perfil !== id_perfil)
    );
  };

  const quantidade = watch("quantidade")

  const valorTotal = watch("valorTotal")

  useEffect(() => {
    setValue("quantidade", formatNumber(quantidade))
  },[quantidade])

  useEffect(() => {
    setValue("valorTotal", formatNumber(valorTotal))
  },[valorTotal])

  async function createEvento(evento: any) {
    const jaison = JSON.stringify({
      nome: evento.nome,
      horaInicio: evento.horaInicio,
      horaFim: evento.horaFim,
      descricao: evento.descricao,
      banner: evento.banner,
      status: evento.status,
      id_promoter: session?.user.id,
      endereco: {
        bairro: evento.bairro,
        cep: evento.cep,
        cidade: evento.cidade,
        estado: evento.estado,
        numero: evento.numero,
        rua: evento.rua,
        complemento: evento.complemento
      },
      lotacoes: evento.lotacoes
    })

    /* Mostrando no console do navegador o formato do json usado para enviar os dados para API */
    console.log("Exemplo de como o JSON para criação de um Promoter deve ser feito:\n" +
    jaison)

    /* Enviando de verdade para API */
    const res = await fetch("/api/evento", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: jaison
    })

    }

  //   const evento = {
  //   nome: infoBasicInformationForm.name,
  //   horaInicio: new Date(infoDateForm.startDate),
  //   horaFim: new Date(infoDateForm.endDate),
  //   descricao: infoDescriptionForm.Description,
  //   banner: "/img/event-banner/default.jpg",
  //   status: "pendente",
  //   rua: infoAdressForm.street,
  //   numero: infoAdressForm.number,
  //   bairro: infoAdressForm.district,
  //   cidade: infoAdressForm.city,
  //   estado: infoAdressForm.state,
  //   cep: infoAdressForm.CEP.replace(/[-]/gi,""),
  //   complemento: infoAdressForm.complement,
  //   lotacoes: [{
  //     lotacao: {
  //       id_id_perfil: infoTicketForm.id_perfil,
  //       id_id_setor: infoTicketForm.id_setor,
  //       quantidade: infoTicketForm.quantidade,
  //       valorTotal: infoTicketForm.valorTotal
  //       }
  //     }
  //   ]  
  // }

    // createEvento(evento)

return (
  <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center px-8 gap-4 w-full mt-8">
    <div className="flex flex-row justify-between w-full">
      <div className="flex flex-col gap-4">
        <div className="relative h-10 w-50 min-w-[20px]">
          <select className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 empty:!bg-[#404c76] focus:border-2 focus:border-[#404c76] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
            {...register("id_setor")}>
            <option value="1">Área vip</option>
            <option value="2">Camarote</option>
            <option value="3">Backstage</option>
          </select>
          <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#404c76] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-[#404c76] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-[#404c76] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
            Selecione o Setor
          </label>
        </div>
        <div className="relative h-10 w-50 min-w-[20px]">
          <select className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 empty:!bg-[#404c76] focus:border-2 focus:border-[#404c76] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
            {...register("id_perfil")}>
            <option value="1">Entrada inteira</option>
            <option value="2">Meia entrada</option>
            <option value="3">Entrada gratuita</option>
          </select>
          <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#404c76] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-[#404c76] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-[#404c76] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
            Selecione o Perfil do Ingresso
          </label>
        </div>
        <Input
          size="lg"
          label="quantidade*"
          {...register("quantidade")}
          color="indigo"
          error={Boolean(errors.quantidade)}
          containerProps={{ className: "w-50 min-w-[20px]" }}
        />
        <Input
          size="lg"
          label="preço"
          {...register("valorTotal")}
          color="indigo"
          error={Boolean(errors.valorTotal)}
          // disabled={selectedid_perfil === "3"}
          containerProps={{ className: "w-50 min-w-[20px]" }}
        />
      </div>
      <div className="flex flex-col justify-center items-center ml-8 mr-8">
        <Card className="overflow-x-auto h-full w-full">
          <table className="w-full sm:w-auto min-w-max table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {ticketList.map(({ id_setor, id_perfil, quantidade, valorTotal }, index) => (
                
                <tr key={id_setor} className="even:bg-blue-gray-50/50">
                  <td className="p-4">
                    <Typography variant="small" color="blue-gray" className="font-normal">
                      {id_setor}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography variant="small" color="blue-gray" className="font-normal">
                      {id_perfil}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography variant="small" color="blue-gray" className="font-normal">
                      {quantidade}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography variant="small" color="blue-gray" className="font-normal">
                      {valorTotal}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography onClick={() => handleEdit(id_setor, id_perfil, quantidade, valorTotal)} as="a" href="#" variant="small" color="indigo" className="font-medium">
                      Edit
                    </Typography>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
        <Button onClick={handleCadastroIngresso} disabled={!watch("id_setor") || !watch("id_perfil") || !watch("quantidade") || ( !watch("valorTotal"))} className="mt-4 bg-[#404c76] hover:shadow-[#404c76]/50">
            Cadastrar Ingresso
        </Button>
      </div>
    </div>
    <div className="flex flex-row w-full justify-between mt-8 mb-8 ml-8 mr-8">
      <Button onClick={handlePrev} className="bg-[#404c76] hover:shadow-[#404c76]/50">
        Voltar
      </Button>
      <Button type="submit" className="bg-[#404c76] hover:shadow-[#404c76]/50">
        Próximo
      </Button>
    </div>
  </form>
);
}