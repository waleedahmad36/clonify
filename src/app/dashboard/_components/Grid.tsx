import ActivityGraph from "./ActivityGraph"
import ComposedChart from "./ComposedChart"
import RecentTransactions from "./RecentTransactions"
import StatCards from "./StatCards"

const Grid = () => {
  return (
    <div   className="px-1 lg:px-4 grid gap-3 grid-cols-12 "  >
        <StatCards/> 
        <ActivityGraph/>
        <ComposedChart/>
        <RecentTransactions/>
    </div>
  )
}
export default Grid