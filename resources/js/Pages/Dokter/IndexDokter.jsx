
import ListPasien from "@/Components/ListPasien";
import SidebarNavDokter from "@/Components/SidebarNavDokter";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

export default function IndexDokter({ auth, list_pasien }) {
    const searchIcon = `/storage/assets/img/search.svg`
    const info = `/storage/assets/img/info.svg`

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
                                <div className="bg-gray-100 py-8 px-6 rounded-2xl">
                                    {list_pasien.map(pasien => {
                                        return (
                                            <div className="list-pasien flex justify-between bg-white rounded-3xl py-4 px-6 mt-8" key={pasien.id}>
                                                <div className="flex">
                                                    {/* <img className="w-14" src={profile1} alt="" /> */}
                                                    <div className="ml-6 self-center">
                                                        <h4 className="text-lg font-semibold">{pasien.nama}</h4>
                                                        <p className="text-gray-500 text-sm">Dr.<span>{pasien.nama_dokter}</span></p>
                                                    </div>
                                                </div>
                                                <Link href={`/dokter/detail/${pasien.id}`} className="self-center">
                                                    <img src={info} alt="" />
                                                </Link>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </AuthenticatedLayout>
        </>
    )
}

