import { useState, useRef } from "react";
import "./App.css";
import Child from  "./Child.jsx";

function App() {

  const [message, setMessage] = useState("Initial Message");

  const firstName = useRef("");
  const lastName = useRef("");
  const email = useRef("");
  const [usersList, setUsersList] = useState([]);



  //const handleInputValue = (inputName, e)=>{
    //setUser({...user, [inputName]: e.target.value});
 // }


  const submitHandler = (e) => {
    e.preventDefault();
    const newUser = {
      firstName: firstName.current.value,
      lastName: lastName.current.value,
      email: email.current.value,
    };
    setUsersList((prev) => {
      return [...prev, newUser];
    });
    //setUser({firstName: "", lastName: "", email: ""});
    console.log(newUser);
  };
  console.log(firstName.current.value);

  return (
    <>
        <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Enter your firstname"
          name="firstName"
          ref={firstName}
        />
        <input
          type="text"
          placeholder="Enter your lastname"
          name="lastName"
          ref={lastName}
        />
        <input
          type="email"
          placeholder="Enter your email"
          name="email"
          ref={email}
        />
        <button>Submit</button>
      </form>

      <p>{message}</p>
      <Child updateMessage={setMessage}></Child>
    </>
  );
}

export default App;
