import React, { Component } from "react";
import { Link } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import PropTypes from "prop-types";
import Spinner from "../layouts/Spinner";

class Clients extends Component {
  state = {
    totalOwed: null
  };
  //Component will receive props-->Since its gettings deprecated
  static getDerivedStateFromProps(props, state) {
    const { ClientsObj } = props;
    if (ClientsObj) {
      const totalSum = ClientsObj.reduce((total, Eachclient) => {
        return total + parseFloat(Eachclient.balance.toString());
      }, 0);
      //Check why 0 is placed over here
      return { totalOwed: totalSum };
    } else {
      return { totalOwed: "0" };
    }
  }

  render() {
    const { ClientsObj } = this.props;
    const { totalOwed } = this.state;
    if (ClientsObj) {
      return (
        <div>
          <div className="row">
            <div className="col-md-6">
              <h2>
                {" "}
                <i className="fas fa-users" /> Clients
              </h2>
            </div>
            {/*Here we are showing Total*/}
            <div className="col-md-6">
              <h5 className="text-right text-secondary">
                Total Owed{" "}
                <span className="text-primary">${parseFloat(totalOwed)}</span>
              </h5>
            </div>
          </div>
          {/*Creating Table to show Client's Data*/}
          <table className="table table-striped">
            <thead className="thead-inverse">
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Balance</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {/*Iterating Client's Data*/}
              {ClientsObj.map(client => (
                <tr key={client.id}>
                  <td>
                    {client.firstName} {client.lastName}
                  </td>
                  <td>{client.email}</td>
                  <td>${parseFloat(client.balance).toFixed(2)}</td>
                  <td>
                    <Link
                      to={`/Clients/${client.id}`}
                      className="btn btn-secondary btn-sm"
                    >
                      <i className="fas fa-arrow-circle-right" /> Details
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    } else {
      return <Spinner />;
    }
  }
}
Clients.propTypes = {
  firestore: PropTypes.object.isRequired,
  ClientsObj: PropTypes.array
};

//getting data from clients
//Here we dont need any customized Redux Events to fetch data
//collection -- which is client created  a database table in Firebase
export default compose(
  firestoreConnect([{ collection: "clients" }]),
  connect((state, props) => ({
    ClientsObj: state.firestore.ordered.clients
  }))
)(Clients);
