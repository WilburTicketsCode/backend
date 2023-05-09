'use client';

import '../../styles/globals.css'
import { Card, CardBody, Typography, Button } from '@material-tailwind/react';
import { BsShare } from "react-icons/bs";

export default function Event() {
    return (
        <div className="mx-auto w-full h-full bg-gradient-to-br from-indigo-300 via-purple-800 to-blue-200">
            <div className='lg:h-[70%] md:h-1/2 sm:h-1/2 mb-5'>
                <img className='md:w-full md:h-full sm:w-full sm:h-full'
                    src="/img/event-banner/show_djavan.jpeg"
                    alt='Imagem do evento'
                />
            </div>

            <Card className='m-5 relative'>
                <CardBody>
                    <div className='flex flex-col items-center'>
                        <Typography variant="h4" color="blue-gray" className="m-6 ">
                            Djavan Turne A 2023
                        </Typography>
                        <Button color="purple" size="sm" className="flex items-center gap-3 rounded-full">
                            <BsShare></BsShare>
                            Compartilhar
                        </Button>
                    </div>             
                </CardBody>
            </Card>

        </div>
    )
}

