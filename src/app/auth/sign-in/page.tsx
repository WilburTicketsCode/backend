import React from "react";
import LoginAdm from '../../../components/Auth/Login';


const LoginA = () => {
    return (
        <div className="w-full h-screen flex items-center justify-center pt-20 md:pt-36">
            <div className=" flex w-full lg:w-[40%] h-4/5  justify-center ">

                <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-white rounded-2xl">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <img
                            className="mx-auto h-15 w-auto"
                            src="/icons/logo.svg"
                            alt="WilTickets"
                        />
                        <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                            Entre na sua conta
                        </h2>
                    </div>

                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                        <LoginAdm />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default LoginA;