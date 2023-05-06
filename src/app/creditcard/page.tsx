'use client';

import '../../styles/globals.css'
import Payment from "../../components/creditcard/ButtonPayment";
import { ThemeProvider } from "@material-tailwind/react";

export default function Dash() {
    return(
        <div>

            <h1>Ta tudo certo</h1>
            <ThemeProvider>
                <Payment />
            </ThemeProvider>
            
        </div>
    )
}