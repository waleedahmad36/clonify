import AccountToggle from "./AccountToggle";
import Plan from "./Plan";
import RouteSelect from "./RouteSelect";
import Search from "./Search";

const Sidebar = () => {
  return (
    <div className="">
      <div className=" lg:sticky top-4 h-fit lg:h-[calc(100vh-32px-48px)]">
        <AccountToggle />
        <Search />
        <RouteSelect />
      </div>

      <Plan />
    </div>
  );
};
export default Sidebar;
