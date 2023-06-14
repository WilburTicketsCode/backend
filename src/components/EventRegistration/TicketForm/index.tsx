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
import UseEventRegistrationContext from "../../../use/UseEventRegistrationContext";

type TicketFormData = z.infer<typeof TicketFormSchema>;

const TicketFormSchema = z.object({
    sector: z.string(),
    profile: z.string(),
    amount: z.string(),
    price: z.string(),
})

const TABLE_HEAD = ["Setor", "Perfil", "Quantidade", "Valor", ""];

const TABLE_ROWS = [
  {
    setor: "Camarote",
    perfil: "Meia-entrada",
    quantidade: "80",
    valor: "25,50"
  },
  {
    setor: "Managerr",
    perfil: "John Michaelr",
    quantidade: "802",
    valor: "28,50"
  },
  {
    setor: "Managter",
    perfil: "Johna Michael",
    quantidade: "80",
    valor: "26,50"
  },
  ]

export default function TicketForm() {

  const { infoStepper, setInfoStepper } = UseStepperContext();

  const { infoTicketForm, setInfoTicketForm } = UseEventRegistrationContext();

  const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm<TicketFormData>({
      resolver: zodResolver(TicketFormSchema),
      criteriaMode: 'all',
          mode: 'all',
          defaultValues: {
            sector: infoTicketForm.sector,
            profile: infoTicketForm.profile,
            amount: infoTicketForm.amount,
            price: infoTicketForm.price,
          },
    })

  const onSubmit = (data: TicketFormData) => {
    
    console.log(data);

    setInfoStepper({
      activeStep: infoStepper.activeStep+1
    });
    
    setInfoTicketForm({
      sector: data.sector,
      profile: data.profile,
      amount: data.amount,
      price: data.price,
  });
  
  }
  const selectedProfile = watch("profile");

  const handlePrev = (e: any) => {
    setInfoStepper({
      activeStep: infoStepper.activeStep-1
    });
  }

return (
  <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center px-8 gap-4 w-full mt-8">
    <div className="flex flex-row justify-between w-full">
      <div className="flex flex-col gap-4">
        <div className="relative h-10 w-50 min-w-[20px]">
          <select className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 empty:!bg-[#404c76] focus:border-2 focus:border-[#404c76] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
            {...register("sector")}>
            <option value="area-vip">Área Vip</option>
            <option value="backstage">Backstage</option>
            <option value="camarote">Camarote</option>
          </select>
          <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#404c76] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-[#404c76] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-[#404c76] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
            Selecione o Setor
          </label>
        </div>
        <div className="relative h-10 w-50 min-w-[20px]">
          <select className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 empty:!bg-[#404c76] focus:border-2 focus:border-[#404c76] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
            {...register("profile")}>
            <option value="entrada-inteira">Entrada inteira</option>
            <option value="meia-entrada">Meia entrada</option>
            <option value="entrada-gratuita">Entrada gratuita</option>
          </select>
          <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#404c76] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-[#404c76] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-[#404c76] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
            Selecione o Perfil do Ingresso
          </label>
        </div>
        <Input
          size="lg"
          label="quantidade*"
          {...register("amount")}
          color="indigo"
          error={Boolean(errors.amount)}
          containerProps={{ className: "w-50 min-w-[20px]" }}
        />
        <Input
          size="lg"
          label="preço"
          {...register("price")}
          color="indigo"
          error={Boolean(errors.price)}
          disabled={selectedProfile === "entrada-gratuita"}
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
              {TABLE_ROWS.map(({ setor, perfil, quantidade, valor }, index) => (
                <tr key={setor} className="even:bg-blue-gray-50/50">
                  <td className="p-4">
                    <Typography variant="small" color="blue-gray" className="font-normal">
                      {setor}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography variant="small" color="blue-gray" className="font-normal">
                      {perfil}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography variant="small" color="blue-gray" className="font-normal">
                      {quantidade}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography variant="small" color="blue-gray" className="font-normal">
                      {valor}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography as="a" href="#" variant="small" color="indigo" className="font-medium">
                      Edit
                    </Typography>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
        <Button className="mt-4 bg-[#404c76] hover:shadow-[#404c76]/50">
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