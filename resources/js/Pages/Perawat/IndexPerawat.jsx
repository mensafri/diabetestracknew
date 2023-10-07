
export default function IndexPerawat() {
  return (
    <>
        <AuthenticatedLayout
            user={auth.user}
        >
            <Head title="Dashboard" />

            <div className="bg-blue-300 flex">
               <div className="bg-white w-1/6 min-h-screen">
                    <div className="menu py-6 px-5 bg-gray-100">
                        Create Account
                    </div>
               </div>
               <div className=" bg-gray-100 mt-20 items-center py-8 py-8 w-1/2">
                    <div className="flex justify-center">
                        <RegisterAdmin/>
                    </div>
               </div>
               

            </div>
          


        </AuthenticatedLayout>
    </>
  )
}
