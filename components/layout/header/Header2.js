import Link from "next/link"
import Menu from "../Menu"
import MobileMenu from "../MobileMenu"

export default function Header2({ scroll, isMobileMenu, handleMobileMenu, handleSearch, handleOffcanvas }) {
	return (
		<>

			<header className="main-header">
				{/* Header Lower */}
				<div className="header-top">
					<div className="row flex-three">
						<div className="col-md-7">
							<ul className="address-top-header flex-three">
								<li className="flex-three">
									<i className="icon-location-dot1" />
									<span>Ridgewood, NJ</span>
								</li>
								<li className="flex-three">
									<i className="icon-envelope4" />
									<span>info@softwaredevelopmentgroup.net</span>
								</li>
							</ul>
						</div>
						<div className="col-md-5 flex-six">
							<ul className="menu-left flex-three">
								<li>
									<Link href="/#">Help</Link>
								</li>
								<li>
									<Link href="/#">Support</Link>
								</li>
								<li>
									<Link href="/#">Faqs</Link>
								</li>
							</ul>
							<ul className="social-top flex-three">
								<li>
									<Link href="/#"><i className="icon-fb" /></Link>
								</li>
								<li>
									<Link href="/#"><i className="icon-tw" /></Link>
								</li>
								<li>
									<Link href="/#"><i className="icon-in" /></Link>
								</li>
								<li>
									<Link href="/#"><i className="icon-ytb" /></Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className={`header-lower ${scroll ? 'is-fixed is-small' : ''}`}>
					<div className="tf-container full">
						<div className="row">
							<div className="col-lg-12">
								<div className="inner-container flex justify-space align-center">
									{/* Logo Box */}
									<div className="header-left flex">
										<div className="logo-box">
											<div className="logo">
												<Link href="/">
													<img src="/assets/images/logo2.ico" alt="Logo" />
												</Link>
											</div>
										</div>
										<div className="nav-outer flex align-center">
											{/* Main Menu */}
											<nav className="main-menu show navbar-expand-md">
												<div className="navbar-collapse collapse clearfix" id="navbarSupportedContent">
													<Menu />
												</div>
											</nav>
											{/* Main Menu End*/}
										</div>
										<div className="header-search" onClick={handleSearch}>
											<a> <i className="icon-search-icon" /> </a>
										</div>
									</div>
									<div className="header-account flex align-center">
										<div className="phone-address">
											<ul className="flex align-center">
												<li className>
													<i className="icon-phone2" />
													<span>+X (XXX) XXX-XXXX</span>
												</li>
											</ul>
										</div>
										<div className="flat-bt-top sc-btn-top">
											<a className="icon-listing" onClick={handleOffcanvas} data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><i className="icon-uni" /></a>
										</div>
										<div className="mobile-nav-toggler mobile-button" onClick={handleMobileMenu}>
											<i className="icon-uni" />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* End Header Lower */}
				{/* Mobile Menu  */}
				<div className="close-btn" onClick={handleMobileMenu}><span className="icon flaticon-cancel-1" /></div>
				<div className="mobile-menu">
					<div className="menu-backdrop" onClick={handleMobileMenu} />
					<nav className="menu-box">
						<div className="nav-logo"><Link href="/">
							<img src="/assets/images/logo-footer.ico" alt="" /></Link></div>
						<div className="bottom-canvas">
						<div className="menu-outer">
								<MobileMenu />
							</div>
						</div>
					</nav>
				</div>
				{/* End Mobile Menu */}
			</header>

		</>
	)
}
