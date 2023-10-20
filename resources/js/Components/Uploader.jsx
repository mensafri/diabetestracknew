import { useState } from "react"

export default function Uploader({ ...props }) {
    const [image, setImage] = useState(null)
    const [fileName, setFileName] = useState("No Selected FIle")
    return (
        <>
            <div className=" items-center justify-center sm:w-1/2">
                <label for="dropzone-file" className="flex flex-col items-center justify-center w-full  border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 ">
                    <input id="dropzone-file" type="file" class="hidden" accept='image/*'
                        {...props}
                        onChange={({ target: { files } }) => {
                            files[0] && setFileName(files[0].name)
                            if (files) {
                                setImage(URL.createObjectURL(files[0]))
                            }
                        }}
                    />
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        {image ?
                            <div className="h-auto">
                                <img src={image} alt={fileName} className="bg-cover" />
                            </div>
                            :
                            <div className="flex flex-col  items-center">
                                <svg class="w-8 h-8 mb-4 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                </svg>
                                <p className="mb-2 text-sm text-gray-500 "><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                <p className="text-xs text-gray-500 ">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                            </div>
                        }
                    </div>
                </label>
                <div className="bg-white py-2 px-3 mt-3">
                    {fileName}
                </div>
            </div>
        </>
    )
}
