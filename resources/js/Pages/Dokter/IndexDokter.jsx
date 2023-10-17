
import ListPasien from "@/Components/ListPasien";
import SidebarNavDokter from "@/Components/SidebarNavDokter";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

export default function IndexDokter({ auth, list_pasien, href }) {
    const searchIcon = `/storage/assets/img/search.svg`

    console.log(list_pasien);

    return (
        <>
            <AuthenticatedLayout
                user={auth.user}
            >
                <Head title="Dashboard" />
                <div className="bg-blue-300 flex">
                    <SidebarNavDokter />
                    <div className="mt-20 items-center w-full">
                        <div className=" flex justify-center">
                            <div className="w-5/6 rounded-md ">
                                <div className="search-bar ">
                                    <div className="pt-2 relative flex text-gray-600">
                                        <TextInput className=" rounded-3xl border-gray-300 bg-white h-10 px-5 pr-16 text-sm focus:outline-none" type="search" name="search" placeholder="Cari Pasien" />
                                        <img className="-ml-10 w-5" src={searchIcon} alt="" />
                                    </div>
                                </div>
                                <div className="bg-gray-100 mt-10 py-8 px-6 rounded-2xl">
                                    <ListPasien href={"/dokter/detail"} list_pasien={list_pasien} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </AuthenticatedLayout>
        </>
    )
}

