
import Link from "next/link"
import TextAnimation from "../elements/TextAnimation"

export default function AboutUs2() {
	return (
		<>

			<section className="pt-122 about-home3">
				<div className="tf-container">
					<div className="row">
						<div className="col-lg-12">
							<div className="heading-title center m0-auto w-760 mb-60">
								<span className="sub-title text-blue1 font-man wow fadeInUpSmall" data-wow-delay=".2s">About Company</span>
								<h2 className="title wow fadeInUpSmall" data-wow-delay=".3s">Guardians of the Digital Realm Our
									Mission and
									<span className="animationtext clip text-blue1 mask">
										<TextAnimation text1="Racx" text2="Expertise" />
									</span>
								</h2>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-md-6">
							<div className="about-number flex">
								<span className="number-large">39</span>
								<p className="text-about">Years Of Experience In Cyber<br />
									Security Services</p>
							</div>
						</div>
						<div className="col-md-6">
							<div className="about-content">
								<h3 className="title wow fadeInUpSmall" data-wow-delay=".2s">Safeguarding the Future Our Mission in
									the Digital Landscape</h3>
								<p className="wow fadeInUpSmall" data-wow-delay=".3s">We approached Racx with complex project Designing a website can
									involve various aspects such as layout, graphics, content, and experience
									For a more specific response, could you please elaborate</p>
								<div className="about-content-wrapper flex-three wow fadeInUpSmall" data-wow-delay=".4s">
									<Link href="/#" className="reading">Continue Reading <i className="icon-right-icon" /></Link>
									<div className="flex-three image-wrap">
										<ul className="image-list flex-three">
											<li>
												<img src="/assets/images/avata/avt1.jpg" alt="Image list" />
											</li>
											<li>
												<img src="/assets/images/avata/avt2.jpg" alt="Image list" />
											</li>
											<li>
												<img src="/assets/images/avata/avt3.jpg" alt="Image list" />
											</li>
											<li>
												<img src="/assets/images/avata/avt4.jpg" alt="Image list" />
											</li>
										</ul>
										<div className="content-image">
											<p>10m+ Customers</p>
											<div className="icon-shape">
												<svg width={124} height={5} viewBox="0 0 124 5" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M114.168 0.615385C111.478 0.5 108.742 0.384615 106.006 0.269231C105.125 0.230769 104.198 0.230769 103.317 0.192308C101.369 0.153846 99.4215 0.115385 97.4739 0.0769231C96.4073 0.0384615 95.2944 0.0384615 94.2278 0C93.9032 0 93.5786 0 93.3004 0C92.6048 0 91.9092 0 91.1673 0C87.9676 0 84.7679 0 81.5683 0C80.8263 0 80.038 0 79.2961 0.0384615C77.3948 0.0769231 75.5399 0.0769231 73.6387 0.115385C71.5056 0.153846 69.3725 0.153846 67.2393 0.192308C63.8078 0.269231 60.3299 0.346154 56.8984 0.423077C54.9044 0.461538 52.9104 0.5 50.9164 0.538462C47.4849 0.653846 44.0534 0.769231 40.6218 0.884615C38.7206 0.961538 36.8657 1 34.9645 1.07692C31.3938 1.26923 27.8232 1.42308 24.2525 1.57692C22.3513 1.65385 20.45 1.73077 18.5488 1.84615C15.0245 2.07692 11.4539 2.34615 7.92961 2.61538C7.18765 2.65385 6.39933 2.73077 5.61101 2.76923C4.1271 2.88462 2.59683 3.07692 1.06656 3.23077C0.973811 3.23077 0.881067 3.26923 0.788323 3.26923C0.602836 3.26923 0.46372 3.34615 0.324604 3.46154C0.0927439 3.65385 0 3.88462 0 4.11539C0 4.34615 0.0927439 4.57692 0.324604 4.73077C0.510092 4.88462 0.834695 5 1.06656 5C2.92143 4.84615 4.72994 4.65385 6.58482 4.5C8.30058 4.38462 10.0163 4.26923 11.7321 4.15385C13.587 4.03846 15.4419 3.88462 17.3431 3.76923C18.0851 3.73077 18.827 3.65385 19.6153 3.61538C22.5368 3.5 25.4118 3.34615 28.3333 3.23077C30.1418 3.15385 31.9503 3.07692 33.7588 3C34.5007 2.96154 35.2427 2.92308 35.9846 2.88462C38.8597 2.76923 41.7348 2.69231 44.6098 2.57692C46.372 2.53846 48.0877 2.46154 49.8499 2.42308C50.4527 2.42308 51.0092 2.38462 51.612 2.38462C54.7189 2.30769 57.8258 2.26923 60.9328 2.19231C62.6485 2.15385 64.4107 2.11538 66.1264 2.07692C66.7293 2.07692 67.3785 2.03846 67.9813 2.03846C71.181 2 74.3806 2 77.6267 1.96154C79.6207 1.96154 81.6147 1.92308 83.6087 1.92308C86.9938 1.92308 90.4253 1.92308 93.8105 1.96154C94.4597 1.96154 95.1553 2 95.8045 2C97.7057 2.03846 99.5606 2.07692 101.462 2.15385C102.853 2.19231 104.291 2.23077 105.682 2.26923C106.702 2.30769 107.676 2.34615 108.696 2.38462C111.617 2.5 114.585 2.65385 117.507 2.80769C118.249 2.84615 118.99 2.88462 119.732 2.92308C120.521 2.96154 121.355 3 122.144 3.07692C122.283 3.07692 122.376 3.11539 122.515 3.15385C122.839 3.19231 123.118 3.19231 123.396 3.03846C123.674 2.92308 123.86 2.69231 123.952 2.46154C124.138 1.96154 123.767 1.42308 123.118 1.26923C122.561 1.15385 122.005 1.11538 121.495 1.03846C121.124 1 120.753 0.961538 120.382 0.961538C119.64 0.884615 118.898 0.884615 118.202 0.807692C116.904 0.769231 115.513 0.692308 114.168 0.615385Z" fill="currentcolor" />
												</svg>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
