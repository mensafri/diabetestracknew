import { useEffect } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import { Transition } from '@headlessui/react';
import Uploader from '@/Components/Uploader';

export default function RegisterPerawat({ list_dokter }) {
    const { data, setData, post, processing, errors, reset, recentlySuccessful } = useForm({
        full_name: '',
        username: '',
        role: 'Pasien',
        id_dokter: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('perawat.create'));
    };

    return (
        <>
            <div className="bg-gray-100 w-1/2 py-10 px-10 rounded-md">
                <h3 className="text-xl font-semibold text-center mb-10">Create Account</h3>
                <form onSubmit={submit}>
                    <div>
                        <InputLabel htmlFor="full_name" value="Full Name" />

                        <TextInput
                            id="full_name"
                            name="full_name"
                            value={data.full_name}
                            className="mt-1 block w-full"
                            autoComplete="full_name"
                            isFocused={true}
                            onChange={(e) => setData('full_name', e.target.value)}
                            required
                        />

                        <InputError message={errors.full_name} className="mt-2" />
                    </div>
                    <div className="mt-4">
                        <Uploader/>
                    </div>

                    <div className="mt-4">
                        <InputLabel htmlFor="username" value="No Rekam Medis" />

                        <TextInput
                            id="username"
                            name="username"
                            value={data.username}
                            className="mt-1 block w-full"
                            autoComplete="username"
                            isFocused={true}
                            onChange={(e) => setData('username', e.target.value)}
                            required
                        />

                        <InputError message={errors.username} className="mt-2" />
                    </div>

                    <div className="mt-4">
                        <InputLabel htmlFor="id_dokter" value="Pilih Nama Dokter" />
                        <select
                            id="id_dokter"
                            name="id_dokter"
                            className="mt-1 block w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
                            onChange={(e) => setData('id_dokter', e.target.value)}
                            required
                        >
                            {list_dokter.map((dokter) => <option value={dokter.id} key={dokter.id}>{dokter.nama}</option>)}
                        </select>
                        <InputError message={errors.id_dokter} className="mt-2" />
                    </div>

                    <div className="mt-4">
                        <InputLabel htmlFor="email" value="Email" />

                        <TextInput
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            className="mt-1 block w-full"
                            autoComplete="username"
                            onChange={(e) => setData('email', e.target.value)}
                            required
                        />

                        <InputError message={errors.email} className="mt-2" />
                    </div>

                    <div className="mt-4">
                        <InputLabel htmlFor="password" value="Password" />

                        <TextInput
                            id="password"
                            type="password"
                            name="password"
                            value={data.password}
                            className="mt-1 block w-full"
                            autoComplete="new-password"
                            onChange={(e) => setData('password', e.target.value)}
                            required
                        />

                        <InputError message={errors.password} className="mt-2" />
                    </div>


                    <div className="mt-4">
                        <InputLabel htmlFor="password_confirmation" value="Confirm Password" />

                        <TextInput
                            id="password_confirmation"
                            type="password"
                            name="password_confirmation"
                            value={data.password_confirmation}
                            className="mt-1 block w-full"
                            autoComplete="new-password"
                            onChange={(e) => setData('password_confirmation', e.target.value)}
                            required
                        />

                        <InputError message={errors.password_confirmation} className="mt-2" />
                    </div>

                    <div className="flex items-center justify-end mt-10">
                        <Link
                            href={route('login')}
                            className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >

                        </Link>

                        <PrimaryButton className="ml-4" disabled={processing}>
                            Add User
                        </PrimaryButton>
                    </div>
                    <Transition
                        show={recentlySuccessful}
                        enter="transition ease-in-out"
                        enterFrom="opacity-0"
                        leave="transition ease-in-out"
                        leaveTo="opacity-0"
                    >
                        <p className="text-sm text-gray-600">Akun Pasien Berhasil Dibuat.</p>
                    </Transition>
                </form>
            </div>

        </>
    );
}
