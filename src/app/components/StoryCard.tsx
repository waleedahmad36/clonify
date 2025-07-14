import {  LucideIcon } from "lucide-react"

type Props = {
  title:string;
  description:string;
  Icon:LucideIcon
}
const StoryCard = ({title,description,Icon}: Props) => {
  return (
    <div    className="w-full lg:w-fit p-4 bg-[#191919] drop-shadow-2xl rounded-lg lg:max-w-[250px] flex flex-col justify-center items-center gap-2 lg:block  "  >
        <Icon   className="text-3xl text-yellow-400 mb-4"  />
        <h4  className="text-xl font-bold shadow"  >{title}</h4>
        <p  className="text-sm"  >{description}</p>
    </div>
  )
}
export default StoryCard