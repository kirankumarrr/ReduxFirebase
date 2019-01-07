import React, { Component } from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import PropTypes from "prop-types";

class AddClients extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    balance: ""
  };
  onSubmit = e => {
    e.preventDefault();
    //Input details are availble in state
    const newClient = this.state;

    const { firestore, history } = this.props;
    //firestore has few bunch of methods
    //	firestore.add() --> gonna take object with collection
    //collection -- which is client created  a database table in Firebase

    //if no balance make zero
    if (newClient.balance === "") {
      newClient.balance = 0;
    }

    //firestore.add({collection: 'clients'}, newClient);
    //after this code its gonna get promise
    firestore
      .add({ collection: "clients" }, newClient)
      .then(() => history.push("/"));
  };

  //When Arrow  function is used: no need to bind(this)
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    const { firstName, lastName, email, phone, balance } = this.state;
    const { disableBalanceOnAdd } = this.props.settings;
    console.log(disableBalanceOnAdd);
    return (
      <div>
        <div className="row">
          <div className="col-md-6">
            <Link to="/" className="btn btn-link">
              <i className="fas fa-arrow-circle-left" /> Back to Dashboard
            </Link>
          </div>
        </div>
        <div className="card">
          <div className="card-header">Add Client</div>
          <div className="card-body">
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input
                  className="form-control"
                  type="text"
                  name="firstName"
                  onChange={this.onChange}
                  minLength="2"
                  required
                  value={firstName}
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input
                  className="form-control"
                  type="text"
                  name="lastName"
                  onChange={this.onChange}
                  minLength="2"
                  required
                  value={lastName}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  className="form-control"
                  type="email"
                  name="email"
                  onChange={this.onChange}
                  minLength="2"
                  required
                  value={email}
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  className="form-control"
                  type="number"
                  name="phone"
                  onChange={this.onChange}
                  minLength="2"
                  required
                  value={phone}
                />
              </div>

              <div className="form-group">
                <label htmlFor="balance">Balance</label>
                <input
                  className="form-control"
                  type="text"
                  name="balance"
                  onChange={this.onChange}
                  value={balance}
                  disabled={disableBalanceOnAdd}
                />
              </div>
              <input
                type="submit"
                value="Submit"
                className="btn btn-primary btn-block"
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default compose(
  firestoreConnect(),
  connect((state, props) => ({
    settings: state.settings
  }))
)(AddClients);
