import Layout from "@/components/layout/Layout"
import Link from "next/link"
import Cognaitiv from "@/components/cognaitiv"
import Elevenlab from "@/components/elevenlab"
import ChatWidget from '@/components/chatwidget';

export default function AiAgent() {

    return (
        <>
		<ChatWidget/>
        <Layout >
            <div style={{ backgroundColor: "#0f172a", padding: "30px"}}>
                <div className="tf-container" style={{color: "#fff"}}>
                    <Cognaitiv />
                    <Elevenlab />
                </div>
            </div>
            <section className="our-blog pd-section" style={{ backgroundColor: "#0f172a", padding: "30px"}}>
					<div className="tf-container">
						<div className="row">
							<div className="col-md-4">
								<article className="side-blog mb-70 relative">
									<div className="blog-image overflow-hiden">
										<Link className="post-thumbnail" href="/#">
											<img src="/assets/images/agent/2.png" alt="Image blog" />
										</Link>
									</div>
									<div className="blog-content content-list">
										<div className="top-detail-info">
											<Link href="/#" className="category font-man">Whatsapp</Link>
											<span className="date font-man">May 14, 2023</span>
										</div>
										<h3 className="entry-title">
											<Link href="/#">Business WorkFlow</Link>
										</h3>
										<p className="description">Imagine waking up to find your entire business running smoothly emails sent, data synced, reports generated, and customer messages handled without lifting a finger. Sounds like a dream, right? Thats exactly what n8n automation workflow API integration AI chatbot agent made com can do for you.
										</p>
										{/* <div className="btn-wrap">
											<Link href="/#" className="more-links">Read More <i className="icon-right-icon" /></Link>
										</div> */}
									</div>
								</article>
							</div>
							<div className="col-md-4">
								<article className="side-blog mb-70 relative">
									<div className="blog-image overflow-hiden">
										<Link className="post-thumbnail" href="/#">
											<img src="/assets/images/agent/5.jpg" alt="Image blog" />
										</Link>
									</div>
									<div className="blog-content content-list">
										<div className="top-detail-info">
											<Link href="/#" className="category font-man">Software</Link>
											<span className="date font-man">April 21, 2024</span>
										</div>
										<h3 className="entry-title">
											<Link href="/#">Custom Support</Link>
										</h3>
										<p className="description">Automate your tasks, workflows, and business processes with Zapier, Make.com or n8n.io. If you're tired of juggling repetitive tasks, We can help you build powerful automation that saves time and enhances productivity. Whether you're a solopreneur or a growing business, We'll tailor each integration from simple setups to advanced, multi-step workflow to suit your needs.
										</p>
										{/* <div className="btn-wrap">
											<Link href="/#" className="more-links">Read More <i className="icon-right-icon" /></Link>
										</div> */}
									</div>
								</article>
							</div>
							<div className="col-md-4">
								<article className="side-blog mb-70 relative">
									<div className="blog-image overflow-hiden">
										<Link className="post-thumbnail" href="/#">
											<img src="/assets/images/agent/4.png" alt="Image blog" />
										</Link>
									</div>
									<div className="blog-content content-list">
										<div className="top-detail-info">
											<Link href="/#" className="category font-man">Product</Link>
											<span className="date font-man">October 15, 2024</span>
										</div>
										<h3 className="entry-title">
											<Link href="/#">Stremline</Link>
										</h3>
										<p className="description">Are repetitive tasks slowing you down? We're here to help you streamline your workflows (formerly Integromat)! We specialize in creating efficient automation solutions tailored to your unique business needs.
										</p>
										{/* <div className="btn-wrap">
											<Link href="/#" className="more-links">Read More <i className="icon-right-icon" /></Link>
										</div> */}
									</div>
								</article>
							</div>
							
						</div>
						
						<img src="/assets/images/agent/6.png" alt="Image blog" />
					</div>
				</section>

        </Layout>
           
        </>
    )
}
