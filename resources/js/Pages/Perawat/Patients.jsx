import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

export default function Patient({ auth, list_pasien }) {
    const searchIcon = `/storage/assets/img/search.svg`
    const profile1 = `/storage/assets/img/profile1.png`
    const info = `/storage/assets/img/info.svg`

    console.log(list_pasien);
    return (
        <>
            <AuthenticatedLayout
                user={auth.user}
            >
                <Head title="Dashboard" />
                <div className="bg-blue-300 flex">
                    <div className="bg-white w-1/6 min-h-screen">
                        <div className="menu py-4 px-5 ">
                            <Link href={''}
                                active={route().current('perawat')}
                            >
                                Create Account
                            </Link>
                        </div>
                        <div className="menu py-4 px-5 bg-gray-100">
                            <Link href=''
                            >
                                Patients
                            </Link>
                        </div>
                        <div className="menu py-4 px-5">
                            <Link href=''
                            >
                                Doctors
                            </Link>
                        </div>
                        <div className="menu py-4 px-5">
                            <Link href=''
                            >
                                Nurse
                            </Link>
                        </div>
                    </div>
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
                                    {list_pasien.map(pasien => {
                                        return (
                                            <div className="list-pasien flex justify-between bg-white rounded-3xl py-4 px-6">
                                                <div className="flex">
                                                    <img className="w-14" src={profile1} alt="" />
                                                    <div className="ml-6 self-center">
                                                        <h4 className="text-lg font-semibold">{pasien.nama}</h4>
                                                        <p className="text-gray-500 text-sm">Dr.<span>{pasien.nama_dokter}</span></p>
                                                    </div>
                                                </div>
                                                <img src={info} alt="" />
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

