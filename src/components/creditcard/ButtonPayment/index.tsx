'use client';

import React from 'react';
import Cardform from '../Cardform';
import FlippableCard from '../FlippableCard';
import { PayContext } from '../../../contexts/payContext';
import { ThemeProvider } from "@material-tailwind/react";
import {
    Button,
    Dialog,
    Card,
    CardBody,
    CardFooter,
} from "@material-tailwind/react";



export default function Payment() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen((cur) => !cur);

    const [infoCard, setInfoCard] = React.useState({
        cardNumber: "",
        name: "",
        date: "",
        cvv: "",
        fucus: true
    })

    const cleanInfoCard = () => {
        setInfoCard({
            cardNumber: "",
            name: "",
            date: "",
            cvv: "",
            fucus: true
        })
    }

    return (
        <React.Fragment>
            <ThemeProvider>
            <PayContext.Provider value={{ infoCard, setInfoCard }} >
                <Button onClick={()=>{cleanInfoCard(); handleOpen()}}>Adicionar Cartão</Button>
                <Dialog
                    size="xl"
                    open={open}
                    handler={handleOpen}
                    className="bg-transparent shadow-none"
                >
                    <Card className="mx-auto w-full  h-1/2" >
                        <CardBody className='flex flex-col h-80 w-full justify-center gap-y-12 items-center'>
                            <FlippableCard />
                        </CardBody>
                        <CardFooter className="flex justify-center">
                            <Cardform />
                        </CardFooter>
                    </Card>

                </Dialog>
            </PayContext.Provider>
            </ThemeProvider>
        </React.Fragment>
    )
}