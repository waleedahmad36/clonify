import { TrendingDown, TrendingUp } from "lucide-react"

const StatCards = () => {
  return (
    <>
    <Cards   
    title="Gross Revenue" value="$1,290,073" pillText="2.3%" trend="up" period="From Feb 1st - Feb 31st" 
    />
    <Cards     title="Avg Order"  value="$27.97"   pillText="1.01%"   trend="down" period="From 1st May - May 31st"   />
    <Cards    title="Trailing Year"  value="$178,058.4"  pillText="60.75%" trend="down"  period="Previous 365 days"   />
    </>
  )
}
export default StatCards


const Cards = (
    {
        title,
        value,
        pillText,
        trend,
        period
    }:{
        title: string,
        value: string,
        pillText: string,
        trend: "up" | "down",
        period?: string
    }
)=> {
    return (
        <div  className="p-4 bg-black col-span-12 lg:col-span-4 rounded-lg shadow-2xl shrink-0" >
            <div className="flex mb-6 items-center justify-between">

                <div>
                    <h3  className="text-stone-100 mb-2 text-sm"  >{title}</h3>
                    <p className="text-2xl font-semibold">{value}</p>
                </div>

                <span  className={`text-xs flex items-center gap-1 font-medium px-2 py-1 rounded ${
                    trend === "up" ? 
                    'bg-green-100 text-green-700' : 
                    'bg-red-100 text-red-700'
                    }`}  >
                        {trend === "up" ?   <TrendingUp/> : <TrendingDown/>  }
                        {pillText}
                    </span>

            </div>
            <p className="text-xs text-stone-400"  >{period}</p>
        </div>
    )
}