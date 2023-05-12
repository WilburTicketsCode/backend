import { Typography } from "../ClientSide";


export default function DetailsSection(props : any) {
    return (
        <>
            <Typography variant="h6" color="blue-gray" className="font-semibold mb-2">
                {props.title}
            </Typography>

            <Typography variant="paragraph" color="blue-gray" className="font-normal mb-8">
                {props.text}
            </Typography>
        </>
    )
}