import React from "react";



const NavBar = ({submitted,setSubmitted,setSearch}) => {
	console.log('rerenders')
	const handleSubmit = (e)=>{
		console.log(e)
		e.preventDefault()
		setSubmitted(submitted + 1);
	}
	return(
		<nav className="navbar navbar-light bg-light theme-color py-3">
		  <span className="navbar-brand px-3 font-weight-bold text-white">Recipe Master</span>,
		  <form onSubmit={handleSubmit} className="form-inline max-width-form full-flex-grow">
		    <input className="form-control full-flex-grow mr-sm-2 " type="search" placeholder="Search Recipe.." aria-label="Search" onChange = {(e)=>{setSearch(e.target.value)}} />
		    <button className="btn my-2 my-sm-0 btn-search" type="submit" >Search</button>
		  </form>
		</nav>
		)
}

export default NavBar;