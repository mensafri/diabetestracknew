import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import Uploader from '@/Components/Uploader';
import LayoutPasien from '@/Layouts/LayoutPasien';
import { Transition } from '@headlessui/react';
import { Link, useForm } from '@inertiajs/react';


export default function GulaDarah({ auth }) {
    const { data, setData, post, processing, errors, reset, recentlySuccessful } = useForm({
        hasil: '',
        foto: 'kosong',
        pasien_id: auth.user.pasien_data[0].id,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('pasien.createGulaDarah'));
    };
    return (
        <>
            <LayoutPasien user={auth.user}>
                <div className="bg-blue-300 min-h-screen flex justify-center ">
                    <div className="py-20 md:w-3/5 w-5/6 ">
                        <div className="bg-white py-8 px-8 rounded-2xl">
                            <h3 className="text-center font-semibold">Cek Gula Darah Mandiri</h3>

                            <form onSubmit={submit}>
                                <div className="mt-5">
                                    <InputLabel htmlFor="" value="Gula Darah" />
                                    <TextInput
                                        type="number"
                                        id="hasil"
                                        name="hasil"
                                        value={data.hasil}
                                        className="mt-1 block w-full"
                                        autoComplete="hasil"
                                        isFocused={true}
                                        onChange={(e) => setData('hasil', e.target.value)}
                                        required
                                    />
                                </div>
                                {/* <div className="mt-4">
                                    <InputLabel htmlFor="image" value="Photo" />
                                    <Uploader />
                                </div> */}
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
                                    <p className="text-sm text-gray-600">Laporan Diet Berhasil Dibuat</p>
                                </Transition>
                            </form>
                        </div>
                    </div>
                </div>
            </LayoutPasien>
        </>
    )
}
