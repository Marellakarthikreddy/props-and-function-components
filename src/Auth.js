import React from'react';
import "./App.css"
import firebase from './FirebaseConfig'
class Auth extends React.Component{
	state={
		mobile:"+91"
	}
	change=(e)=>{
		this.setState({
			mobile:e.target.value
		})
	}
	handle=()=>{
		var recaptcha=new firebase.auth.RecaptchaVerifier("recaptcha");
		let number=this.state.mobile;
		firebase.auth().signInWithPhoneNumber(number,recaptcha).then(function(e){
			let code=prompt("enter the otp");
			if(code==null)return;
			e.confirm(code).then(function(result){
				alert("Enter otp is true and you are the correct user");
				document.getElementById("recaptcha").innerHTML=""
			}).catch((error)=>{
				alert("you entered wrong otp,so please check for new otp");
				document.getElementById("recaptcha").innerHTML=""
			})
		})
	}
	render(){
		return(
		<center><div className="body">
		<p>hello</p>
		<input type="text"
		onChange={this.change} value={this.state.mobile}/>
		<div id="recaptcha"></div>
		<button onClick={this.handle}>submit</button>
		</div></center>
		)
	}
}
export default Auth;