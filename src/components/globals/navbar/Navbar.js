import React, { Component } from 'react'
import styled from 'styled-components'

import NavbarHeader from './NavbarHeader'
import NavbarLinks from './NavbarLinks'
import NavbarIcons from './NavbarIcons'



class Navbar extends Component {
	state = {
		navbarOpen: false,
	}

	handleNavbar = () => {
		this.setState(() => {
			return { navbarOpen: !this.state.navbarOpen }
		})
	}
	render(){
		return (
			<NavbarWrapper>
				<NavbarHeader handleNavbar={this.handleNavbar} />
				<NavbarLinks navbarOpen={this.state.navbarOpen} />
				<NavbarIcons />
			</NavbarWrapper>
		)
	}
}

const NavbarWrapper = styled.nav`
	@media (min-width: 768px){
		display: flex;
		align-items: center;
	}
`

export default Navbar