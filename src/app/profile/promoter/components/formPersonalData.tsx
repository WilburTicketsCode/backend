import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';
import {z} from 'zod';


type personalFormData = z.infer<typeof personalSchema>;

const personalSchema = z.object({
    name: z.string(),
    cnpj_cpf: z.string().min(11, {message: 'A senha deve ter no mínimo 8 caracteres'}),
	email: z.string().email({message: 'O email é inválido'}),
	phone: z.string().min(11, {message: 'Exemplo: 71900000000'}),
	addres: z.string(),
	city: z.string(),
	state: z.string(),
	cep: z.string().min(9, {message: 'Exemplo: 44036-900'}),
})

export default function FormPersonalData() {
    const {register,handleSubmit,formState:{errors}} = useForm<personalFormData>({
        resolver: zodResolver(personalSchema),
        criteriaMode: 'all',
        mode: 'all',
        defaultValues: {
            name: '',
            cnpj_cpf: '',
            email: '',
            phone: '',
            addres: '',
            city: '',
            state: '',
            cep: ''
        },

    });

    const onSubmit = (data: personalFormData) => {
        console.log(data);
    }


  return (
 	
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-12">

        <div className="border-b border-gray-900/10 pb-12">

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                Nome
              </label>
              <div className="mt-2">
                <input
					{...register('name')}
                    type="text"
                    className="block w-full rounded-md px-3 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
				{errors.name?.message && <p className="text-red-500">{errors.name?.message}</p>}
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                CPF/CNPJ
              </label>
              <div className="mt-2">
                <input
					{...register('cnpj_cpf')}
                    type="text"
                    className="block w-full rounded-md px-3 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
				{errors.cnpj_cpf?.message && <p className="text-red-500">{errors.cnpj_cpf?.message}</p>}
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email
              </label>
              <div className="mt-2">
                <input
					{...register('email')}
                    type="email"
                    className="block w-full rounded-md px-3 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
				{errors.email?.message && <p className="text-red-500">{errors.email?.message}</p>}
              </div>
            </div>


            
            <div className="sm:col-span-3">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Telefone
              </label>
              <div className="mt-2">
                <input
					{...register('phone')}
                    type="phone"
                    className="block w-full rounded-md px-3 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
			  {errors.phone?.message && <p className="text-red-500">{errors.phone?.message}</p>}
            </div>


            <div className="col-span-full">
              <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                Endereço
              </label>
              <div className="mt-2">
                <input
					{...register('addres')}
                    type="text"
                    className="block w-full rounded-md px-3 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
			  {errors.addres?.message && <p className="text-red-500">{errors.addres?.message}</p>}
            </div>

            <div className="sm:col-span-2 sm:col-start-1">
              <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                Cidade
              </label>
              <div className="mt-2">
                <input
					{...register('city')}
                    type="text"
                    className="block w-full rounded-md px-3 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
				{errors.city?.message && <p className="text-red-500">{errors.city?.message}</p>}
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">
                Estado
              </label>
              <div className="mt-2">
                <input
					{...register('state')}
                    type="text"
                    className="block w-full rounded-md px-3 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
				{errors.state?.message && <p className="text-red-500">{errors.state?.message}</p>}
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">
                CEP
              </label>
              <div className="mt-2">
                <input
					{...register('cep')}
                    type="text"
                    className="block w-full rounded-md px-3 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
				{errors.cep?.message && <p className="text-red-500">{errors.cep?.message}</p>}
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