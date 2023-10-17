
export default function Obat() {
    const obat = `/storage/assets/img/obat.png`
  return (
      <div className="bg-white mt-10 rounded-2xl">
          <div className="bg-gray-100 rounded-t-2xl py-6 px-8">
              <h3 className="text-xl font-semibold">Obat</h3>
          </div>
          <div className="py-6 px-8 flex flex-col md:flex-row gap-10">
              <div className="bg-gray-100 py-6 px-6 rounded-xl">
                  <h3 className="text-lg font-semibold mb-4">Pagi</h3>
                  <div className="flex flex-col md:flex-row gap-6">
                      <img src={obat} alt="" />
                      <div className="">
                          <h4>Jenis Obat : Senam Pagi</h4>
                      </div>
                  </div>
              </div>
              <div className="bg-gray-100 py-6 px-6 rounded-xl">
                  <h3 className="text-lg font-semibold mb-4">Sore</h3>
                  <div className="flex flex-col md:flex-row gap-6">
                      <img src={obat} alt="" />
                      <div className="">
                          <h4>Jenis Obat : Senam Pagi</h4>
                      </div>
                  </div>
              </div>
              <div className="bg-gray-100 py-6 px-6 rounded-xl">
                  <h3 className="text-lg font-semibold mb-4">Malam</h3>
                  <div className="flex flex-col md:flex-row gap-6">
                      <img src={obat} alt="" />
                      <div className="">
                          <h4>Jenis Obat : Senam Pagi</h4>
                      </div>
                  </div>
              </div>

          </div>
      </div>
  )
}
