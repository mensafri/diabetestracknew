import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import Uploader from '@/Components/Uploader';
import LayoutPasien from '@/Layouts/LayoutPasien';
import { Transition } from '@headlessui/react';
import { Link, useForm } from '@inertiajs/react';


export default function Olahraga({ auth }) {
    const { data, setData, post, processing, errors, reset, recentlySuccessful } = useForm({
        waktu: '',
        jenis_olahraga: '',
        foto: 'kosong',
        pasien_id: auth.user.pasien_data[0].id,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('pasien.createOlahraga'));
    };
    return (
        <>
            <LayoutPasien user={auth.user}>
                <div className="bg-blue-300 min-h-screen flex justify-center ">
                    <div className="py-20 md:w-3/5 w-5/6 ">
                        <div className="bg-white py-8 px-8 rounded-2xl">
                            <h3 className="text-center font-semibold">Aktivitas Fisik</h3>
                            <form onSubmit={submit}>
                                <div className="mt-5">
                                    <InputLabel htmlFor="jenis_olahraga" value="Jenis Olahraga" />
                                    <TextInput
                                        id="jenis_olahraga"
                                        name="jenis_olahraga"
                                        value={data.jenis_olahraga}
                                        className="mt-1 block w-full"
                                        autoComplete="jenis_olahraga"
                                        isFocused={true}
                                        onChange={(e) => setData('jenis_olahraga', e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="mt-4">
                                    <InputLabel htmlFor="waktu" value="Durasi Olahraga" />
                                    <TextInput
                                        id="waktu"
                                        name="waktu"
                                        value={data.waktu}
                                        className="mt-1 block w-full"
                                        autoComplete="waktu"
                                        isFocused={true}
                                        onChange={(e) => setData('waktu', e.target.value)}
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
                                </div>
                                <Transition
                                    show={recentlySuccessful}
                                    enter="transition ease-in-out"
                                    enterFrom="opacity-0"
                                    leave="transition ease-in-out"
                                    leaveTo="opacity-0"
                                >
                                    <p className="text-sm text-gray-600">Laporan Olahraga Berhasil Dibuat</p>
                                </Transition>
                            </form>
                        </div>
                    </div>
                </div>
            </LayoutPasien>
        </>
    )
}
