import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

export default function Guest({ children }) {
    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-blue-300">
            <div>
                <h3 className="sm:text-2xl text-white font-semibold text-center">
                    TISSHV Smart Health Care <br />
                    Mentoring System</h3>
            </div>

            <div className="w-11/12 sm:w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
                {children}
            </div>
        </div>
    );
}
