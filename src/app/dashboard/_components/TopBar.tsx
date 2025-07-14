import { Calendar } from "lucide-react"

const TopBar = () => {
  return (
    <div  className="border-b px-4 mb-4 mt-2 pb-4 border-stone-800" >
        <div  className="flex flex-col lg:flex-row  lg:items-center justify-between p-0.5" >

            <div>
                <span  className="text-sm font-bold block" >✈️ Good morning, Waleed!</span>
                <span  className="text-xs block text-stone-200"  >Tuesday, Aug 8th 2023</span>
            </div>

            <button  className="flex text-sm items-center gap-2 bg-stone-700 transition-colors hover:bg-yellow-100  hover:text-yellow-800 px-3 py-1.5 rounded mt-5 lg:mt-0" >
              <Calendar/>
              <span>Prev 6 Months</span>
            </button>
        </div>
    </div>
  )
}
export default TopBar