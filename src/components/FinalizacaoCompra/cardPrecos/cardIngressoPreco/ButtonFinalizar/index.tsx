import Link from "next/link"
import { useState } from "react";
import { Alert, Button } from "@material-tailwind/react";
import { useShoppingCart } from "@/contexts/ShoppingCartContext";
import { CheckCircleIcon } from "@heroicons/react/24/solid"



function refreshPage() {
    window.location.replace('/');
}



export default function ButtonFinalizar(ticket:any) {
    const [openAlert, setOpenAlert] = useState(false);
    const { restartCartDef } = useShoppingCart();

    const buttonAction = () => {
        setOpenAlert(true);
        setTimeout(() => {
            setOpenAlert(false); 
            refreshPage();
        }, 3000);
        restartCartDef() 
    }
    return (
        <>
            <button onClick={buttonAction} className="bg-purple-800  h-[23px] w-[100px] rounded-lg font-sans text-[10px] text-white">
                Finalizar Pagamento</button>


            <Alert
                open={openAlert}
                color="green"
                className="max-w-[20%] absolute bottom-5"
                icon={<CheckCircleIcon className="mt-px h-6 w-6" />}
            >
                <p className="font-normal">
                    Compra Finalizada!!
                </p>
            </Alert>
        </>

    )
}