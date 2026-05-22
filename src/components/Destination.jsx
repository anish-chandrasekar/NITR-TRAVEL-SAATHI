export default function Destination() {
    return (
        <div className="min-h-screen bg-slate-45 py-5 flex flex-col justify-center m-5">
            <div className="grid grid-cols-2 justify-items-center sm:grid-cols-2 lg:grid-cols-4 px-10 gap-x-25 gap-y-3 sm:gap-6">
                <div>
                    <button className="cursor-pointer bg-white border border-slate-200 rounded-xl overflow-hidden p-3 shadow-sm hover:shadow-md transition-shadow h-45 w-45 sm:h-72 sm:w-72">
                        <img src="src/assets/airplane.jpeg" className="rounded h-7/8 w-full object-contain" alt="" />
                        <p className="">Airport</p> 
                    </button>   
                </div>
                <div>
                    <button className="cursor-pointer bg-white border border-slate-200 rounded-xl overflow-hidden p-3 shadow-sm hover:shadow-md transition-shadow h-45 w-45 sm:h-72 sm:w-72">
                        <img src="src/assets/railway.jpeg" className="rounded h-7/8 w-full object-contain" alt="" />
                        <p className="">Railway Station</p> 
                    </button>   
                </div>
                <div>
                    <button className="cursor-pointer bg-white border border-slate-200 rounded-xl overflow-hidden p-3 shadow-sm hover:shadow-md transition-shadow h-45 w-45 sm:h-72 sm:w-72">
                        <img src="src/assets/bus.jpeg" className="rounded h-7/8 w-full object-contain" alt="" />
                        <p className="">Bus Stand</p> 
                    </button>   
                </div>
                <div>
                    <button className="cursor-pointer bg-white border border-slate-200 rounded-xl overflow-hidden p-3 shadow-sm hover:shadow-md transition-shadow h-45 w-45 sm:h-72 sm:w-72">
                        <img src="src/assets/nit.jpeg" className="rounded h-7/8 w-full object-contain" alt="" />
                        <p className="">To NIT</p> 
                    </button>   
                </div>
            </div>
        </div>
    );
}