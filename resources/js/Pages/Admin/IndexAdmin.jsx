import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import RegisterAdmin from '@/Components/RegisterAdmin';
import SidebarNavAdmin from '@/Components/SidebarNavAdmin';

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
        >
            <Head title="Dashboard" />

            <div className="bg-blue-300 flex">
               <SidebarNavAdmin/>
               <div className="mt-20 items-center w-full">
                <div className=" flex justify-center">
                    <RegisterAdmin/>

                </div>
               </div>
            </div>



        </AuthenticatedLayout>
    );
}
