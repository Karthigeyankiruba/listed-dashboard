import "./schedule.scss";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
const Schedule = () => {
  return (
    <div className="schedule">
      <div className="top">
        <h3>Today’s schedule</h3>
        <div className="date">
          <span>See All</span>
          <KeyboardArrowRightIcon />
        </div>
      </div>
      <div className="bottom">
        <div className="item">
          <div className="line" style={{ backgroundColor: "#9BDD7C" }}></div>
          <div className="content">
            <p>Meeting with suppliers from Kuta Bali</p>
            <span>14.00-15.00</span>
            <span>at Sunset Road, Kuta, Bali </span>
          </div>
        </div>
        <div className="item">
          <div className="line" style={{ backgroundColor: "#6972C3" }}></div>
          <div className="content">
            <p>Check operation at Giga Factory 1</p>
            <span>18.00-20.00</span>
            <span>at Central Jakarta </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
