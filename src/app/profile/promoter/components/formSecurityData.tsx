import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';
import {z} from 'zod';


type securityFormData = z.infer<typeof securitySchema>;

const securitySchema = z.object({
    actual_pass: z.string().min(8, {message: 'A senha deve ter no mínimo 8 caracteres'}),
    confirm_pass: z.string().min(8, {message: 'A senha deve ter no mínimo 8 caracteres'}),
	new_pass: z.string().min(8, {message: 'A senha deve ter no mínimo 8 caracteres'}),
})

export default function FormSecurityData() {

    const {register,handleSubmit,formState:{errors}} = useForm<securityFormData>({
        resolver: zodResolver(securitySchema),
        criteriaMode: 'all',
        mode: 'all',
        defaultValues: {
            actual_pass: '',
            confirm_pass: '',
            new_pass: ''
        },

    });

    const onSubmit = (data: securityFormData) => {
        console.log(data);
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
              <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                Confirme a senha atual
              </label>
              <div className="mt-2">
                <input
                    {...register('confirm_pass')}
                    type="password"
                    className="block w-full rounded-md px-3 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
				{errors.confirm_pass?.message && <p className="text-red-500">{errors.confirm_pass?.message}</p>}
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