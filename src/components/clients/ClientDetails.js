import React, { Component } from "react";
import { Link } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import PropTypes from "prop-types";
import Spinner from "../layouts/Spinner";

class ClientDetails extends Component {
    
    render() {
        const {client} = this.props;
        if(client)
        {
            return (
                <div>
                    <h1>{client.firstName}</h1>
                </div>
            );
        }
        
    }
}
//getting data from clients
//Here we dont need any customized Redux Events to fetch data
//collection -- which is client created  a database table in Firebase
//Below process is to get Single Client Detail
//  storeAs(Single Client Data) : When we fetch data from Clients Database existing Data be there
// : Rewrite the excat Reason ????
// doc : Get Id from URL
// Adding props : The reason is we are this because we wanted ID
export default compose(
    firestoreConnect(props => [
        {collection: 'clients' , storeAs : 'client' , doc:props.match.params.id}
    ]),
    connect(({firestore:{ordered}}, props) => ({
      client: ordered.client &&  ordered.client[0]
      //ordered.client[0] this is gonna be array -- we wanted first
    }))
  )(ClientDetails);