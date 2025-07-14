import {   MessageCircleCode, Quote, Star } from "lucide-react"
import Image from "next/image"

type Props = {
  image:string;
  name:string;
  position:string;
  description:string;
}
const TestimonialCard = ({
  image , name , position, description
}: Props) => {
  return (
    <div   className="  bg-stone-900 rounded-xl px w-fit flex flex-col justify-center items-center py-8  px-6  gap-3 border border-stone-800 max-w-xs   md:max-w-sm shrink-0 group hover:border-yellow-400"  >
        <div  className="w-[85] h-[85] border  border-yellow-400 rounded-full overflow-hidden relative "  >
            <Image   src={image}   alt=""   fill className="rounded-full"   />
        </div>
        <div   className="flex gap-0.5"  >
          <Star className="w-5 h-5 text-yellow-400 fill-yellow-300 group-hover:fill-yellow-400" />
          <Star className="w-5 h-5 text-yellow-400 fill-yellow-300 group-hover:fill-yellow-400" />
          <Star className="w-5 h-5 text-yellow-400 fill-yellow-300 group-hover:fill-yellow-400" />
          <Star className="w-5 h-5 text-yellow-400 fill-yellow-300 group-hover:fill-yellow-400" />
          <Star className="w-5 h-5 text-yellow-400 fill-yellow-300 group-hover:fill-yellow-400" />
        </div>

        <div className="flex items-start gap-2 text-xl italic text-white">
      {/* Start quote */}
      <Quote className="w-6 h-6 text-yellow-400 rotate-180" />

      {/* Quoted content */}
      <p className="text-gray-300">
        {description}
      </p>

      {/* End quote */}
      <Quote className="w-6 h-6 text-yellow-400" />
    </div>

    <h3   className="mt-10 font-bold"  >{name}</h3>
    <p className="text-stone-400">{position}</p>

    <div  className="flex justify-end w-full text-stone-400   group-hover:text-yellow-400 " >
      <MessageCircleCode/>
    </div>
    </div>
  )
}
export default TestimonialCard