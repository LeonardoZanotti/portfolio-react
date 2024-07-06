import { SocialIcon } from "react-social-icons";

function Contact() {
	return (
		<section id="contact" className="relative">
			<div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
				<div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
					<iframe
						width="100%"
						height="100%"
						title="map"
						className="absolute inset-0"
						frameBorder={0}
						marginHeight={0}
						marginWidth={0}
						style={{ filter: "opacity(0.7)" }}
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3600.3584671625513!2d-49.28928158967682!3d-25.526433736619243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dcfc83ab19555b%3A0xfddd41f211d6ea27!2sRua%20Alberto%20Mansueto%20Dallagassa%20-%20Pinheirinho%2C%20Curitiba%20-%20PR%2C%2082590-300!5e0!3m2!1sen!2sbr!4v1720213463950!5m2!1sen!2sbr"
					/>
				</div>
				<div>
					<h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
						Hire Me
					</h2>
					<p className="leading-relaxed mb-5">
						Do you like what you see? Send me an email and let's
						talk about an eventual opportunity to work together:
					</p>
					<div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
						<div className="lg:w-1/2">
							<h2 className="title-font font-semibold text-white tracking-widest text-xs">
								ADDRESS
							</h2>
							<p className="mt-1">
								Rua Alberto Mansueto Dallagassa <br />
								Pinheirinho, Curitiba - PR, Brazil
							</p>
						</div>
						<div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
							<h2 className="title-font font-semibold text-white tracking-widest text-xs">
								EMAIL
							</h2>
							<a className="text-indigo-400 leading-relaxed">
								leonardojosezanotti@gmail.com
							</a>
							<h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
								PHONE
							</h2>
							<p className="leading-relaxed">+55 41 99564-9547</p>
						</div>
						<div className="social relative flex pt-4">
							<div className="pr-4">
								<SocialIcon url="https://www.instagram.com/zanotto.leo13/" />
							</div>
							<div className="pr-4">
								<SocialIcon url="https://www.linkedin.com/in/leonardojzanotti/" />
							</div>
							<div className="pr-4">
								<SocialIcon url="https://github.com/LeonardoZanotti" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Contact;
