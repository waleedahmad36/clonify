import { ArrowUpRight, DollarSign, MoreHorizontal } from "lucide-react"
import Link from "next/link"

const RecentTransactions = () => {
  return (
    <div  className="col-span-12 p-4 rounded border overflow-x-scroll no-scrollbar border-stone-900"   >
        <div className="mb-4 flex items-center justify-between">
            <h3 className="flex items-center gap-1 5 font-medium">
                <DollarSign/>
                Recent Transactions
            </h3>
            <button  className="text-sm text-yellow-400 hover:underline" >See all</button>
        </div>

        <table className="w-full table-auto">
            <TableHead/>
            <tbody>
                <TableRow
                    customerId="C12345"
                    sku="SKU123"
                    date="2023-10-01"
                    price="$99.99"
                    order={1}
                />
                <TableRow   
                customerId="C67890"
                sku="SKU456"
                date="2023-10-02"
                price="$49.99"
                order={2}
                />
                <TableRow     
                customerId="C54321"
                sku="SKU789"
                date="2023-10-03"
                price="$19.99"
                order={3}
                />
                <TableRow
                customerId="C98765"
                sku="SKU012"
                date="2023-10-04"
                price="$29.99"
                order={4}
                />
                <TableRow  
                customerId="C11223"
                sku="SKU345"
                date="2023-10-05"
                price="$59.99"
                order={5}
                />
                <TableRow
                    customerId="C12345"
                    sku="SKU123"
                    date="2023-10-01"
                    price="$99.99"
                    order={1}
                />
                <TableRow   
                customerId="C67890"
                sku="SKU456"
                date="2023-10-02"
                price="$49.99"
                order={2}
                />
                <TableRow     
                customerId="C54321"
                sku="SKU789"
                date="2023-10-03"
                price="$19.99"
                order={3}
                />
            </tbody>
        </table>
    </div>
  )
}
export default RecentTransactions


const TableHead = () => {
    return (
       <thead>
        <tr className="text-sm font-normal text-stone-50">
            <th className="text-start p-1 5">Customer ID</th>
            <th className="text-start p-1 5">SKU</th>
            <th className="text-start p-1 5">Date</th>
            <th className="text-start p-1 5">Price</th>
            <th className="w-8"></th>
        </tr>
       </thead>
    )
}

const TableRow = (
    { 
        customerId = "C12345",
        sku = "SKU123",
         date = "2023-10-01",
         price = "$99.99",
        order } : {
        customerId: string,
        sku: string,
        date: string,
        price: string,
        order: number
    }
) => {
  return (
    <tr   className={`
        ${
        order%2 === 0 ? 'bg-stone-900 text-sm' : 'text-sm'
        }
        `}  >
            <td  className="p-1.5"  >
                <Link   href={'#'}   className="text-yellow-400 underline flex items-center gap-1"  >{customerId} <ArrowUpRight/></Link>
            </td>
            <td className="p-1.5"  >{sku}</td>
            <td className="p-1.5"  >{date}</td>
            <td className="p-1.5"  >{price}</td>
            <td className="w-8">
                <button  className={`${
                    order%2 === 0 ?
                    'hover:bg-stone-950' : 'hover:bg-stone-800'
                    } transition-colors grid place-content-center rounded text-sm size-8`}  >
                    <MoreHorizontal/>
                </button>
            </td>
        </tr>
  )
}