import SidebarNavDokter from '@/Components/SidebarNavDokter';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

export default function Saran({auth}) {
  return (
    <>
        <AuthenticatedLayout user={auth.user}>
              <div className="bg-blue-300 flex">
                <SidebarNavDokter/>
                    <div className="mt-20 items-center w-full">
                        <div className=" flex justify-center">
                            <div className="w-5/6 rounded-md ">
                                <div className="bg-white py-5 px-5 sm:p-9 rounded-3xl">

                                  <form>
                                      <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
                                          <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
                                              <label for="comment" className="sr-only">Your comment</label>
                                              <textarea id="comment" rows="4" className="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder="Tambah Saran..." required></textarea>
                                          </div>
                                          <div className="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
                                              <button type="submit" className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
                                                  Tambah Saran
                                              </button>

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
