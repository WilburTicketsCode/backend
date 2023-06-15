import { Typography }from "../../ClientSide";
 
export default function GuestFooter() {
  return (
    <footer className="w-full bg-white p-2 h-[25%] ">

    <hr className="my-4 border-blue-gray-50" />
      <Typography color="blue-gray" className="text-center font-normal">
        &copy; 2023 WILL TICKETS, TODOS OS DIREITOS RESERVADOS
      </Typography>
    </footer>
  );
}