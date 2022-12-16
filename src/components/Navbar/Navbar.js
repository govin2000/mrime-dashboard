import "./Navbar.css";
import group from "../../assets/group.svg";
import ellipse47 from "../../assets/ellipse47.svg";
const Navbar = (props) => {
  return (
    <div className={`navbar ${props.className || ""}`}>
      <div className="rectangle-1396-1">
        <img className="group-1" src={props.group || group} />
        <span className="dashboard-1">{props.dashboard || "Dashboard"}</span>
        <span className="reports-1">{props.reports || "Reports"}</span>
        <span className="neuropsychology-1">
          {props.neuropsychology || "Neuropsychology"}
        </span>
        <span className="neuroradiology-1">
          {props.neuroradiology || "Neuroradiology"}
        </span>
        <span className="bookings-1">{props.bookings || "Bookings"}</span>
        <img className="ellipse-47-1" src={props.ellipse47 || ellipse47} />
      </div>
    </div>
  );
};
export default Navbar;
