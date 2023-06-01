import React from "react";
import './css/LoginPage.css';
import { Link } from "react-router-dom";
export default function LoginPage(){
    return(
        
            <div className="containerL">
	<div className="screen">
		<div className="screen__content">
			<form className="login">
				<div className="login__field">
					<i className="login__icon fas fa-user"></i>
					<input type="text" className="login__input" placeholder="User name / Email" />
				</div>
				<div className="login__field">
					<i className="login__icon fas fa-lock"></i>
					<input type="password" className="login__input" placeholder="Password" />
				</div>
				<button className="button login__submit">
					<span className="button__text">Log In Now</span>
					<i className="button__icon fas fa-chevron-right"></i>
				</button>	
				<p className="RegisterReq">new to MATALAN ?  <Link to="/Register" className="linkReg">Register here</Link></p>			
			</form>
			
		</div>
		<div className="screen__background">
			<span className="screen__background__shape screen__background__shape4"></span>
			<span className="screen__background__shape screen__background__shape3"></span>		
			<span className="screen__background__shape screen__background__shape2"></span>
			<span className="screen__background__shape screen__background__shape1"></span>
		</div>		
	</div>
</div>
        
    )
}