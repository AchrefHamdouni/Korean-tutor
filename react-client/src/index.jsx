import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import axios from "axios";
import Practice from "./components/Practice.jsx";
import PhraseList from "./components/PhraseList.jsx";
import data from "./sample_data.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "phrases",
      data: data,
      status: "Not yet",
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:3000/api/phrases")
      .then((response) =>
        this.setState({
          data: response.data.filter((e) => e.status !== "Got it")
        })
      )
      .catch((err) => {
        throw err;
      });
  }

  changeView(option) {
    this.setState({
      view: option,
    });
  }

  render() {
    return (
      <div>
        <div className="nav">
          <span className="logo">Korean Tutor</span>
          <span
            className={
              this.state.view === "phrases" ? "nav-selected" : "nav-unselected"
            }
            onClick={() => this.changeView("phrases")}
          >
            Phrase List
          </span>
          <span
            className={
              this.state.view === "practice" ? "nav-selected" : "nav-unselected"
            }
            onClick={() => this.changeView("practice")}
          >
            Practice
          </span>
        </div>

        <div className="main">
          {this.state.view === "phrases" ? (
            <PhraseList data={this.state.data} />
          ) : (
            <Practice data={this.state.data} />
          )}
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
