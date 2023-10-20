import ListPasien from "@/Components/ListPasien"
import SidebarNavAdmin from "@/Components/SidebarNavAdmin"
import TextInput from "@/Components/TextInput"
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from "@inertiajs/react"

export default function Pasiens({auth, list_pasien, href}) {
    const profile1 = `/storage/assets/img/profile1.png`
    const searchIcon = `/storage/assets/img/search.svg`
    const info = `/storage/assets/img/info.svg`
    return (
            <AuthenticatedLayout
                user={auth.user}
            >
                <Head title="Dashboard" />
                <div className="bg-blue-300 flex">
                    <SidebarNavAdmin/>
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
                                    <ListPasien href={"/perawat/detail"} list_pasien={list_pasien} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </AuthenticatedLayout>

    )
}
