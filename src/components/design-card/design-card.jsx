import Link from "next/link";

export default function DesignCardComponent(){
    return<>
        <div className="p-4 max-w-md">
            <div className="relative h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden flex">
                <div className="p-6">
                    <h1 className="title-font text-lg font-semibold text-[#1E293B] mb-3">
                        Slack Integration
                    </h1>
                    <p className="leading-relaxed mb-3 text-[#94A3B8] font-light">
                        Add a field in the portal to let the user connect their Slack account.
                    </p>
                    <div className="flex justify-between">
                        <span className="text-[#B771E5] bg-[#B771E51A] text-base cursor-pointer rounded-xl px-3 py-2 gap-2 inline-flex items-center md:mb-2 lg:mb-0">
                            Development
                        </span>
                        {/* <div className="bg-#F96666 w-20 h-20 rounded-full"></div> */}
                    </div>
                    <div className="flex items-center flex-wrap justify-between mt-5">
                        <Link href="#" className="text-[#F96666] text-base cursor-pointer border-[#F96666] border-1 rounded-xl px-3 py-2 gap-2 inline-flex items-center md:mb-2 lg:mb-0">
                            Not Stated
                            <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.28 5.98895L8.93333 10.3356C8.42 10.849 7.58 10.849 7.06667 10.3356L2.72 5.98895" stroke="#F96666" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </Link>
                        
                        <span className="text-gray-400 gap-2 inline-flex items-center leading-none text-sm">
                            <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.3218 11.4073L9.99681 10.0198C9.59181 9.77978 9.26181 9.20228 9.26181 8.72978V5.65479" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M3.53931 4.52228C2.60181 5.77478 2.03931 7.33478 2.03931 9.02228C2.03931 13.1623 5.39931 16.5223 9.53931 16.5223C13.6793 16.5223 17.0393 13.1623 17.0393 9.02228C17.0393 4.88228 13.6793 1.52228 9.53931 1.52228C8.46681 1.52228 7.43931 1.74728 6.51681 2.15978" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            Apr 13, 2025
                        </span>
                    </div>
                </div>

                <div className="absolute p-5 right-0">
                    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.16667 8.61835C3.25 8.61835 2.5 9.36835 2.5 10.285C2.5 11.2017 3.25 11.9517 4.16667 11.9517C5.08333 11.9517 5.83333 11.2017 5.83333 10.285C5.83333 9.36835 5.08333 8.61835 4.16667 8.61835Z" stroke="#94A3B8" strokeWidth="1.5"/>
                        <path d="M15.8333 8.61835C14.9167 8.61835 14.1667 9.36835 14.1667 10.285C14.1667 11.2017 14.9167 11.9517 15.8333 11.9517C16.75 11.9517 17.5 11.2017 17.5 10.285C17.5 9.36835 16.75 8.61835 15.8333 8.61835Z" stroke="#94A3B8" strokeWidth="1.5"/>
                        <path d="M8.33333 10.285C8.33333 11.2017 9.08333 11.9517 10 11.9517C10.9167 11.9517 11.6667 11.2017 11.6667 10.285C11.6667 9.36835 10.9167 8.61835 10 8.61835" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
                
            </div>
        </div>

    </>
}