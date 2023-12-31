
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import RegisterPerawat from './RegisterPerawat';
import SidebarNavPerawat from '@/Components/SidebarNavPerawat';


export default function IndexPerawat({ auth, list_dokter }) {
    return (
        <>
            <AuthenticatedLayout user={auth.user}>
                <Head title="Dashboard" />
                <div className="bg-blue-300 flex">
                    <SidebarNavPerawat />
                    <div className="mt-20 items-center w-full">
                        <div className=" flex justify-center">
                            <RegisterPerawat list_dokter={list_dokter} />
                        </div>
                    </div>
                </div>
            </AuthenticatedLayout>
        </>
    )
}
