import{Link} from 'react-router-dom'

function Nav(){
	return(
		<div className="navbar">
		<Link to="/">Phone</Link>
		<Link to="/Act">Act</Link>
		<Link to="/Bout">Bout</Link>
		</div>
		)
}
export default Nav