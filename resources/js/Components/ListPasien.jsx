import { Link } from "@inertiajs/react";


export default function ListPasien({list_pasien, href}) {
    const profile1 = `/storage/assets/img/profile1.png`
    const info = `/storage/assets/img/info.svg`

    console.log(list_pasien);
  return (
    <>
        <div className="bg-gray-100 py-8 px-6 rounded-2xl">
            {list_pasien.map(pasien => {
                return (
                    <div className="list-pasien flex justify-between bg-white rounded-3xl py-4 px-6 mt-8">
                        <div className="flex">
                            <img className="w-14" src={profile1} alt="" />
                            <div className="ml-6 self-center">
                                <h4 className="text-lg font-semibold">{pasien.nama}</h4>
                                <p className="text-gray-500 text-sm">Dr.<span>{pasien.nama_dokter}</span></p>
                            </div>
                        </div>
                        <Link href={href} className="self-center">
                            <img src={info} alt="" />
                        </Link>
                    </div>
                )
            })}
        </div>
</>
  )
}
