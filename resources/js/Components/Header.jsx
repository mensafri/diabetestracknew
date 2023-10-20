

export default function Header() {
    const logo = `/storage/assets/img/logo.png`
  return (
    <>
        <div className="bg-gray-100 w-full h-14 py-3 sm:py-4 px-10 flex">
            <img className="" src={logo} alt="" />
            <h2 className=" self-center ml-3 font-semibold text-sm sm:text-md">TISSHV <span className="hidden sm:inline">Smart Health Care Mentoring System</span></h2>
        </div>
    </>
  )
}
