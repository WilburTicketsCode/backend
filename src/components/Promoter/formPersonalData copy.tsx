import {zodResolver} from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import {useForm} from 'react-hook-form';
import {z} from 'zod';

const typePersona = ["cpf", "cnpj"] as const;

type personalFormData = z.infer<typeof personalSchema>;

const personalSchema = z.object({
    name: z.string(),
    // cnpj_cpf: z.string().min(11, {message: 'A senha deve ter no mínimo 8 caracteres'}),
	email: z.string().email({message: 'O email é inválido'}),
	phone: z.string().min(11, {message: 'Exemplo: 71900000000'}),
	street: z.string(),
  neighborhood: z.string(),
  complement: z.string(),
  number: z.string(),
	city: z.string(),
	state: z.string(),
	cep: z.string().min(9, {message: 'Exemplo: 44036-900'}),
	selectField: z.enum(typePersona),
	cpf_cnpj: z.string().refine((value) => {
		return value.length === 11 || value.length === 14 ;
	}, { message: 'O campo é inválido' }),
})

export default function FormPersonalData(props: any) {
    const {register,handleSubmit,formState:{errors} } = useForm<personalFormData>({
        resolver: zodResolver(personalSchema),
        criteriaMode: 'all',
        mode: 'all',
        defaultValues: {
            name: props.user.usuario.nome,//
            cpf_cnpj: props.user.cpf ? props.user.cpf : props.user.cnpj,// 
            email: props.user.usuario.email,//
            phone: props.user.telefone,//
            street: props.user.endereco.rua,//
            neighborhood: props.user.endereco.bairro,
            complement: props.user.endereco.complemento,
            number: props.user.endereco.numero,
            city: props.user.endereco.cidade,//
            state: props.user.endereco.estado,//
            cep: props.user.endereco.cep,//
			      selectField: props.user.cpf ? 'cpf' : 'cnpj'
        },

    });

    const onSubmit = (data: personalFormData) => {
        console.log(data);
    }

    useEffect(() => {
      // Faça um console.log() nos dados recebidos
      console.log(props);
    }, [props]);

  return (
 	
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-12">

        <div className="border-b border-gray-900/10 pb-12">

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

			{/* Nome */}
            <div className="sm:col-span-3">
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Nome
              </label>
              <div className="mt-2">
                <input
					{...register('name')}
                    type="text"
                    className="block w-full rounded-md px-3 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
				{errors.name?.message && <span className="text-red-500">{errors.name?.message}</span>}
              </div>
            </div>

			{/* Identificador */}
            <div className="sm:col-span-3 flex">
				<div>
					<label className="block text-sm font-medium leading-6 text-gray-900">
						Identificador
					</label>
					<div className="mt-2 block sm:flex">
					<select {...register('selectField')} className='block w-[80%] max-w-[90px] rounded-md px-3 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'>
						<option value="cpf">CPF</option>
						<option value="cnpj">CNPJ</option>
					</select>
						<input
							{...register('cpf_cnpj')}
							type="text"
							className="block w-full rounded-md px-3 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
						/>
					</div>
					{errors.cpf_cnpj && <span className="text-red-500">{errors.cpf_cnpj.message}</span>}
				</div>
            </div>


			{/* Email */}
            <div className="sm:col-span-3">
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Email
              </label>
              <div className="mt-2">
                <input
					{...register('email')}
                    type="email"
                    className="block w-full rounded-md px-3 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
				{errors.email?.message && <span className="text-red-500">{errors.email?.message}</span>}
              </div>
            </div>

            {/* Telefone */}
            <div className="sm:col-span-3">
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Telefone
              </label>
              <div className="mt-2">
                <input
					{...register('phone')}
                    type="phone"
                    className="block w-full rounded-md px-3 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
			  {errors.phone?.message && <span className="text-red-500">{errors.phone?.message}</span>}
            </div>

			{/* Endereço */}
            <div className="col-span-full">
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Endereço
              </label>
              <div className="mt-2">
                <input
					{...register('street')}
                    type="text"
                    className="block w-full rounded-md px-3 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
			  {errors.street?.message && <span className="text-red-500">{errors.street?.message}</span>}
            </div>

			{/* Cidade */}
            <div className="sm:col-span-2 sm:col-start-1">
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Cidade
              </label>
              <div className="mt-2">
                <input
					{...register('city')}
                    type="text"
                    className="block w-full rounded-md px-3 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
				{errors.city?.message && <span className="text-red-500">{errors.city?.message}</span>}
              </div>
            </div>

			{/* Estado */}
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Estado
              </label>
              <div className="mt-2">
                <input
					{...register('state')}
                    type="text"
                    className="block w-full rounded-md px-3 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
				{errors.state?.message && <span className="text-red-500">{errors.state?.message}</span>}
              </div>
            </div>

			{/* CEP */}
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium leading-6 text-gray-900">
                CEP
              </label>
              <div className="mt-2">
                <input
					{...register('cep')}
                    type="text"
                    className="block w-full rounded-md px-3 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
				{errors.cep?.message && <span className="text-red-500">{errors.cep?.message}</span>}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md w-[150px] bg-[#404C76] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    </form>
  )
}