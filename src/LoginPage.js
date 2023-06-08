import React from "react";
import './css/LoginPage.css';
import { Link } from "react-router-dom";
import axios from "axios";
export default function LoginPage(){

	const [state , setState] = React.useState({
		"email": "" ,
		"password":""
	})

	const SaveData= (e) => { 
        const {name , value }= e.target
        
        setState((old) => { 
            return {...old , [name]:value}
         })
     }

	const checklogin =(e) => {
		e.preventDefault()
		let data= new FormData()
		data.append("method" , "register")
		data.append("email" , state.email)
		data.append("password" , state.password)
		data.append('token' , localStorage.getItem("token"))

axios.post(`http://localhost:8000/api/login/`, data)
    .then((response) => { console.log(response) })
    
    .catch((error) => console.log(error))
	
    // window.location.href="http://localhost:3000/profile"
	}
	

    return(
        
            <div className="containerL">
	<div className="screen">
		<div className="screen__content">
			<form className="login" onSubmit={(e) => {checklogin(e)}}>
				<div className="login__field">
					<i className="login__icon fas fa-user"></i>
					<input type="text" name="email" value={state.email} onChange={(e) =>SaveData(e)}
					 className="login__input" placeholder="User name / Email" />
				</div>
				<div className="login__field">
					<i className="login__icon fas fa-lock"></i>
					<input type="password" name="password" value={state.password} onChange={(e) =>SaveData(e)} className="login__input" placeholder="Password" />
				</div>
				<button type="submit" className="button login__submit">
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
