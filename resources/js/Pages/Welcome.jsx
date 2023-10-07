import PrimaryButton from '@/Components/PrimaryButton';
import { Transition } from '@headlessui/react';
import { Link, Head } from '@inertiajs/react';

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const heroimg = `${window.location.pathname}storage/assets/img/heroimg.svg`
    
    return (
        <>
            <Head title="Welcome" />
            <div className="relative sm:flex sm:justify-center sm:items-center min-h-screen bg-dots-darker bg-center bg-gray-100 dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white">
               <div className="content">
                <div className="hero">
                    <img src={heroimg} alt="" />
                </div>
                <div className="title text-center">
                    <h1 className='text-5xl'><span className="font-bold">Diabete</span>Track</h1>
                    
                    <div className="flex items-center gap-4">
                </div>

                <Link
                href={route('login')}>
                    <PrimaryButton className='mt-8'>Sign In</PrimaryButton>
                </Link>

                <div className="decs mt-20 text-2xl">
                    <p>
                    With DiabeteTrack you can keep an eye on your <br/>
                    blood sugar, organize treatments and maintain <br />
                    communication with your doctor with ease
                    </p>
                </div>

                </div>
               </div>
               

            </div>

           
        </>
    );
}
