import EventsHome from '@/components/home/eventsHome';
import SearchComponent from '@/components/home/search';

export default function Search() {
    

  // Acessando um parâmetro de consulta específico
    return (
        <div className='flex flex-col justify-center pt-[150px] items-center bg-gradient-to-br from-indigo-300 via-purple-800 to-blue-200'>

            <div className="flex justify-center lg:w-[60vw] w-[95vw] min-h-[8rem] flex-col bg-gray-300 rounded-xl">
                <SearchComponent/>
            </div>
        </div>
    );
}