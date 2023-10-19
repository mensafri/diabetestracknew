import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import SidebarNavDokter from '@/Components/SidebarNavDokter';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Transition } from '@headlessui/react';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Saran({ auth, pasien }) {
    const { data, setData, post, processing, errors, reset, recentlySuccessful } = useForm({
        pasien: '',
        teks: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('dokter.createSaran'));
    };
    return (
        <>
            <AuthenticatedLayout user={auth.user}>
                <div className="bg-blue-300 flex">
                    <SidebarNavDokter />
                    <div className="mt-20 items-center w-full">
                        <div className=" flex justify-center">
                            <div className="w-5/6 rounded-md ">
                                <div className="bg-white py-5 px-5 sm:p-9 rounded-3xl">
                                    <form onSubmit={submit}>
                                        <div className="mt-4">
                                            <InputLabel htmlFor="pasien" value="Pilih Pasien" />
                                            <div className="flex gap-5">
                                                <select onChange={(e) => setData('pasien', e.target.value)} value={data.pasien} id="time-select" name="pasien" className="w-40 h-14 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                                    {pasien.map(el => <option key={el.id} value={el.id}>{el.nama}</option>)}
                                                </select>
                                            </div>
                                        </div>
                                        <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
                                            <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
                                                <label for="comment" className="sr-only">Your comment</label>
                                                <textarea value={data.teks} onChange={(e) => setData('teks', e.target.value)} name='teks' id="comment" rows="4" className="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder="Tambah Saran..." required></textarea>
                                            </div>
                                            <div className="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
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
                                        </div>
                                    </form>
                                    <p className="ml-auto text-xs text-gray-500 dark:text-gray-400">Remember, contributions to this topic should follow our <a href="#" className="text-blue-600 dark:text-blue-500 hover:underline">Community Guidelines</a>.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </AuthenticatedLayout>
        </>
    )
}
