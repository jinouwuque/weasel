import { FC } from "react";
import ActivityChkboxGroup from "../ActivityChkboxGroup";

interface NavProps {
  allData: any;
  selected: any;
}

const Nav: FC<NavProps> = ({ allData, selected }) => {
  return (
    <form className="nav-form" action="/">
      <ActivityChkboxGroup allData={allData} selected={selected} />
      <div>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input type="submit" value="Filter" />
      </div>
      <br />
    </form>
  );
};

export default Nav;