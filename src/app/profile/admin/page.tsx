'use client'
import '../../../styles/globals.css'
import AdminP from "../../../components/Admin/profile";
import AdminFooter from '@/components/Footer/AdminFooter';



export default function Dash() {
    return (
    <div>
        <div className='flex-col justify-center items-center w-full'>
            <AdminP />

            <AdminFooter/>

        </div>
    </div>
    )
}