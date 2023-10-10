import { Link } from "@inertiajs/react";


const navigation = [
  {name: 'Create Account', href: route('perawat')},
];



export default function SidebarNav() {
  return (
    <>
      <div className="bg-white w-1/6 min-h-screen">
          <div className="menu py-4 px-5 ">

              {navigation.map((item) => (
                <Link 
                  key={item.name}
                  href={item.href}
                  className={({ isActive }) => {
                    return(
                      ' ' + 
                      (!isActive
                        ? 'bg-gray-100 hover:bg-cyan-900'
                        : ' ')
                    );
                    
                  }}
                >
                    {item.name}
                </Link>
              ))}
          </div>
      </div>
    </>
  )
}
