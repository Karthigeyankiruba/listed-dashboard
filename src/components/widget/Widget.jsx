import "./widget.scss";
import LocalAtmOutlinedIcon from "@mui/icons-material/LocalAtmOutlined";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";

const Widget = ({ type }) => {
  let data;

  switch (type) {
    case "revenues":
      data = {
        title: "Total Revenues",
        amount: "$2,129,430",
        backgroundColor: "#DDEFE0",
        icon: <LocalAtmOutlinedIcon className="icon" />,
      };
      break;
    case "transactions":
      data = {
        title: "Total Transactions",
        amount: "1,520",
        backgroundColor: "#F4ECDD",
        icon: <LocalOfferOutlinedIcon className="icon" />,
      };
      break;
    case "likes":
      data = {
        title: "Total Likes",
        amount: "9,721",
        backgroundColor: "#EFDADA",
        icon: <ThumbUpAltOutlinedIcon className="icon" />,
      };
      break;
    case "users":
      data = {
        title: "Total Users",
        amount: "9,721",
        backgroundColor: "#DEE0EF",
        icon: <PeopleAltOutlinedIcon className="icon" />,
      };
      break;
    default:
      break;
  }
  return (
    <div
      className="widget"
      style={{
        backgroundColor: data.backgroundColor,
      }}
    >
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="amount">{data.amount}</span>
      </div>
      <div className="right">{data.icon}</div>
    </div>
  );
};

export default Widget;
