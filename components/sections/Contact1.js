import React, { useState } from 'react';

export default function Contact1() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const [status, setStatus] = useState(null);

	const handleSubmit = async (e) => {
		e.preventDefault();
	
		try {
		  const response = await fetch('https://contact-mail-server.vercel.app/send-email', {
			method: 'POST',
			headers: {
			  'Content-Type': 'application/json',
			},
			body: JSON.stringify({ name, email, message }),
		  });
	
		  const result = await response.json();
	
		  if (result.success) {
			setStatus('Email sent successfully!');
			setName('');
			setEmail('');
			setMessage('');
		  } else {
			setStatus('Failed to send email.');
		  }
		} 
		catch (error) {
		  console.error('Error:', error);
		  setStatus('An error occurred while sending the email.');
		}
	};

	return (
		<>

			<section className="section-contact bg-1 pt-130 pb-130">
				<div className="tf-container">
					<div className="row">
						<div className="col-md-6">
							<div className="content">
								<div className="heading-title mb-40">
									<span className="sub-title texts-blue font-man wow fadeInUpSmall" data-wow-delay=".2s">Work Inquiry</span>
									<h2 className="title text-white wow fadeInUpSmall" data-wow-delay=".3s">Let’s Work For your
										Next Projects ?</h2>
									<p className="des font-man text-white wow fadeInUpSmall" data-wow-delay=".4s">We denounce with righteous indignation
										and
										like men beguiled and demoralized by the charms</p>
								</div>
								<div className="contact-wrap flex-three mb-40 wow fadeInUpSmall" data-wow-delay=".4s">
									<div className="icon">
										<i className="icon-phones" />
									</div>
									<div className="contact-content">
										<span className="font-man">Call For Inquiry</span>
										<p>+X (XXX) XXX-XXXX </p>
									</div>
								</div>
								<div className="contact-wrap flex-three wow fadeInUpSmall" data-wow-delay=".5s">
									<div className="icon">
										<i className="icon-envelopes" />
									</div>
									<div className="contact-content">
										<span className="font-man">Send Us Email</span>
										{/* <p>info@softwaredevelopmentgroup.net</p> */}
										<a 
  href="mailto:info@softwaredevelopmentgroup.net" 
  className="text-white underline text-[40px] font-bold"
>
  info@softwaredevelopmentgroup.net
</a>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-6">
							<div className="form-contact-home1">
								<div className="inner-title-form center mb-30">
									<h3 className="title-form">Need Help For Project!</h3>
									<p>We are ready to help your next projects, let’s work together</p>
								</div>
								<form className="form-contact-home" id="contactform" >
									<div className="input-group flex-one">
										<fieldset className="relative mb-20">
											<input type="text" className="form-control" id="name-input" placeholder="Name" name="name"
											             value={name}
														 onChange={(e) => setName(e.target.value)}
											required />
											<i className="icon-user" />
										</fieldset>
										<fieldset className="relative mb-20">
											<input type="email" className="form-control" id="email-input" placeholder="Email" name="email" 
											                      value={email}
																  onChange={(e) => setEmail(e.target.value)}
											required />
											<i className="icon-envelopes" />
										</fieldset>
									</div>
									{/* <fieldset className="mb-20">
										<div className="nice-select" tabIndex={0} name="drop" id="drop" required>
											<span className="current">Choose Services</span>
											<ul className="list">
												<li data-value className="option selected focus">Choose Services
												</li>
												<li data-value="service" className="option"> Services 1</li>
												<li data-value="service" className="option"> Services 2</li>
												<li data-value="service" className="option"> Services 3</li>
											</ul>
										</div>
									</fieldset> */}
									<fieldset className=" mb-15">
										<textarea rows={4} cols={50} placeholder="Message" name="message" id="message" 
										               value={message}
													   onChange={(e) => setMessage(e.target.value)}
										required />
									</fieldset>
									<fieldset className="center">
										<button className="btn-submit" type="submit">Send MESSAGE Us <i className="icon-right-icon" /></button>
										{status && <p>{status}</p>}
									</fieldset>
								</form>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
