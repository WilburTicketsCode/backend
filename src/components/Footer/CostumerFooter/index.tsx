import { Typography }from "../../ClientSide";
 
export default function CostumerFooter() {
  return (
    <footer className="w-full bg-white p-2 h-[25%] ">

        <ul className="flex flex-center justify-end items-center gap-y-1 gap-x-8 text-xs">

          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Suporte
            </Typography>
          </li>
        </ul>
    <hr className="my-4 border-blue-gray-50" />
      <Typography color="blue-gray" className="text-center font-normal">
        &copy; 2023 WILL TICKETS, TODOS OS DIREITOS RESERVADOS
      </Typography>
    </footer>
  );
}