import "./navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import profile from "../../assets/listed.png";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <h2 className="title">Dashboard</h2>
        <div className="items">
          <div className="search">
            <input type="text" placeholder="Search..." className="input" />
            <SearchOutlinedIcon className="icon" />
          </div>

          <div className="item">
            <NotificationsNoneOutlinedIcon />
          </div>
          <div className="item">
            <img src={profile} alt="" className="profile" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
