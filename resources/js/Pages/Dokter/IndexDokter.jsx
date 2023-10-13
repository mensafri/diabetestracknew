import ListPasien from '@/Components/ListPasien';
import SidebarNavDokter from '@/Components/SidebarNavDokter';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function IndexDokter({auth, list_pasien}) {
    console.log(list_pasien);
  return (
    <>
        <AuthenticatedLayout
                user={auth.user}
            >
                <Head title="Dashboard" />

                <div className="bg-blue-300 flex">
                    <SidebarNavDokter/>
                    <div className="mt-20 items-center w-full">
                        <div className=" flex justify-center">
                            <ListPasien list_pasien={list_pasien}/>
                        </div>
                    </div>
                </div>



            </AuthenticatedLayout>
    </>
  )
}
