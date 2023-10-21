import { Head, Link } from "@inertiajs/react";
import LayoutPasien from '@/Layouts/LayoutPasien';


export default function ({ auth, pasien, saran }) {
    const profile3 = `/storage/assets/img/profile3.png`
    const food = `/storage/assets/img/food.svg`
    const sport = `/storage/assets/img/sport.svg`
    const medicine = `/storage/assets/img/medicine.svg`
    const glucose = `/storage/assets/img/glucose.svg`

    return (
        <>
            <LayoutPasien user={auth.user}>
                <Head title="Home" />
                <div className="bg-blue-300 min-h-screen flex justify-center ">
                    <div className="py-10 sm:py-20 w-10/12 md:w-3/5 ">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-16  w-full">
                            <div className="row-span-2 col-span-2 bg-white rounded-2xl py-6 px-6 md:py-8 md:px-10">

                                <img src={profile3} alt="" className="w-24 md:w-48" />
                                <h3 className="mt-6 sm:mt-12 sm:text-2xl font-semibold">{pasien[0].nama}</h3>
                                <p className="text-gray-600 text-xs sm:text-base">Pasien <span>{pasien[0].nama_dokter}</span></p>
                                <p className="text-gray-600 text-xs sm:text-base">{pasien[0].rekam_medis}</p>

                            </div>
                            <div className="col-span-1 bg-white rounded-2xl py-3.5 px-2 sm:py-8 sm:px-4 text-center">
                                <Link href="/pasien/diet">
                                    <div className="flex flex-col items-center">
                                        <img src={food} alt="" className="w-10 sm:w-14 " />
                                        <h3 className="font-semibold mt-4 sm:mt-6 text-xs sm:text-base">Pengaturan Makan</h3>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-span-1 bg-white rounded-2xl py-3.5 px-2 sm:py-8 sm:px-4 text-center">
                                <Link href="/pasien/olahraga">
                                    <div className="flex flex-col items-center">
                                        <img src={sport} alt="" className="w-10 sm:w-14 " />
                                        <h3 className="font-semibold mt-4 sm:mt-6 text-xs sm:text-base">Aktivitas Fisik</h3>
                                    </div>
                                </Link>
                            </div>
                            <div class="col-span-1 bg-white rounded-2xl py-3.5 px-2 sm:py-8 sm:px-4 text-center">
                                <Link href="/pasien/obat">
                                    <div className="flex flex-col items-center mt-1.5">
                                        <img src={medicine} alt="" className="w-10 sm:w-14 " />
                                        <h3 className="font-semibold mt-4 sm:mt-6 text-xs sm:text-base">Pengobatan</h3>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-span-1 bg-white rounded-2xl py-3.5 px-2 sm:py-8 sm:px-4 text-center">
                                <Link href="/pasien/gula-darah">
                                    <div className="flex flex-col items-center">
                                        <img src={glucose} alt="" className="w-10 sm:w-14 " />
                                        <h3 className="font-semibold mt-4 sm:mt-6 text-xs sm:text-base">Monitoring Glukosa</h3>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="bg-white mt-6 sm:mt-10 rounded-2xl sm:h-64">
                            <div className="bg-gray-100 rounded-t-2xl py-4 px-6 sm:py-6 sm:px-8">
                                <h3 className="text-base sm:text-xl font-semibold">Saran Dokter</h3>
                            </div>
                            <div className="py-6 px-8 saran-dokter">
                                <h4> {saran !== null ? saran.teks : 'Dokter Belum Memberi Saran'} </h4>
                            </div>
                        </div>
                    </div>

                </div>
            </LayoutPasien>
        </>
    )
}
