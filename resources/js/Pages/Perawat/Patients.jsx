import TextInput from "@/Components/TextInput";

export default function Patients() {
    const searchIcon = `${window.location.pathname}storage/assets/img/search.svg`

    console.log(searchIcon)
  return (
    <>
        <div className="bg-white w-5/6 rounded-md py-10 px-10">
            <div className="search-bar flex flex-col justify-between  md:flex lg:flex-row ">
                <div className="pt-2 relative  text-gray-600">
                    <TextInput className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-2xl text-sm focus:outline-none"type="search" name="search" placeholder="Search"/>
                    <img src={searchIcon} alt=""/>
                </div>
                <div className="pt-2 relative  text-gray-600">
                    <TextInput className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-2xl text-sm focus:outline-none"type="search" name="search" placeholder="Search"/>
                    <img src={searchIcon} alt=""/>
                </div>

            </div>
 
        </div>
    </>
  )
}
