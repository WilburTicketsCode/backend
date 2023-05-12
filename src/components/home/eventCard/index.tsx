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
      <Card className="flex-row m-[5px]">
        <CardHeader shadow={false} floated={false} className="w-2/5 h-w shrink-0 m-0 rounded-r-none">
          <img 

            src= {props.imagem} 
            alt="image" 
            className="w-full h-full object-cover"
          />
        </CardHeader>

        <CardBody className="flex flex-col w-full p-1">
          <div>
            <h6 color="[#404C76]" className="font-semibold text-center text-[1rem] uppercase overflow-hidden">{props.children}</h6>

            <Typography color="gray" className="flex flex-col ml-4 mb-3 justify-center font-bold text-[14px]">
              <div className="flex">
                <img src="/icons/fi-br-calendar.png" className="mr-1 h-[14px] w-[14px]" />
                {props.data}
              </div>
              <div className="flex">
                <img src="/icons/fi-br-location-alt.png" className="mr-1 h-[14px] w-[14px]"/>
                {props.local}
              </div>
            </Typography>
          </div>

          <div className="flex h-full justify-center items-center">
            <Button className="bg-purple-800 h-[40px] w-[130px] p-0">
              Ver detalhes
            </Button>
          </div>
        </CardBody>
      </Card>
    );
  }