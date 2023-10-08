
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import RegisterPerawat from './RegisterPerawat';
import Patients from './Patients';

export default function IndexPerawat({ auth, list_dokter }) {
    return (
        <>
            <AuthenticatedLayout
                user={auth.user}
            >
                <Head title="Dashboard" />

                <div className="bg-blue-300 flex">
                    <div className="bg-white w-1/6 min-h-screen">
                        <div className="menu py-4 px-5 bg-gray-100">
                            <Link href={''}
                                active={route().current('perawat')}
                            >
                                Create Account
                            </Link>
                        </div>
                        <div className="menu py-4 px-5">
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
                            <RegisterPerawat list_dokter={list_dokter} />
                        </div>
                    </div>
                </div>



            </AuthenticatedLayout>




        </>
    )
}
