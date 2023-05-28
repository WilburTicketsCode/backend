
import Carrossel from '../components/home/carrossel';
import EventsHome from '../components/home/eventsHome';


export default function Home() {

    return (
        <div className='flex flex-col justify-center pt-[130px] items-center bg-gradient-to-br from-indigo-300 via-purple-800 to-blue-200'>

            <div className="flex flex-col justify-center mb-[32px] h-[320px] w-[336px] sm:w-[480px] lg:w-[81vw]">
                <h1 className='flex justify-center text-white text-xl lg:text-5xl my-5 text-center w-full'>Encontre seu próximo evento</h1>

                <Carrossel className="h-[240px] w-[336px] lg:w-[960px] lg:h-[228px]"
                    imagem1="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                    imagem2="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                    imagem3="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" />

            </div>

            <div className="flex justify-center lg:w-[60vw] w-[95vw] min-h-[128px] flex-col bg-gray-300 rounded-xl">
                <EventsHome />
            </div>

        </div>
    );
}