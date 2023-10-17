import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import Uploader from '@/Components/Uploader';
import LayoutPasien from '@/Layouts/LayoutPasien';
import { Link } from '@inertiajs/react';


export default function Diet({ auth }) {
    return (
        <>
            <LayoutPasien user={auth.user}>
                <div className="bg-blue-300 min-h-screen flex justify-center ">
                    <div className="py-20 md:w-3/5 w-5/6 ">
                        <div className="bg-white py-8 px-8 rounded-2xl">
                            <h3 className="text-center font-semibold">Pengaturan Makan</h3>

                            <form>
                                <div className="mt-5">
                                    <InputLabel htmlFor="" value="Jenis Makanan" />

                                    <TextInput
                                        id=""
                                        name=""
                                        className="mt-1 block w-full"
                                        isFocused={true}
                                        required
                                    />
                                </div>
                                <div className="mt-4">
                                    <InputLabel htmlFor="" value="Waktu" />

                                    <div className="flex gap-5">
                                        <div className="flex items-center h-14 px-3 border border-gray-200 rounded dark:border-gray-700">
                                            <TextInput id="bordered-radio-1" type="radio" value="" name="bordered-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                            <InputLabel for="bordered-radio-1" className="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300" value="Pagi" />
                                        </div>
                                        <div className="flex items-center h-14 px-3 border border-gray-200 rounded dark:border-gray-700">
                                            <TextInput checked id="bordered-radio-2" type="radio" value="" name="bordered-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                            <label for="bordered-radio-2" className="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Siang</label>
                                        </div>
                                        <div className="flex items-center h-14 px-3 border border-gray-200 rounded dark:border-gray-700">
                                            <TextInput checked id="bordered-radio-2" type="radio" value="" name="bordered-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                            <label for="bordered-radio-2" className="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Malam</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <InputLabel htmlFor="" value="Porsi Makan" />

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
