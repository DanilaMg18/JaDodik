import React from "react"

export default function Login(props) {

      return(
        <div>
          <div className="Signup">
            <h1>SignUp faster!!!</h1>
          </div>
          <div className="Login">
              <input className="Input1" type='text' placeholder="Username" />
              <input className="Input2" type='password' placeholder="Password" />
              <button className="button-login" onChange={props.swap}>LOGIN</button>
          </div>
        </div>
      )
  }