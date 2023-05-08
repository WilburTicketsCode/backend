'use client'
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
  } from "@material-tailwind/react";
  import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
   
  export default function EventCard(props: any) {
    return (
      <Card className="flex-row w-[950px] h-[150px] m-[5px]">
        <CardHeader shadow={false} floated={false} className="w-2/5 shrink-0 m-0 rounded-r-none">
          <img 

            src= {props.imagem} 
            alt="image" 
            className="w-full h-full object-cover"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h6" color="[#404C76]" className="font-bold uppercase mb-4">{props.children}</Typography>

          <Typography color="gray" className="font-bold">
            <div className="flex">
              <img src="/icons/fi-br-calendar.png" className="mr-2 mb-2" />
              {props.data}
            </div>

            <div className="flex">
              <img src="/icons/fi-br-location-alt.png" className="mr-2"/>
              {props.local}
            </div>

          </Typography>

        </CardBody>
      </Card>
    );
  }