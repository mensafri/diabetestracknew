import PrimaryButton from '@/Components/PrimaryButton';
import Header from '@/Components/header';
import { Transition } from '@headlessui/react';
import { Link, Head } from '@inertiajs/react';

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const heroimg = `${window.location.pathname}storage/assets/img/heroimg.png`
    
    return (
        <>
            <Head title="Welcome" />
            <Header/>
            <div className="relative flex justify-center items-center min-h-screen bg-dots-darker bg-center dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white">
               <div className="header">
               </div>
               <div className="content">
                    <div className="hero flex justify-center">
                        <img className="w-3/5 sm:w-4/5 mt-10" src={heroimg} alt="" />     
                    </div>     
                    
                    <div className="text-center">
                        <h1 className=' text-md sm:text-3xl mt-6 font-semibold'>TISSHV Smart Health Care <br/> Mentoring System</h1>
                        <Link
                        href={route('login')}>
                            <PrimaryButton className='mt-4 sm:mt-8'>Sign In</PrimaryButton>
                        </Link>

                        <div className="decs mt-14 sm:mt-20 text-xs sm:text-xl mb-10">
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
