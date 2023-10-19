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
                    <div className="py-20 md:w-3/5 ">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16  w-full">
                            <div className="row-span-2 col-span-2 bg-white rounded-2xl py-6 px-6 md:py-8 md:px-10">

                                <img src={profile3} alt="" className="w-28 md:w-52" />
                                <h3 className="mt-10 text-2xl font-semibold">{pasien[0].nama}</h3>
                                <p>{pasien[0].nama_dokter}</p>
                                <p>{pasien[0].rekam_medis}</p>

                            </div>
                            <div className="col-span-1 bg-white rounded-2xl py-8 px-4 text-center">
                                <Link href="/pasien/diet">
                                    <div className="flex flex-col items-center">
                                        <img src={food} alt="" className="w-20 " />
                                        <h3 className="font-semibold mt-6">Pengaturan Makan</h3>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-span-1 bg-white rounded-2xl p-8 text-center">
                                <Link href="/pasien/olahraga">
                                    <div className="flex flex-col items-center">
                                        <img src={sport} alt="" className="w-20 " />
                                        <h3 className="font-semibold mt-6">Aktivitas Fisik</h3>
                                    </div>
                                </Link>
                            </div>
                            <div class="col-span-1 bg-white rounded-2xl p-8 text-center">
                                <Link href="/pasien/obat">
                                    <div className="flex flex-col items-center">
                                        <img src={medicine} alt="" className="w-20 " />
                                        <h3 className="font-semibold mt-6">Pengobatan</h3>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-span-1 bg-white rounded-2xl p-8 text-center">
                                <Link href="/pasien/gula-darah">
                                    <div className="flex flex-col items-center">
                                        <img src={glucose} alt="" className="w-20 " />
                                        <h3 className="font-semibold mt-6">Monitoring Glukosa Darah</h3>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="bg-white mt-10 rounded-2xl h-64">
                            <div className="bg-gray-100 rounded-t-2xl py-6 px-8">
                                <h3 className="text-xl font-semibold">Saran Dokter</h3>
                            </div>
                            <div className="py-6 px-8 saran-dokter">
                                <h4> {saran.teks} </h4>
                            </div>
                        </div>
                    </div>

                </div>
            </LayoutPasien>
        </>
    )
}
