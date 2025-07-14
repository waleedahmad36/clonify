import { LucideIcon } from "lucide-react"

type Props = {
    count:number;
    Icon:LucideIcon;
    title:string;
    description:string;
    btnText?:string[]
}
const FeatureCard = ({
    count,
    Icon,
    title,
    description,
    btnText
}: Props) => {
  return (
    <div   className="w-[320px] h-fit py-8 rounded-2xl bg-[#191919] relative overflow-hidden group flex flex-col justify-center " >
        <div  className="w-0 bg-yellow-400 h-[2px] absolute top-0 group-hover:w-full transition-all duration-300" />

        <p  className="absolute text-5xl font-bold shadow-2xl text-yellow-400 top-4 right-4 opacity-20 group-hover:opacity-30"  >
            0{count}
        </p>

        <div   className="bg-yellow-400 p-2 rounded-xl w-fit mb-10 ml-5  drop-shadow-[0_0_6px_#facc15] group-hover:drop-shadow-[0_0_12px_#facc15]  group-hover:rotate-6 transition-all duration-300" >
            <Icon   className="w-16 h-16" />
        </div>
        <h3   className="text-2xl font-bold shadow ml-5 mr-5" >{title}</h3>
        <p  className="text-sm mx-5 mt-3 text-stone-300" >{description}</p>

      {
        btnText &&   <div  className="flex text-xs gap-4 ml-5 mt-5 font-semibold" >
            { 
                btnText.map((text, index) => (
                    <button key={index} className="bg-yellow-600/30 px-4 py-2 rounded-full group-hover:bg-yellow-400 transition-all duration-300" >
                        {text}
                    </button>
                ))
            }      
        </div>
      }

    </div>
  )
}
export default FeatureCard