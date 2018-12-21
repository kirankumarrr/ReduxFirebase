import React, { Component } from "react";
import {Link} from "react-router-dom"

class AddClients extends Component {
	state ={
		firstName : "",
		lastName : "",
		email : "",
		phone : "",
		balance : ""
	}
	//When Arrow  function is used: no need to bind(this)
	onChange= (e)=> {
		this.setState({
			[e.target.name] : e.target.value
		});
	}
	render(){
		const {firstName,lastName,email,phone,balance} = this.state
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
						<form>
							<div className="form-group">
								<label htmlFor="firstName">First Name</label>
								<input 
									className="form-control"
									type="text"
									name="firstName"
									onChange={this.onChange}
									minLength ="2"
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
									minLength ="2"
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
									minLength ="2"
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
									minLength ="2"
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
								/>
							</div>
							<input type="submit"
									value="Submit"
									className="btn btn-primary btn-block"/>

						</form>
					</div>
				</div>
			</div>
		);
	}
}

export default AddClients;