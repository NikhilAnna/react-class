import React from 'react'
class Classcomponent extends React.Component{
	state={
		subjectname:"react",
		year:2023,
		inputValue:"",
		student:[
		{
			name:"nikhil",
			age:20,
			gender:"male"
		},
		{
			name:"jony",
			age:25,
			gender:"male"
		},
		{
			name:"kokki",
			age:20,
			gender:"male"
		}
		]
	}
	handleClick=()=>{
		console.log(this.state.inputValue)
		this.setState({
			inputValue:""
		})
	}
	handleChange=(e)=>{
		this.setState({
			inputValue:e.target.value
		})

	}
	render(){
		return(
			<div>
			<h1> Good Morning </h1>
			<p>{this.state.subjectname}</p>
			<p>{this.state.year}</p>
			{
				this.state.student.map((pos)=>(
				<div>
				<p>{pos.name}</p>
				<p>{pos.age}</p>
				<p>{pos.gender}</p>
				</div>
				))
			}

            <input value={this.state.inputValue} onChange={this.handleChange}/>
			<button onClick={this.handleClick}> Submit </button>
			</div>
			)
	}
	}
export default Classcomponent
