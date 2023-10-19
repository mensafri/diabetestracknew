import Diet from "./ReportPasien/Diet";
import Glukosa from "./ReportPasien/Glukosa";
import Obat from "./ReportPasien/Obat";
import Olahraga from "./ReportPasien/olahraga";
import TextInput from "./TextInput";


export default function DetailPasien() {
    return (
        <div className="mt-20 sm:mt-40 mt">
            <div className="bg-white flex justify-between py-5 px-5 sm:p-9 rounded-3xl ">
                <div className="">
                    <h3 className="text-xl font-semibold self-center">Patient's Report</h3>
                    <p>21 Oktober 2023</p>
                </div>
                <div className="relative max-w-sm ">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                        </svg>
                    </div>
                    <TextInput type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date" />
                </div>
            </div>

            <Olahraga />
            <Diet />
            <Obat />
            <Glukosa />
        </div>
    )
}
