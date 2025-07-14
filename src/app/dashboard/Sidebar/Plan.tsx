const  Plan = () => {
  return (
    <div   className="flex sticky top-[calc(100vh_-_48px_-16px)] flex-col h-12 border-t px-2 border-stone-800 justify-end text-xs"  >
        <div  className="flex items-center justify-between"  >
            <div>
                <p  className="font-bold" >Enterprice</p>
                <p  className="text-stone-200" >Pay as you go</p>
            </div>

            <button className="px-2 py-1.5 font-medium bg-stone-900 hover:bg-stone-800 transition-colors rounded"  >Support</button>
        </div>
    </div>
  )
}
export default Plan