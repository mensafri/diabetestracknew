import DetailPasien from "@/Components/DetailPasien";
import PrimaryButton from "@/Components/PrimaryButton";
import SidebarNavDokter from "@/Components/SidebarNavDokter";
import SidebarNavPerawat from "@/Components/SidebarNavPerawat";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

export default function Detail({ auth, dataPasien }) {
    const searchIcon = `/storage/assets/img/search.svg`
    const profile1 = `/storage/assets/img/profile1.png`
    const profile2 = `/storage/assets/img/profile2.png`
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
                                <div className="bg-white py-5 px-5 sm:p-9 rounded-3xl">
                                    <div className="flex flex-col sm:flex-row md:flex-row xl:flex-row">
                                        <img className="w-40 sm:w-64" src={profile2} alt="" />
                                        <div className="detail text-gray-400 self-center text-lg sm:ml-10 mt-6 sm:mt-0">
                                            <h4>Nama : Jhonatan</h4>
                                            <h4>Umur : 40 </h4>
                                            <h4>Tanggal Lahir : 21 September : 1989</h4>
                                            <h4>Dokter : Dr. Amizah</h4>
                                            <h4>Perawat : Nama Perawat  </h4>
                                            <h4>No Hp : 088987654567</h4>
                                            <h4>No Rekam Medis : 1234567890</h4>
                                            
                                        </div>
                                    </div>
                                    <div className="flex justify-end w-full">
                                        <Link href="/dokter/saran">
                                            <PrimaryButton >Tambah Saran</PrimaryButton>
                                        </Link>
                                    </div>
                                </div>
                                <DetailPasien dataPasien={dataPasien} />
                            </div>
                        </div>
                    </div>
                </div>



            </AuthenticatedLayout>




        </>
    )
}

