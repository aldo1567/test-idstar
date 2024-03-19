import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./components/navbar";
function App() {
	return (
		<>
			<Navbar />
			<div className="grid grid-cols-12 md:grid-cols-2">
				<div className="col-span-12 md:col-span-1 flex justify-center items-center">
					<div className="w-3/4">
						<div className="p-5 flex">
							<div className="z-10">
								<h1 className="text-7xl font-bold">
									Digital Center
								</h1>
								<h1 className="text-7xl font-bold">
									Indonesia
								</h1>
								<p className="text-2xl text-wrap w-3/4">
									Improve your business by analyzing it deeply
									and using the latest technology to increase
									growth.
								</p>
								<button className="rounded p-5 bg-[rgb(116,94,255)] text-white my-5 font-bold">
									Get To Know More
								</button>
							</div>
						</div>
					</div>
				</div>
				<img
					decoding="async"
					className="hero__arrow-icon absolute top-[30%] inset-x-[37%] z-0"
					src="https://digitalcenter.id/wp-content/uploads/2022/12/arrow-icon-1.png"
					alt="scroll Image"
				/>
				<div className="col-span-12 md:col-span-1">
					<img
						src="https://digitalcenter.id/wp-content/uploads/2022/12/hero-4-1.png"
						className="abo"
						alt="Hero Image"
					/>
				</div>
			</div>
			<div className="flex justify-center">
				<strong className="rounded-full border-2 py-2 px-5 border-slate-900">
					Processing
				</strong>
			</div>
			<h1 className="text-5xl font-bold text-center my-5">How We Work</h1>
			<h1 className="text-xl text-center my-5">
				Find out how the digital center can help you work together.
			</h1>
			<div className="flex my-5 justify-center gap-3">
				<div className="flex flex-col items-center">
					<img
						className=""
						src="https://digitalcenter.id/wp-content/uploads/2022/12/1-4-1.png"
					/>
					<h1 className="text-3xl font-bold text-center my-5">
						Teamwork
					</h1>
					<h1 className="text-xl text-center w-3/4 my-5">
						Providing the best results is a lengthy process that
						requires cooperation
					</h1>
				</div>
				<div className="flex flex-col items-center">
					<img src="https://digitalcenter.id/wp-content/uploads/2022/12/2-5-1.png" />
					<h1 className="text-3xl font-bold text-center my-5">
						Problem Solvers
					</h1>
					<h1 className="text-xl text-center w-1/2 my-5">
						Always giving you the newest ideas and information that
						fits your needs
					</h1>
				</div>
				<div className="flex flex-col items-center">
					<img src="https://digitalcenter.id/wp-content/uploads/2022/12/3-5-1.png" />
					<h1 className="text-3xl font-bold text-center my-5">
						Offer Solutions
					</h1>
					<h1 className="text-xl text-center w-1/2 my-5">
						Ensuring that you achieve the desired outcomes
						effectively and efficiently.
					</h1>
				</div>
			</div>
			<div className="container mx-auto px-4">
				<div class="grid grid-cols-2 justify-items-center">
					<div>
						<div className="flex flex-col justify-center gap-5">
							<div className="flex-1 w-[74%] self-center">
								<strong className="rounded-full border-2 py-2 px-5 border-slate-900">
									Feature
								</strong>
							</div>
							<div className="flex-1 self-center w-3/4">
								<span className="text-left text-5xl text-wrap font-bold">
									We execute projects utilizing our
									specialized and strategic approach
								</span>
							</div>
						</div>
					</div>
					<div className="bg-slate-950 w-[100%] h-[110%] z-0">
						<div className="p-14 grid grid-cols-2">
							<div className="flex flex-col gap-4">
								<div className="flex gap-4">
									<hr className="border-b border-white-200 my-2 w-1/4" />
									<h1 className="text-white">
										GIVING THE BEST
									</h1>
								</div>
								<div>
									<p>
										<span className="text-gray-400">
											We are perpetually innovating for
											the future, meticulously crafting
											the ensuing generation of products,
											brands, and design attributes from a
											multifaceted and hybrid viewpoint.
										</span>
										<span className="text-white">
											&nbsp;This approach ensures that our
											creations are not only current but
											also forward-thinking.
										</span>
									</p>
									<p className="text-gray-400 my-5">
										positioning them at the forefront of
										industry advancements and technological
										progress.
									</p>
								</div>
							</div>
							<div className="absolute right-[15%]">
								<img src="https://digitalcenter.id/wp-content/themes/axtra/assets/images/feature/4/1.png"></img>
							</div>
						</div>
					</div>
					<div className="z-10">
						<div className="flex justify-end w-[120%]">
							<img
								decoding="async"
								src="https://digitalcenter.id/wp-content/uploads/2022/12/feature-1.jpg"
								alt="Feature Icon"
								class="items-end"
							/>
						</div>
					</div>
					<div className="self-center ml-14 w-[60%]">
						<div className="flex justify-end">
							<div className="flex-1">
								<div className="flex flex-col gap-5">
									<div className="flex-1">
										<img src="https://digitalcenter.id/wp-content/uploads/2022/12/icon-1-1.png" />
									</div>
									<div className="flex-1">
										<h3 className="font-bold">
											Innovative & Up To Date
										</h3>
										<p className="my-5">
											signifies a commitment to pioneering
											the latest technological
											advancements and trends.
										</p>
									</div>
								</div>
							</div>
							<div className="flex-1">
								<div className="flex flex-col gap-5">
									<div className="flex-1">
										<img src="https://digitalcenter.id/wp-content/uploads/2022/12/icon-2-1.png" />
									</div>
									<div className="flex-1">
										<h3 className="font-bold">
											Seamless Experience
										</h3>
										<p className="my-5">
											This commitment is pivotal in
											cultivating a sense of reliability
											and trust with clients
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
