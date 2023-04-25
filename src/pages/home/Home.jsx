import React from "react";
import "./home.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Widget from "../../components/widget/Widget";
import Chart from "../../components/chart/Chart";
import CircleChart from "../../components/piechart/CircleChart";
import Schedule from "../../components/schedule/Schedule";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="revenues" />
          <Widget type="transactions" />
          <Widget type="likes" />
          <Widget type="users" />
        </div>
        <div className="activities">
          <Chart />
        </div>
        <div className="features">
          <CircleChart />
          <Schedule />
        </div>
      </div>
    </div>
  );
};

export default Home;
