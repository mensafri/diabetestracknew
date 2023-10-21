import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import Uploader from '@/Components/Uploader';
import LayoutPasien from '@/Layouts/LayoutPasien';
import { Transition } from '@headlessui/react';
import { Link, useForm } from '@inertiajs/react';


export default function Obat({ auth }) {
    const { data, setData, post, processing, errors, reset, recentlySuccessful } = useForm({
        waktu: '',
        dosis: '',
        jenis_obat: '',
        foto: 'kosong',
        pasien_id: auth.user.pasien_data[0].id,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('pasien.createObat'));
    };

    return (
        <>
            <LayoutPasien user={auth.user}>
                <div className="bg-blue-300 min-h-screen flex justify-center ">
                    <div className="py-20 md:w-3/5 w-5/6 ">
                        <div className="bg-white py-8 px-8 rounded-2xl">
                            <h3 className="text-center font-semibold">Pengobatan</h3>

                            <form onSubmit={submit}>
                                <div className="mt-5">
                                    <InputLabel htmlFor="" value="Jenis Obat" />

                                    <TextInput
                                        id="jenis_obat"
                                        name="jenis_obat"
                                        value={data.jenis_obat}
                                        className="mt-1 block w-full"
                                        autoComplete="jenis_obat"
                                        isFocused={true}
                                        onChange={(e) => setData('jenis_obat', e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="mt-10">
                                    <InputLabel htmlFor="waktu" value="Waktu" />
                                    <div className="flex gap-5">
                                        <select onChange={(e) => setData('waktu', e.target.value)} id="time-select" name="waktu" className="w-40 h-14 bg-gray-100 border-gray-300 focus:ring-blue-500 ">
                                            <option value="Pagi">Pagii</option>
                                            <option value="Sore">Sore</option>
                                            <option value="Malam">Malam</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <InputLabel htmlFor="" value="Dosis" />
                                    <TextInput
                                        id="dosis"
                                        name="dosis"
                                        value={data.dosis}
                                        className="mt-1 block w-full"
                                        autoComplete="dosis"
                                        isFocused={true}
                                        onChange={(e) => setData('dosis', e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="mt-4">
                                    <InputLabel htmlFor="image" value="Photo" />
                                    <Uploader />
                                </div>
                                <div className="flex items-center justify-end mt-10">
                                    <Link
                                        href=""
                                        className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >
                                    </Link>
                                    <PrimaryButton className="ml-4" disabled={processing}>
                                        Submit
                                    </PrimaryButton>
                                    <Transition
                                        show={recentlySuccessful}
                                        enter="transition ease-in-out"
                                        enterFrom="opacity-0"
                                        leave="transition ease-in-out"
                                        leaveTo="opacity-0"
                                    >
                                        <p className="text-sm text-gray-600">Laporan Diet Berhasil Dibuat</p>
                                    </Transition>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </LayoutPasien>
        </>
    )
}
