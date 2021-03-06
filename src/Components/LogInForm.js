import React from "react";
import ReactDOM from "react-dom";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

class App extends React.Component {
  render() {
    return <Container />;
  }
}

class Container extends React.Component {
  render() {
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col">
            <div className="card mx-auto">
              <div className="card-body">
                <h1
                  className="card-title"
                  style={{ borderBottom: "1px solid #efefef" }}
                >
                  Login
                </h1>
                <Form />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearForm = this.clearForm.bind(this);
  }
  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
  handleSubmit(event) {
    event.preventDefault(event);
    console.log(this.state);
  }
  clearForm() {
    this.setState({
      email: "",
      password: ""
    });
  }
  render() {
    return (
      <form
        className="needs-validation"
        noValidate
        onSubmit={this.handleSubmit}
      >
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            required
            placeholder="Enter email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <small id="emailHelp" className="form-text text-muted">
            We strongly adhere to privacy policies and will not share your details with third parties.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            id="exampleInputPassword1"
            required
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <button
          type="button"
          className="btn btn-secondary float-right"
          onClick={this.clearForm}
        >
          Cancel
        </button>
      </form>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

