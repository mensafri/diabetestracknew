import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import RegisterAdmin from '@/Components/RegisterAdmin';

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
        >
            <Head title="Dashboard" />

            <div className="bg-blue-300 flex">
               <div className="bg-white w-1/6 min-h-screen">
                    <div className="menu py-4 px-5 bg-gray-100">
                    <Link href=''
                        active={route().current('perawat')}
                        className="">
                        Create Account
                    </Link>
                
                    </div>
               </div>
               <div className="mt-20 items-center w-full">
                <div className=" flex justify-center">
                    <div className="bg-gray-100 w-1/2 py-10 px-10 rounded-md">
                        <h3 className="text-xl font-semibold text-center mb-10">
                            Create Account</h3>
                        <RegisterAdmin/>
                    </div>
                </div>
               </div>
            </div>
          


        </AuthenticatedLayout>
    );
}
