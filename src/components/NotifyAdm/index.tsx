import {useState} from 'react'
import { useEffect } from 'react';
import { Badge } from '../ClientSide';
import { BellIcon } from '@heroicons/react/24/outline';

export default function NotifyAdm() {

    const [isNew, setIsNew] = useState()

    //Consulta a API
    const [items, setItems] = useState([]);
 
    const fetchAdmins = async () => {
        const reponse = await fetch("/api/administrador");
        const  data = await reponse.json();
        setIsNew(data);
    }
 
    useEffect(() => {
        fetchAdmins();
    }, []);


    if (isNew === true){
        return (
            <Badge>
                <BellIcon className="h-8 w-8" />
            </Badge>
        )
    } else{

    }
}