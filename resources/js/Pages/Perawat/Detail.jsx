import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
   
export default function Detail({auth}) {
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
                            <div className="bg-white py-5 px-5 sm:p-9 rounded-3xl">
                                <div className="flex flex-col sm:flex-row md:flex-row xl:flex-row">
                                    <img className="w-40 sm:w-64" src={profile2} alt="" />
                                    <div className="detail text-gray-400 self-center text-lg sm:ml-10 mt-6 sm:mt-0">
                                        <h4>Nama : Jhonatan</h4>
                                        <h4>Umur : 40 </h4>
                                        <h4>Tanggal Lahir : 21 September : 1989</h4>
                                        <h4>Dokter : Dr. Amizah</h4>
                                        <h4>No Hp : 088987654567</h4>
                                        <h4>No Rekam Medis : 1234567890</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white mt-20 sm:mt-40 rounded-3xl py-5 px-5 sm:p-9 mt">
                                <div className="flex justify-between">
                                    <h3 className="text-xl font-semibold">Patient's Report</h3>
                                    
                                        <div class="relative max-w-sm">
                                        <div class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                                            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                                            </svg>
                                        </div>
                                        <TextInput datepicker type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date"/>
                                        </div>

                                </div>
                            </div>
                        </div>
                    </div>
                   </div>
                </div>
              
    
    
            </AuthenticatedLayout>
    
    
          
          
        </>
      )
    }
    
