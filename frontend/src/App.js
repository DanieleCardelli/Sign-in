import React, {Component} from "react";
import './App.css';
import Axios from "axios";

class App extends Component {
  constructor(){
      super()
      this.state = {
          fullName:"",
          username:"",
          email:"",
          password:""
      }
      this.changeFullName = this.changeFullName.bind(this)
      this.changeUsername = this.changeUsername.bind(this)
      this.changeEmail = this.changeEmail.bind(this)
      this.changePassword = this.changePassword.bind(this)
  }
/*le funzioni "change-qualcosa" tramite "setState" modificano il valore di "state" (riga 7) che sono settate vuote. 
  cambiando value in input, triggero "onChange" che (attivando la relativa funzione) aggiornerà il valore di "state" */

  changeFullName(event){
      this.setState({
          fullName:event.target.value
      })
  }
  changeUsername(event){
      this.setState({
          username:event.target.value
      })
  }
  changeEmail(event){
      this.setState({
          email:event.target.value
      })
  }
  changePassword(event){
      this.setState({
          password:event.target.value
      })
  }

  onSubmit() {
      // leggerti lo state 
      console.log(this.state)

      // axios POST (url / endpoint del tuo backend), con body  = this.state
      Axios.post("http://localhost:4000/sign-up", this.state).then((res) => {
        console.log(res);
      }).catch((err) => {
        console.error(err)
      })
   }
   
  render() {
      return (
              <div className="container">
                  <div className="form-div">
                      <form>
                          <p><input type = "text"
                          placeholder = "Full Name"
                          onChange = {this.changeFullName}
                          value = {this.state.fullName}
                          className = "form-control form-group"/></p>

                          <p><input type = "text"
                          placeholder = "Username"
                          onChange = {this.changeUsername}
                          value = {this.state.Username}
                          className = "form-control form-group"/></p>

                          <p><input type = "text"
                          placeholder = "email"
                          onChange = {this.changeEmail}
                          value = {this.state.email}
                          className = "form-control form-group"/></p>

                          <p><input type = "password"
                          placeholder = "Password"
                          onChange = {this.changePassword}
                          value = {this.state.password}
                          className = "form-control form-group"/></p>

                          <button className="btn btn-danger btn-block" onClick={(e) => { e.preventDefault(); this.onSubmit() } }>Log in</button>
                      </form>
                  </div>
              </div>
      )
  }
}

export default App;
