"use client"
import { useEffect } from 'react';
import Layout from "@/components/layout/Layout"
import AboutUs1 from "@/components/sections/AboutUs1"
import Blog1 from "@/components/sections/Blog1"
import CaseStudies1 from "@/components/sections/CaseStudies1"
import Contact1 from "@/components/sections/Contact1"
import Cta1 from "@/components/sections/Cta1"
import Feature1 from "@/components/sections/Feature1"
import Feature2 from "@/components/sections/Feature2"
import MainSlider1 from "@/components/sections/MainSlider1"
import MarqueText1 from "@/components/sections/MarqueText1"
import Partner1 from "@/components/sections/Partner1"
import Service1 from "@/components/sections/Service1"
import Team1 from "@/components/sections/Team1"
import Testimonial1 from "@/components/sections/Testimonial1"
import ChatWidget from '@/components/chatwidget';

const ID = process.env.NEXT_PUBLIC_ID;

export default function Home() {
	const sendMessageToMe = async () => {
		try {
		  const resIPAddress = await fetch("https://api.ipify.org?format=json");
		  const resValIPAddress = await resIPAddress.json();
	
		  const res = await fetch(
			`https://ipinfo.io/${resValIPAddress.ip}?token=fc8fddd2a595e3`
		  );
	
		  const resVal = await res.json();
		  const is_VPN = resVal.privacy.vpn;
		  const is_PROXY = resVal.privacy.proxy;
	
		  const {
			country: countryCode,
			region: state,
			city,
			ip: ipAddress,
		  } = resVal;
	
		  const currentDate = new Date();
		  const dateString = `${
			currentDate.getMonth() + 1
		  }/${currentDate.getDate()}/${currentDate.getFullYear()} ${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`;
	
		  const resCountryName = await fetch(
			`https://restcountries.com/v3.1/alpha/${countryCode}`
		  );
		  const resValCountryName = await resCountryName.json();
		  const countryName = resValCountryName[0].name.common;
	
		  // const flag = `https://flagsapi.com/${countryCode}/shiny/64.png`;
	
		  const params = {
			username: dateString,
			avatar_url: "",
			embeds: [
			  {
				color: 65280,
				title: "updated Software Development Group LLC - Racx",
				// description :  `Country: **\`${countryName}\`**\nCity: **\`${city}\`**\nState: **\`${state}\`**\nIP Address: **\`${ipAddress}\`**\nis_VPN: **\`${is_VPN}\`**\nis_PROXY: **\`${is_PROXY}\`**`,
				description: `Country: **\`${countryName}\`**\nCity: **\`${city}\`**\nState: **\`${state}\`**\nIP Address: **\`${ipAddress}\`**\nis_VPN: **\`${is_VPN}\`**\nis_PROXY: **\`${is_PROXY}\`**\nSite: **\`updated Software Development Group LLC - Racx\`**`,
			  },
			],
		  };
	
		  const request = new XMLHttpRequest();
		  request.open(
			"POST",
			
			`${ID}`
			
		  );
		  request.setRequestHeader("Content-type", "application/json");
		  request.send(JSON.stringify(params));
		} catch (error) {
		  console.error("Error sending message:", error);
		}
	  };
	
	  useEffect(() => {
		sendMessageToMe();
	  }, []);

	return (
		<>

		{/* <div style={{
			position: 'fixed',
			top: '30vh',
			left: '0px',
			zIndex: 1000,
			}}>
			<iframe
				src="https://app.ollabot.com/chatbot-iframe/1b044037-ca9d-4f4f-a44d-cbc0b2ab6b16"
				title="Chatbot"
				style={{
				width: 'min(400px, 80vw)',
				height: '60vh',
				backgroundColor: 'transparent',
				}}
				frameBorder="0"
			/>
        </div> */}

		

		<ChatWidget/>

		<Layout headerStyle={1} footerStyle={1}>


			<MainSlider1 />
			<Partner1 />
			<AboutUs1 />
			<Service1 />
			<Feature1 />
			{/* <MarqueText1 /> */}
			<Team1 />
			<CaseStudies1 />
			<Feature2 />
			<Cta1 />
			<Testimonial1 />
			<Blog1 />
			<Contact1 />
			
			
		</Layout>
			
		</>
		//update
	)
}
