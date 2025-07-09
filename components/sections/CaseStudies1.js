'use client'
import { Swiper, SwiperSlide } from "swiper/react"
import Link from "next/link"
import { caseStudiesSlider } from "@/utils/swiperOptions"

export default function CaseStudies1() {
	return (
		<>

			<section className="section-case-studies relative">
				<div className="tf-container full">
					<div className="row">
						<div className="col-xl-7 col-lg-12">
							<Swiper {...caseStudiesSlider} className="swiper  case-studies-slider overflow-hiden mb-60">
								<div className="swiper-wrapper">
									<SwiperSlide>
										<img src="/assets/images/page/case-h1.jpg" alt="image silder" />
									</SwiperSlide>
									<SwiperSlide>
										<img src="/assets/images/page/case-h2.jpg" alt="image silder" />
									</SwiperSlide>
									<SwiperSlide>
										<img src="/assets/images/page/case-h3.jpg" alt="image silder" />
									</SwiperSlide>
								</div>
								<div className="swiper-pagination" />
							</Swiper>
						</div>
						<div className="col-xl-5 col-lg-12">
							<div className="case-studies-content relative overflow-hiden">
								<div className="cycle" />
								<div className="icon-case">
									<i className="icon-Icon21" />
								</div>
								<h2 className="title-case text-white">Modern Technology Advancement
									and Innovative Incentives</h2>
								<p className="des font-man">We denounce with righteous indignation and like men who
									are
									beguiled
									and demoralized by the charms of pleasure of the moment, so blinded by
									desire
									foresee the pain</p>
								<Link href="/service-details" className="button-src">View Details <i className="icon-angle-right" /></Link>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
