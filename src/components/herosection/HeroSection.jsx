const HeroSection = () => {
	return (
		<div className='max-w-[1920px]'>
			<div className='relative max-w-[1442px] mx-auto mt-[20px] lg:mt-[80px] 2xl:mt-[190px] px-4 flex flex-col lg:flex-row justify-between h-auto lg:h-[750px]'>
				<div className='flex flex-col items-start gap-8 w-full lg:w-1/2'>
					<div className='flex flex-col md:flex-row items-start gap-8'>
						<div className='flex flex-col gap-6'>
							<h1 className='text-[80px] text-[#111111] font-medium leading-[1.1] max-w-[516px]'>
								Your AI-Powered Sales Coach
							</h1>
						</div>
					</div>

					<div className='flex flex-col md:flex-row justify-start items-center gap-8'>
						<img
							src='/images/robot3.png'
							alt='robot3'
							className='w-[204px] h-[198px] rounded-[20px]'
						/>
						<p className='text-[20px] text-[#05131DB2] font-medium max-w-[346px] text-center md:text-left'>
							Get real-time coaching, script suggestions, and deal-closing
							strategies powered by advanced AI technology.
						</p>
					</div>

					<div className='flex flex-col sm:flex-row gap-8 mt-20'>
						<div className='flex items-center gap-4 p-4 w-full sm:w-[288px]'>
							<div className='w-[89px] h-[86.78px] flex items-center justify-center bg-white shadow-lg rounded-[15.57px]'>
								<img
									src='/images/signature1.png'
									alt='signature1'
									className='w-[46.42px] h-[46.42px]'
								/>
							</div>
							<div>
								<h3 className='text-[40px] text-[#05131D] font-semibold'>
									2000+
								</h3>
								<p className='text-[20px] text-[#05131DB2] font-medium'>
									Your protection
								</p>
							</div>
						</div>

						<div className='flex items-center gap-4 p-4 w-full sm:w-[294px]'>
							<div className='w-[89px] h-[86.78px] flex items-center justify-center bg-white shadow-lg rounded-[15.57px]'>
								<img
									src='/images/signature2.png'
									alt='signature2'
									className='w-[46.42px] h-[46.42px]'
								/>
							</div>
							<div>
								<h3 className='text-[40px] text-[#05131D] font-semibold'>
									7001+
								</h3>
								<p className='text-[20px] text-[#05131DB2] font-medium'>
									Provide tailored
								</p>
							</div>
						</div>
					</div>
				</div>

				<div className='flex flex-col items-center lg:items-end w-full lg:w-1/2 mt-16 lg:mt-0'>
					<img
						src='/images/herorobot.png'
						alt='herorobot.png'
						className='w-full max-w-[583px] h-auto'
					/>

					<div className='w-full max-w-[467px] h-auto relative lg:bottom-[200px] lg:right-[220px] 2xl:right-[280px] p-6 rounded-[27px] bg-white shadow-md mt-8 lg:mt-0'>
						<div className='flex justify-between mb-4'>
							<h3 className='text-[50px] text-[#00245F] font-semibold'>721+</h3>
							<h3 className='text-[50px] text-[#00245F] font-semibold'>
								1000+
							</h3>
						</div>

						<h4 className='text-[27.98px] text-[#05131D] font-semibold mb-2'>
							Growth is our priority.
						</h4>

						<p className='text-[17px] text-[#05131DB2] font-medium'>
							As a full-service business agency, we specialize in helping
							companies of all sizes optimize their operations
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default HeroSection
