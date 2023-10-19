export default function Olahraga() {
    const olahraga = `/storage/assets/img/olahraga.png`
    return (
        <div className="bg-white mt-10 rounded-2xl">
            <div className="bg-gray-100 rounded-t-2xl py-6 px-8">
                <h3 className="text-xl font-semibold">Olahraga</h3>
            </div>
            <div className="py-6 px-8 flex flex-col md:flex-row gap-10">
                <img src={olahraga} alt="" />
                <div className="">
                    <h4>Jenis Olahraga : Senam Pagi</h4>
                    <h4>Durasi : 20 Menit</h4>
                </div>
            </div>
        </div>
    )
}
