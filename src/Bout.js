import axios from 'axios'

function Contact(){
	function create(){
		axios.post("https://reqres.in/api/users",{
			username:"navya@gmail.com",
			password:"navya@123"
		})
		.then((res)=>{
			console.log(res.data)
		})
	}
	return(
		<div>
		<h1>Contact component</h1>
		<button onClick={create}>send</button>
		</div>
	)
}
export default Bout