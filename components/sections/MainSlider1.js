'use client'
import { Swiper, SwiperSlide } from "swiper/react"
import Link from "next/link"
import { sliderSwiperIt } from "@/utils/swiperOptions"

export default function MainSlider1() {
	return (
		<>

			<section className="swiper slider-Swiper-it relative">
				<Swiper {...sliderSwiperIt} className="swiper-wrapper">
					<SwiperSlide>
						<div className="slider-it-main relative over overflow-hiden">
							<div className="slider-image-it">
								<img src="/assets/images/slide/slider1lider1.jpg" alt="" />
							</div>
							<span className="it-solution fw-600">IT Solutions</span>
							<img src="/assets/images/slide/mask.png" alt="image" className="mask-slider" />
							<div className="tf-container">
								<div className="slider-content-it relative z-index-3">
									<div className="sub-title-slider wow fadeInUpSmall">
										<i className="icon-angle-downs " />
										<span className="fw-600 text-white font-man">
											5M+ Trusted Our Clients</span>
									</div>
									<h1 className="title-slider text-white wow fadeInUpSmall" data-wow-delay=".2s">Modern &amp; Digital <br /> IT Solutions For
										Your
										<br /> Business
									</h1>
									{/* <p className="des text-white fw-500 mb-40 wow fadeInUpSmall" data-wow-delay=".3s">25+ Years Of Experience In Tech
										Services
									</p> */}
									<p className="des text-white fw-500 mb-40 wow fadeInUpSmall" data-wow-delay=".3s">+X (XXX) XXX-XXXX
									</p>
									<p className="des text-white fw-500 mb-40 wow fadeInUpSmall" data-wow-delay=".3s">info@softwaredevelopmentgroup.net
									</p>
									<div className="btn-main wow fadeInUpSmall" data-wow-delay=".4s">
										<Link href="/service1" className="button-src ">Explore Our Service
											<i className="icon-angle-right" /></Link>
									</div>
								</div>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="slider-it-main relative over overflow-hiden">
							<div className="slider-image-it">
								<img src="/assets/images/slide/slider1lider2.jpg" alt="" />
							</div>
							<span className="it-solution fw-600">IT Solutions</span>
							<img src="/assets/images/slide/mask.png" alt="image" className="mask-slider" />
							<div className="tf-container">
								<div className="slider-content-it relative z-index-3">
									<div className="sub-title-slider wow fadeInUpSmall">
										<i className="icon-angle-downs " />
										<span className="fw-600 text-white font-man">
											5m+ Trusted Our Clients</span>
									</div>
									<h1 className="title-slider text-white wow fadeInUpSmall" data-wow-delay=".2s">Modern &amp; Digital <br /> IT Solutions For
										Your
										<br /> Business
									</h1>
									<p className="des text-white fw-500 mb-40 wow fadeInUpSmall" data-wow-delay=".3s">25+ Years Of Experience In Tech
										Services
									</p>
									<div className="btn-main wow fadeInUpSmall" data-wow-delay=".4s">
										<Link href="/service2" className="button-src">Explore Our Service <i className="icon-angle-right" /></Link>
									</div>
								</div>
							</div>
						</div>
					</SwiperSlide>
				</Swiper>
				<div className="button-swiper">
					<div className="swiper-button-next" />
					<div className="swiper-button-prev" />
				</div>
			</section>
		</>
	)
}
