'use client';

import '../../styles/globals.css'
import { Card, CardBody, Typography } from '@material-tailwind/react';

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
                    <Typography variant="h4" color="blue-gray" className="m-6 text-center">
                        Djavan Turne A 2023
                    </Typography>
                </CardBody>
            </Card>

        </div>
    )
}