import { DollarSign, Home, Link2, LucideIcon, Paperclip, Users } from "lucide-react"
import Link from "next/link"

const RouteSelect = () => {
  return (
    <div   className="space-y-1" >
      <Route
        selected={true}
        Icon={Home}
        title="Dashboard"
        />
        <Route
        selected={false}
        Icon={Users}
        title="Team"
        />
        <Route
        selected={false}
        Icon={Paperclip}
        title="Invoices"
        />
        <Route
        selected={false}
        Icon={Link2}
        title="Integrations"
        />
        <Route
        selected={false}
        Icon={DollarSign}
        title="Finances"
        />

    </div>
  )
}
export default RouteSelect


const Route = ({
    selected,
    Icon,
    title
}: {
    selected:boolean;
    Icon:LucideIcon;
    title:string;
})=> {
    return <Link  href=''
    className={`flex items-center justify-start gap-2 w-full rounded py-2 text-sm transition-[box-shadow,_background-color,_color] ${
        selected ? 
        'bg-stone-900 text-white shadow' :
        'hover:bg-stone-800 bg-transparent text-stone-200 shadow-none'
        }`}
    >
        <Icon    className={`${
            selected ? "text-yellow-400" : ""
            }`}  />
        <span>{title}</span>
    </Link>
}