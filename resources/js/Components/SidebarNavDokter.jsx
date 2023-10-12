import { Link } from "@inertiajs/react";


const navigation = [
  {name: 'List Pasien', href: '/dokter'},
];

export default function SidebarNavDokter() {
  return (
    <>
      <div className="bg-white w-1/6 min-h-screen">
          <div className="menu flex flex-col ">

          {navigation.map((item) => (
          <div key={item.name}
              className={`py-4 px-3 
                ${window.location.pathname === item.href 
                ? 'bg-gray-200' 
                : 'bg-white hover:bg-gray-200'}`}
            >
            <Link
              key={item.name}
              href={item.href}
              
            >
              {item.name}
            </Link>
          </div>
        ))}
          </div>
      </div>
    </>
  )
}
