import React from "react"
import { useNavigate} from "react-router-dom"


export default function Login() {
  const Navigate = useNavigate()
  const pageSwitcher = () => {Navigate('/')}

  

      return(
        <div>
          <div className="Signup">
            <h1>SignUp faster!!!</h1>
          </div>
          <div className="Login">
              <input className="Input1" type='text' placeholder="Username" />
              <input className="Input2" type='password' placeholder="Password" />
              <button className="button-login" onClick={pageSwitcher}>LOGIN</button>
          </div>
        </div>
      )
  }