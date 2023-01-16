import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../asyncaction.js/users";
import { deleteUser } from "../store/userReducer";
import { addNewUser } from "../store/userReducer";
import { useEffect, useState } from "react";

export default function Layout() {

  const dispatch = useDispatch()
  const users = useSelector((state) => state.users.regularUsers)
  const [newUser, setNewUser] = useState(users)

  let usersElList = users.map((user,idx) =>  {
    return(
      <div className="user" data-id={user.id} key={idx}>
        {user.name} {user.lastname}
        <button onClick={() => {removeUser(user)}}>Delete</button>
        <button>Edit</button>
        </div>
    )
  })

  function setChange(){
    dispatch({type: 'ADD_USER', payload: newUser})
  }

  function inputMemory(e) {
    setNewUser(prev => {
      return {...prev, name: e.target.value}
    })
  }

  function inputMemory2(e) {
    setNewUser(prev => {
      return {...prev, lastname: e.target.value}
    })
  }

  useEffect(() => {
    console.log(4, newUser)
  }, [newUser])

  function removeUser(u) {
    dispatch(deleteUser(u.id))
   }

  //  function addUser(name,lastname) {
  //   const newID = users.length + 1;
  //   const newUsers = [...users, {name: name, lastname: lastname, id: newID}];
  //   dispatch(addNewUser(newUsers))
  //  }

    return(
        <div className="Main">
            <main>
              <div className="createAcc">
                <input id="input1" onChange={(e) => {inputMemory(e)}}/>
                <input id="input2" onChange={(e) => {inputMemory2(e)}}/>
                <button type="button" onClick={setChange}>Create</button>
                <p className="pcreate">CREATE ACCOUNT</p>
              </div>
              <div className="accList">
                <div className="buttonandp">
                  <button className="Addmanyusers" onClick={() => {dispatch(fetchUsers())}}>OTDAI USEROV</button>
                  <p>click and add many users</p>
                </div>
                {
                users.length ?
                  usersElList:
                  <div>No users</div>

                }
              </div>
            </main>
        </div>
        

    )
}