import React from "react";
import Password from '../../../components/ChangePassword';

/** ISTO NÃO DEVERIA SER ACESSADO POR ROTAS */

const password = () => {
    return (
        <div className="w-full h-full flex items-center justify-center pt-20 md:pt-36">
            <Password/>
        </div>
    )
}

export default password;