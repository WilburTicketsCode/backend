import React from "react";

import EditAddress from '../../components/CostumerProfile/EditAddress';
/** ISTO NÃO DEVERIA SER ACESSADO POR ROTAS */

const editAddress = () => {
    return (
        <div className="w-full h-full flex items-center justify-center pt-20 md:pt-36">
            <EditAddress/>
        </div>
    )
}

export default editAddress;