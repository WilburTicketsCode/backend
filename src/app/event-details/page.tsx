'use client';

import '../../styles/globals.css'
import { Card, CardBody, Typography } from '@material-tailwind/react';

export default function Event() {
    return (
        <div className="mx-auto w-full h-full">
            <div className='h-1/2 mb-5'>
                <img className='w-screen h-full overflow-hidden'
                    src="/img-event-test.jpg"
                    alt='Imagem do evento'
                />
            </div>

            <Card className='m-5 relative'>
                <CardBody>
                    <Typography variant="h4" color="blue-gray" className="m-6 text-center">
                        Show Djavan Turne 2023
                    </Typography>
                </CardBody>
            </Card>

        </div>
    )
}