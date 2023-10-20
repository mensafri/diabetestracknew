
export default function Diet({ dataDiet }) {
    const diet = `/storage/assets/img/diet.png`
    const { Pagi, Sore, Malam } = dataDiet
    return (
        <div className="bg-white mt-10 rounded-2xl">
            <div className="bg-gray-100 rounded-t-2xl py-6 px-8">
                <h3 className="text-xl font-semibold">Pengaturan Makan</h3>
            </div>
            <div className="py-6 px-8 flex flex-col md:flex-row gap-10">
                <div className="bg-gray-100 py-6 px-6 rounded-xl sm:w-1/3">
                    <h3 className="text-lg font-semibold mb-4">Pagi</h3>
                    <div className="flex flex-col md:flex-row gap-6">
                        <img src={diet} alt="" />
                        <div className="">
                            <h4>Jenis Makanan : {Pagi !== null ? Pagi.jenis_makanan : 'Pasien Belum Mengisi'}</h4>
                            <h4>Porsi : {Pagi !== null ? Pagi.porsi : 'Pasien Belum Mengisi Laporan Diet'}</h4>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-100 py-6 px-6 rounded-xl sm:w-1/3">
                    <h3 className="text-lg font-semibold mb-4">Sore</h3>
                    <div className="flex flex-col md:flex-row gap-6">
                        <img src={diet} alt="" />
                        <div className="">
                            <h4>Jenis Makanan : {Sore !== null ? Sore.jenis_makanan : 'Pasien Belum Mengisi '}</h4>
                            <h4>Porsi : {Sore !== null ? Sore.porsi : 'Pasien Belum Mengisi Laporan Diet'}</h4>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-100 py-6 px-6 rounded-xl sm:w-1/3">
                    <h3 className="text-lg font-semibold mb-4">Malam</h3>
                    <div className="flex flex-col md:flex-row gap-6">
                        <img src={diet} alt="" />
                        <div className="">
                            <h4>Jenis Makanan : {Malam !== null ? Malam.jenis_makanan : 'Pasien Belum Mengisi '}</h4>
                            <h4>Porsi : {Malam !== null ? Malam.porsi : 'Pasien Belum Mengisi Laporan Diet'}</h4>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
