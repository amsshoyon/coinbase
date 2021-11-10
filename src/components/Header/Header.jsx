import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material/'
import './Header.scss'

const Header = ()=> {


   return (
		<header className="site-header">
			<div className="container">
				<div className="row">
					<div className="col-lg-3 d-flex align-items-center">
						<Link to="/" className="logo">
							<img src="/assets/images/logo.svg" alt="CoinBase" />
						</Link>
					</div>
					<div className="col-lg-6 d-flex align-items-center justify-content-center">
						<div className="main-menu">
							<Link to="/">Prices</Link>
							<Link to="/">Learn</Link>
							<Link to="/">Individuals</Link>
							<Link to="/">Developers</Link>
							<Link to="/">Company</Link>
						</div>
					</div>
					<div className="col-lg-3 d-flex justify-content-end align-items-center">
						<Link to="/" className="fz14 fw-600 ">Sign in</Link>
						<Button variant="contained" color="primary" className="fz14 ms-3 fw-600 text-capitalize" size="small">Get Started</Button>
					</div>
				</div>
			</div>
		</header>
   )
}

export default Header;