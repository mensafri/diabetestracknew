import { Link } from "@inertiajs/react";


export default function Sidebar() {
  return (
    <>
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
    </>
  )
}
