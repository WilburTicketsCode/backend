import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button
} from "../ClientSide";
 
export default function Example(props: any ) {
  return (
    <Card className="flex flex-col mx-auto ">
      <CardHeader floated={false} color="blue-gray" className="relative h-56">
        <img  
        src= {props.imagem} 
        alt="thumbnail" 
        className="w-full h-full "/>
      </CardHeader>
      <CardBody>
        <Typography >
          {props.nome} - {props.data}
        </Typography>
        <Typography >
          {props.local}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button className="bg-purple-800 h-[40px] w-[130px] mt-auto p-0">
          Editar 
        </Button>
      </CardFooter>
    </Card>
  );
}