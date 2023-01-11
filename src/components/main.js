import { useDispatch, useSelector } from "react-redux";

export default function Layout() {
  const dispatch = useDispatch()
  const users = useSelector((state) => state.users.regularUsers)

  let usersElList = users.map((user,idx) =>  {
    return(
      <div className="user" data-id={user.id} key={idx}>{user.name} {user.lastname}</div>
    )
  })
  
  function removeUser(e) {
    const id = e.target.dataset.id
    dispatch({type: 'REMOVE_USER', payload: id})
  }

  function addUser(name, lastname) {
    dispatch({type: 'ADD_USER', payload:[...users, {name: name, lastname: lastname}]})
  }

  // let znachenie1 = document.getElementById('input1').value
  // let znachenie2 = document.getElementById('input2').value

    return(
        <div className="Main">
            <main>
              <div className="createAcc">
                <input id="input1"/>
                <input id="input2"/>
                <button >Create</button>
                <p className="pcreate">CREATE ACCOUNT</p>
              </div>
              <div className="accList">
                {usersElList}
                {/* <button onClick={(e) => {removeUser(e)}}>Remove</button> */}
              </div>
            </main>
        </div>
        

    )
}