import { ChevronDownIcon } from "../../../ClientSide"

export default function Dropdown() {

    return (

        <button className="relative flex flex-col justify-center items-center bg-white border focus:outline-none
            shadow text-gray-600 rounded focus:ring ring-gray-200 group">

            <p className="px-4 font-sans text-[14px] "> Parcelas | v </p>

            <div className="absolut hidden group-focus:block top-2 w-20 bg-white shadow-md mt-1 rounded">
                <ul className="text-left border rounded">
                    <li className="px-4 py-1 text-[14px] font-sans hover:bg-gray-100 border-b">1X</li>
                    <li className="px-4 py-1 text-[14px] font-sans hover:bg-gray-100 border-b">2X</li>
                    <li className="px-4 py-1 text-[14px] font-sans hover:bg-gray-100 border-b">3X</li>
                    <li className="px-4 py-1 text-[14px] font-sans hover:bg-gray-100 border-b">4X</li>
                    <li className="px-4 py-1 text-[14px] font-sans hover:bg-gray-100 border-b">5X</li>
                </ul>

            </div>

        </button>

    )
}

/*  

icone chevrodown 

<p className="px-4 font-sans text-[14px] "> Parcelas | v </p>

<span className="border-l p-2 hover:bg-gray-100">

<ChevronDownIcon className="h-2 w-2 text-gray-500" />

</span>

<div className="absolut hidden group-focus:block top-2 w-20 bg-white shadow-md mt-1 rounded">

*/ 