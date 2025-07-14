import { Command } from 'cmdk'
import { Eye, Link, LogOut, Phone, Plus } from 'lucide-react';
import { Dispatch, SetStateAction, useEffect, useState } from 'react'

export const CommandMenu = ({
    open,setOpen
}:{
    open:boolean,
    setOpen:Dispatch<SetStateAction<boolean>>
}) => {

    const [value,setValue] = useState("");
  // Toggle the menu when ⌘K is pressed
  useEffect(() => {
    const down = (e:KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [])

  return (
    <Command.Dialog open={open} onOpenChange={setOpen} label="Global Command Menu"
    className='fixed inset-0 bg-stone-950/80'
    onClick={()=>setOpen(false)}
    >
     <div  onClick={(e)=>e.stopPropagation()} 
     className='bg-stone-950 rounded-lg shadow-xl border-stone-300 border overflow-hidden w-full max-w-lg mx-auto mt-12'
     >
         <Command.Input 
         placeholder='What do you need?'
         className='relative border-b border-stone-300 p-3 text-lg w-full placeholder::text-stone-500 focus:outline-none'
         value={value}
         onValueChange={setValue}
         />
      <Command.List   className='p-3' >
        <Command.Empty>
            No results found for {" "} <span className='text-stone-400'>{value}</span>
        </Command.Empty>

        <Command.Group
        heading="Team"  className='text-sm mb-3 text-stone-400'
        >
            <Command.Item  className='flex cursor-pointer transition-colors p-2 text-sm text-stone-600 hover:bg-stone-900 rounded items-center gap-2'  >
                <Plus/>
                Invite Member
            </Command.Item>
            <Command.Item  className='flex cursor-pointer transition-colors p-2 text-sm text-stone-600 hover:bg-stone-900 rounded items-center gap-2'  >
                <Eye/>
                See Org Chart
            </Command.Item>
        </Command.Group>

        <Command.Group
        heading="Integrations"  className='text-sm mb-3 text-stone-400'
        >
            <Command.Item  className='flex cursor-pointer transition-colors p-2 text-sm text-stone-600 hover:bg-stone-900 rounded items-center gap-2'  >
                <Link/>
                Link Services
            </Command.Item>
            <Command.Item  className='flex cursor-pointer transition-colors p-2 text-sm text-stone-600 hover:bg-stone-900 rounded items-center gap-2'  >
                <Phone/>
                Contact Support
            </Command.Item>
        </Command.Group>

        <Command.Item  className='flex cursor-pointer transition-colors p-2 text-sm text-stone-600 hover:bg-stone-900 rounded items-center gap-2'  >
                <LogOut/>
                Sign Out
            </Command.Item>
      </Command.List>
     </div>
    </Command.Dialog>
  )
}