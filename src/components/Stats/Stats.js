import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import '../../change.css';
import { Chart } from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { Pie } from "react-chartjs-2";
const labels = ["2017", "2018", "2019", "2020", "2021", "2022"];
const data = {
  labels: labels,
  datasets: [
    {
      label: "# of Projects funded",
      data: [12, 19, 3, 5, 2, 3],
      borderWidth: 1,
    },
  ],
};

const Button = {
  backgroundColor: "DarkGrey",
  color: "white",
  fontSize: "18px",
  marginTop: "10 px ",
  marginBottom: "10px",
};

function Stats() {
  return (
    <div className="container-fluid">
      <Header />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3 blog-sidebar">
            <div className="p-3">
              <h4>Filter</h4>
              <ol className="list-unstyled mb-0">
                <li>
                  <button
                    className="btn btn-outline-dark mt-2 mt-md-0 "
                    style={Button}
                  >
                    Programs
                  </button>
                </li>
                <li>
                  <button
                    className="btn btn-outline-dark mt-2 mt-md-0 "
                    style={Button}
                  >
                    Year
                  </button>
                </li>
                <li>
                  <button
                    className="btn btn-outline-dark mt-2 mt-md-0 "
                    style={Button}
                  >
                    Level
                  </button>
                </li>
              </ol>
            </div>
          </div>
          <div className="col-md-9">
            <div className="blog-post">
              <h4 className="blog-post-title" style={{ margin: "10px" }}>
                Research Topics
              </h4>
              <div className="container" style={{ marginTop: "40px" }}>
                <div className="row">
                  <div className="col-12">
                    <div className="card">
                      <Pie data={data} style={{ maxHeight: "600px" }}></Pie>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="container"
              style={{ marginTop: "10px", marginBottom: "20px" }}
            >
              <div className="row justify-content-center">
                <div className="col-12">
                  <div className="card">
                    <div
                      className="card-body"
                      style={{
                        width: "80%",
                        height: "80%",
                        justifyContent: "center",
                      }}
                    >
                      <Bar data={data} style={{ maxHeight: "900px" }}></Bar>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Stats;
