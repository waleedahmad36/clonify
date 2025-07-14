import { ChevronDown, ChevronUp } from "lucide-react"

const AccountToggle = () => {
  return (
    <div  className="border-b mb-4 mt-2 pb-4 border-stone-800"  >
        <button   className="flex p-0.5 hover:bg-stone-800 rounded transition-colors relative gap-2 w-full items-center"  >
          {/* dicebear placeholder */}
          <img src="https://api.dicebear.com/9.x/notionists/svg" alt="avatar"    className="size-8 rounded shrink-0 bg-yellow-400 shadow"  />
          <div className="text-start">
            <span className="text-sm font-bold block">Waled webDev</span>
            <span className="text-xs block">
              waleed@gmail.com
              </span>
          </div>
          <ChevronDown   className="absolute right-2 top-1/2 translate-y-[calc(-50%+5px)] text-xs text-stone-700" />
          <ChevronUp   className="absolute right-2 top-1/2 translate-y-[calc(-50%-5px)] text-xs text-stone-700" />
        </button>
    </div>
  )
}
export default AccountToggle