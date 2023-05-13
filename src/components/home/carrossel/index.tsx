"use client";
import {Carousel} from "@material-tailwind/react";

export default function Carrossel(props: any){
    return(
        <Carousel className="rounded-xl">
        <img
          src= {props.imagem1}
          alt="image 1"
          className="h-full w-full object-cover lg:px-[150px]"
        />
        <img
          src={props.imagem2}
          alt="image 2"
          className="h-full w-full object-cover lg:px-[150px]"
        />
        <img
          src={props.imagem3}
          alt="image 3"
          className="h-full w-full object-cover lg:px-[150px]"
        />
        <img
          src={props.imagem3}
          alt="image 4"
          className="h-full w-full object-cover lg:px-[150px]"
        />
      </Carousel>
    )
}