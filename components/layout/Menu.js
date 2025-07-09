'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function Menu() {
	const pathname = usePathname()
	const [currentMenuItem, setCurrentMenuItem] = useState("")

	useEffect(() => {
		setCurrentMenuItem(pathname)
	}, [pathname])

	const checkCurrentMenuItem = (path) => currentMenuItem === path ? "current" : ""
	const checkParentActive = (paths) => paths.some(path => currentMenuItem.startsWith(path)) ? "current" : ""

	return (
		<>
			<ul className="navigation clearfix">
				<li className={`dropdown2 ${checkParentActive([
					"/home2",
					"/home3",
					"/home4",
					"/home5",
					"/home6",
				])}`}>
					<Link href="/#">Home</Link>
					{/* <ul>
						<li className={`${checkCurrentMenuItem("/")}`}>
							<Link href="/">Home 01</Link>
						</li>
						<li className={`${checkCurrentMenuItem("/home2")}`}>
							<Link href="/home2">Home 02</Link>
						</li>
						<li className={`${checkCurrentMenuItem("/home3")}`}>
							<Link href="/home3">Home 03</Link>
						</li>
						<li className={`${checkCurrentMenuItem("/home4")}`}>
							<Link href="/home4">Home 04</Link>
						</li>
						<li className={`${checkCurrentMenuItem("/home5")}`}>
							<Link href="/home5">Home 05</Link>
						</li>
						<li className={`${checkCurrentMenuItem("/home6")}`}>
							<Link href="/home6">Home 06</Link>
						</li>
					</ul> */}

				</li>
				<li className={`dropdown2 ${checkParentActive([
					"/about-company",
					"/team",
					"/team-details",

				])}`}>
					<Link href="/#">Company</Link>
					<ul>
						<li className={`${checkCurrentMenuItem("/about-company",)}`}>
							<Link href="/about-company">About Company</Link>

						</li>
						{/* <li className={`${checkCurrentMenuItem("/team",)}`}>
							<Link href="/team">Team Member</Link>
						</li>
						<li className={`${checkCurrentMenuItem("/team-details",)}`}>
							<Link href="/team-details">Team Details</Link>

						</li> */}
					</ul>

				</li>
				<li className={`dropdown2 ${checkParentActive([
					"/service1",
					"/service2",
					"/service-details"

				])}`}>
					<Link href="/#">Service</Link>
					<ul>
						<li className={`${checkCurrentMenuItem("/service1")}`}>
							<Link href="/service1">Web Service</Link>
						</li>
						<li className={`${checkCurrentMenuItem("/service2")}`}>
							<Link href="/service2">AI Tech</Link>
						</li>
						<li className={`${checkCurrentMenuItem("/service-details")}`}>
							<Link href="/service-details">Service
								Details</Link>
						</li>
					</ul>

				</li>
				<li className={`dropdown2 ${checkParentActive([
					"/project-grid",
					"/project-mansory",
					"/project-slider",
					"/project-details"

				])}`}>
					<Link href="/#">Project Grid</Link>
					<ul>
						<li className={`${checkCurrentMenuItem("/project-grid")}`}>
							<Link href="/project-grid">Project Grid</Link>

						</li>
						{/* <li className={`${checkCurrentMenuItem("/project-mansory")}`}>
							<Link href="/project-mansory">Project
								Masonry</Link>
						</li>
						<li className={`${checkCurrentMenuItem("/project-slider")}`}>
							<Link href="/project-slider">Project Slider</Link>

						</li> */}
						<li className={`${checkCurrentMenuItem("/project-details")}`}>
							<Link href="/project-details">Project
								Details</Link>
						</li>
					</ul>

				</li>
				<li className={`dropdown2 ${checkParentActive([
					"/faq",
					"/pricing",
					"/404",

				])}`}>
					<Link href="/#">Page</Link>
					<ul>
						<li className={`${checkCurrentMenuItem("/faq")}`}>
							<Link href="/faq">Faq Page</Link>
						</li>
						<li className={`${checkCurrentMenuItem("/pricing")}`}>
							<Link href="/pricing">Price Page</Link>
						</li>
						{/* <li className={`${checkCurrentMenuItem("/404")}`}>
							<Link href="/404">404 Page</Link>
						</li> */}
					</ul>

				</li>
				{/* <li className={`dropdown2 ${checkParentActive([
					"/blog",
					"/blog-style2",
					"/blog-details"

				])}`}>
					<Link href="/#">Blog</Link>
					<ul>
						<li className={`${checkCurrentMenuItem("/blog")}`}>
							<Link href="/blog">Blog Full</Link>
						</li>
						<li className={`${checkCurrentMenuItem("/blog-style2")}`}>
							<Link href="/blog-style2">Blog List</Link>
						</li>
						<li className={`${checkCurrentMenuItem("/blog-details")}`}>
							<Link href="/blog-details">Blog Detail</Link>
						</li>
					</ul>

				</li> */}
				{/* <li className={`${pathname === "/contact-us" ? "current" : ""}`}>
					<Link href="/contact-us">Contact</Link>
				</li> */}

				<li className={`${pathname === "/contact-us" ? "current" : ""}`}>
					<Link href="/aiagent">AI Agent</Link>
				</li>
				
				{/* <li className={`${pathname === "/contact-us" ? "current" : ""}`}>
					<Link href="/kenzie">Kenzie</Link>
				</li> */}
				
			</ul>
		</>
	)
}

