import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material/'
import './Header.scss'
import Toggler from './Toggler/Toggler'

const Header = ({Extend})=> {
	const [navOpen, setNavOpen] = React.useState(false)
	console.log('navOpen:', navOpen)

   return (
		<header className="site-header">
			<div className="main-nav">
				<div className="container position-relative">
					<div className="row justify-content-between">
						<div className="col-md-3 col-6 d-flex align-items-center">
							<Link to="/" className="logo">
								<img src="/assets/images/logo.svg" alt="CoinBase" />
							</Link>
						</div>
						<div className="col-md-6 d-flex align-items-center justify-content-center row-menu">
							<div className={`main-menu ${navOpen? 'show': ''}`}>
								<Link to="/">Prices</Link>
								<Link to="/">Learn</Link>
								<Link to="/">Individuals</Link>
								<Link to="/">Developers</Link>
								<Link to="/">Company</Link>
								<Link to="/" className="fz14 fw-600 d-lg-none">Sign in</Link>
							</div>
						</div>
						<div className="col-md-3 col-5 d-flex justify-content-end align-items-center">
							<Link to="/" className="fz14 fw-600  d-none d-lg-block">Sign in</Link>
							<Button variant="contained" color="primary" className="fz14 ms-3 fw-600 text-capitalize" size="small">Get Started</Button>
							<Toggler navOpen={navOpen} onClick={()=>setNavOpen(!navOpen)}/>
						</div>
					</div>
				</div>
			</div>
			{Extend && <Extend /> }
		</header>
   )
}

export default Header;