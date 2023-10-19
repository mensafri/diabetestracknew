export default function Glukosa({ dataGlukosa }) {
    const glukosa = `/storage/assets/img/glukosa.png`
    return (
        <div className="bg-white mt-10 rounded-2xl mb-10">
            <div className="bg-gray-100 rounded-t-2xl py-6 px-8">
                <h3 className="text-xl font-semibold">Cek Darah Mandiri</h3>
            </div>
            <div className="py-6 px-8 flex flex-col md:flex-row gap-10">
                <img src={glukosa} alt="" />
                <div className="">
                    <h4>Gula darah : {dataGlukosa !== null ? dataGlukosa.hasil + 'mg/dL' : 'Pasien Belum Mengisi Laporan Glukosa'}</h4>
                </div>
            </div>
        </div>
    )
}
