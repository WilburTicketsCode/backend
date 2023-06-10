import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';
import {z} from 'zod';


type securityFormData = z.infer<typeof securitySchema>;

const securitySchema = z.object({
    actual_pass: z.string().min(8, {message: 'A senha deve ter no mínimo 8 caracteres'}),
	new_pass: z.string().min(8, {message: 'A senha deve ter no mínimo 8 caracteres'}),
})

export default function FormSecurityData(props: any) {

    const {register,handleSubmit,formState:{errors}} = useForm<securityFormData>({
        resolver: zodResolver(securitySchema),
        criteriaMode: 'all',
        mode: 'all',
        defaultValues: {
            actual_pass: '',
            new_pass: ''
        },
    });


	async function editarSenha(data: securityFormData){
		const user_obj = JSON.stringify({
		  email: props.email,
		  senhaAntiga: data.actual_pass,
		  senhaNova: data.new_pass
		})
		
		const res = await fetch(`/api/usuario/alterar-senha`, {
		  method: "PUT",
		  headers: {
			"Content-Type": "application/json",
		  },
		  body: user_obj
		})
	}

    // const onSubmit = async (data: securityFormData) => {
    //     console.log(data);
	// 	try {
	// 		await editarSenha(data)
	// 		console.log("mudei a senha")
	// 	} catch (error) {
	// 		console.log('deu erro')
	// 	}
    // }

    const onSubmit = async (data: securityFormData) => {
		// Construindo o objeto de requisição
		const user_data = JSON.stringify({
			email: props.email,
			senhaAntiga: data.actual_pass,
			senhaNova: data.new_pass
		})
		// Chama API
		const res = await fetch(`/api/usuario/alterar-senha`, {
			method: "PUT",
			headers: {
			  "Content-Type": "application/json",
			},
			body: user_data
		})
		console.log(res.status)
		// const jsonData = await res.json();

		// Se não achou o user 
		if (res.status == 404){

		}
		// Se tiver dado problema no servidor
		if (res.status == 500){

		}
		// Se achou conseguiu alterar a senha
		if (res.status == 200){

		}
        
    }


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-12">

        <div className="border-b border-gray-900/10 pb-12">

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                Senha atual
              </label>
              <div className="mt-2">
                <input
                    {...register('actual_pass')}
                    type="password"
                    className="block w-full rounded-md px-3 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
				{errors.actual_pass?.message && <p className="text-red-500">{errors.actual_pass?.message}</p>}
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Nova senha
              </label>
              <div className="mt-2">
                <input
                    {...register('new_pass')}
                    type="password"
                    className="block w-full rounded-md px-3 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
				{errors.new_pass?.message && <p className="text-red-500">{errors.new_pass?.message}</p>}
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