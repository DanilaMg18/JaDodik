import { useDispatch, useSelector } from "react-redux";

export default function Layout() {

  const users = useSelector((state) => state.users.regularUsers)

  let usersElList = users.map((user,idx) =>  {
    return(
      <div className="user" key={idx}>{user.name} {user.lastname}</div>
    )
  })

    return(
        <div className="Main">
            <main>
              <div className="createAcc">
                <input/>
                <input/>
                <button>Create</button>
                <p className="pcreate">CREATE ACCOUNT</p>
              </div>
              <div className="accList">
                {usersElList}
              </div>
            </main>
        </div>
        

    )
}