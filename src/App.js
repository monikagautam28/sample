import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { useEffect, useState } from "react";
const userData = [
  { name: "monika" },
  { name: "kirti" },
  { name: "shalini" },
  { name: "gitu" },
];

function App() {
  const [user, setUsers] = useState([]);

  useEffect(() => {
    setUsers(userData);
  }, []);

  const handleChange = (e) => {
    const { name, checked } = e.target;
    if (name === "allselect") {
      let tempUser = user.map((user,i) => {
        return { ...user, ischecked: checked };
      });

      setUsers(tempUser);
    } else {
      let tempUser = user.map((user,i) =>
        user.name === name ? { ...user, ischecked: checked } : user
      );
      setUsers(tempUser);
    }
  };

const deletefunction = (e)=>{
console.log(e)


}
  const deleteItem =()=>{

let tempUser = user.filter((item)=>{ return item.ischecked !== true})
console.log(tempUser)
tempUser.forEach((e)=>{
  deletefunction(e)
})

setUsers(tempUser)

  }
  return (
    <div className="container my-4" style={{ width: 400 }}>
      <div className="form">
        <h3>selectusers</h3>
        <div className="form-check">
          <input
            type="checkbox"
            classname="form-check-input"
            name="allselect"
            checked={user.filter((user)=>user?.ischecked !== true).length<1}
            onChange={handleChange}
          />
          <label className="form-check-label ms-2">All select</label>
        </div>
        {user.map((user) => (
          <div className="form-check">
            <input
              type="checkbox"
              classname="form-check-input"
              onChange={handleChange}
              checked={user?.ischecked || false}
              name={user.name}
            />
            <label className="form-check-label ms-2"> {user.name}</label>
          </div>
        ))}
      </div>
      <button onClick={deleteItem}>delete</button>
    </div>
  );
}

export default App;

