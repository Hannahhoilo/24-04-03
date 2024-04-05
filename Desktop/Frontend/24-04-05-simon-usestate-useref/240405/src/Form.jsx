import { useState } from "react"


export default function Form() {
	const [userList, setUserList] = useState([]);
	const [user, setUser] = useState({
		firstName: "",
		lastName: "",
		email: "",
	})

	const handleInputValue = (event, inputName) => {
		setUser((prev)=> ({
			...prev,
			[inputName]:event.target.value
		}))
	}

	const handleSubmit = (event)=> {
		event.preventDefault();
		setUserList((prev)=> [...prev, user])
		setUser({
			firstName: "",
			lastName: "",
			email: "",
		})
	}



	return (
		<>
		<form action="" onSubmit={handleSubmit} noValidate>
			<input value={user.firstName} onChange={(event)=>handleInputValue(event, event.target.name)} type="text" placeholder="Enter firstname" name="firstName"></input>
			<input value={user.lastName} onChange={(event)=>handleInputValue(event, event.target.name)} type="text" placeholder="Enter lastname" name="lastName"></input>
			<input value={user.email} onChange={(event)=>handleInputValue(event, event.target.name)} type="email" placeholder="Enter email" name="email"></input>
			<button>Submit!</button>
		</form>

		{userList.map((user, index)=>
			<div key={index}>{user.firstName} {user.lastName} - Email: {user.email}</div>
		
		)}

		</>
	)
	

}
/* userList.map er viktig for siste oppgave  */