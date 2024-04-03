export default function Child({updateMessage}) {

	return(
		<>
		<div>
			
			<button onClick={()=>updateMessage("New message")}>Update Message!</button>
		</div>
		</>
	)
}