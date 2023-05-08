"use client";
import {Carousel, Typography, Button} from "@material-tailwind/react";

export default function Caro(props: any){
    return(
        <Carousel className="rounded-xl w-[650px]">
        <img
          src= {props.imagem1}
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <img
          src={props.imagem2}
          alt="image 2"
          className="h-full w-full object-cover"
        />
        <img
          src={props.imagem3}
          alt="image 3"
          className="h-full w-full object-cover"
        />
      </Carousel>
    )
}