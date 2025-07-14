"use client"
import { MessageCircleCode } from "lucide-react"
import FaqAccordion from "./FaqAccordian"

const Problems = () => {
  return (
    <div   className="flex w-full max-w-6xl mx-auto flex-col lg:flex-row my-20" >
        {/* left side  */}
        <div  className="w-full lg:flex-1"  >
            <FaqAccordion/>
        </div>

        {/* right side  */}
        <div  className="w-full lg:w-[300px] h-full bg-stone-950 rounded-xl flex flex-col items-center px-8 py-8 lg:border border-stone-600 mt-10 lg:mt-0"   >
           <div  className="p-2 w-fit bg-yellow-400 rounded-full"  >
             <MessageCircleCode  className="w-10 h-10" />
           </div>
           <h3 className="text-3xl font-bold text-balance mt-3">Can&apos;t find answer to your question?
</h3>
<p className="mt-5 text-stone-400">Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur aliquet quam id dui posuere blandit. Nulla quis lorem ut libero malesuada feugiat.</p>

<button  className="px-4 py-2 rounded-2xl bg-yellow-400 mt-4"  >Contact Us</button>
        </div>
    </div>
  )
}
export default Problems