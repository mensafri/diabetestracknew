export default function Olahraga({ dataOlahraga }) {
    const olahraga = `/storage/assets/img/olahraga.png`
    return (
        <div className="bg-white mt-10 rounded-2xl">
            <div className="bg-gray-100 rounded-t-2xl py-6 px-8">
                <h3 className="text-xl font-semibold">Olahraga</h3>
            </div>
            <div className="py-6 px-8 flex flex-col md:flex-row gap-10">
                <img src={olahraga} alt="" />
                <div className="">
                    <h4>Jenis Olahraga : {dataOlahraga !== null ? dataOlahraga.jenis_olahraga : 'Pasien Belum Mengisi Laporan Olahraga'}</h4>
                    <h4>Durasi : {dataOlahraga !== null ? dataOlahraga.waktu : 'Pasien Belum Mengisi Laporan Olahraga'}</h4>
                </div>
            </div>
        </div>
    )
}
