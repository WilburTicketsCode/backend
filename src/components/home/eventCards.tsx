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

            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80" 
            alt="image" 
            className="w-full h-full object-cover"
          />
        </CardHeader>
        <CardBody>

          <Typography variant="h6" color="[#404C76]" className="font-bold uppercase mb-4">{props.children}</Typography>

          <Typography color="gray" className="font-normal mb-8">
            02/04 <br />
            PE - Recife
          </Typography>

        </CardBody>
      </Card>
    );
  }