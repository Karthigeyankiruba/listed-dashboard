import "./sidebar.scss";
import PieChartOutlineIcon from "@mui/icons-material/PieChartOutline";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import InsertInvitationOutlinedIcon from "@mui/icons-material/InsertInvitationOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
          <span className="logo">Board.</span>
        </Link>
      </div>
      <div className="center">
        <ul>
          <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
            <li>
              <PieChartOutlineIcon className="icon" />
              <span>Dashboard</span>
            </li>
          </Link>
          <li>
            <LocalOfferOutlinedIcon />
            <span>Transactions</span>
          </li>
          <li>
            <InsertInvitationOutlinedIcon />
            <span>Schedules</span>
          </li>
          <Link
            to={"/users"}
            style={{ textDecoration: "none", color: "white" }}
          >
            <li>
              <AccountCircleOutlinedIcon />
              <span>Users</span>
            </li>
          </Link>
          <li>
            <SettingsOutlinedIcon />
            <span>Settings</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <p>Help</p>
        <p>Contact Us</p>
      </div>
    </div>
  );
};

export default Sidebar;
