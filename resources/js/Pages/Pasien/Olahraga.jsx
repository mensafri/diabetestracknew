import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import Uploader from '@/Components/Uploader';
import LayoutPasien from '@/Layouts/LayoutPasien';
import { Link } from '@inertiajs/react';


export default function Olahraga({ auth }) {
    return (
        <>
            <LayoutPasien user={auth.user}>
                <div className="bg-blue-300 min-h-screen flex justify-center ">
                    <div className="py-20 md:w-3/5 w-5/6 ">
                        <div className="bg-white py-8 px-8 rounded-2xl">
                            <h3 className="text-center font-semibold">Aktivitas Fisik</h3>

                            <form>
                                <div className="mt-5">
                                    <InputLabel htmlFor="" value="Jenis Olahraga" />

                                    <TextInput
                                        id=""
                                        name=""
                                        className="mt-1 block w-full"
                                        isFocused={true}
                                        required
                                    />
                                </div>
                                <div className="mt-4">
                                    <InputLabel htmlFor="" value="Durasi Olahraga" />

                                    <TextInput
                                        id=""
                                        name=""
                                        className="mt-1 block w-full"
                                        isFocused={true}
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
                                        <PrimaryButton className="ml-4">
                                            Submit
                                        </PrimaryButton>

                                    </Link>


                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </LayoutPasien>
        </>
    )
}
