const CourseSection = () => {
	return (
		<div className='max-w-[1920px] w-full flex flex-col justify-center items-center px-4 2xl:px-0'>
			<div className='max-w-[1441.62px] w-full h-auto flex flex-col items-center gap-[60px] pb-[120px] px-4 lg:px-0'>
				<div className='w-full max-w-[1441.62px] h-auto flex flex-col items-center gap-[48px]'>
					{/* Header */}
					<div className='w-full flex flex-col lg:flex-row items-start lg:items-end justify-between gap-[30px]'>
						<div className='w-full lg:max-w-[1029.62px] h-auto flex flex-col justify-center items-start gap-[6px]'>
							<h2 className='text-[#262626] text-[36px] lg:text-[48px] font-semibold'>
								Our Courses
							</h2>
							<p className='text-[#59595A] text-[16px] lg:text-[18px] font-normal'>
								Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam
								eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et.
								Ac cum eget habitasse in velit fringilla feugiat senectus in.
							</p>
						</div>

						<button className='w-[112px] h-[63px] rounded-[8px] bg-[#002868] text-white'>
							View All
						</button>
					</div>

					{/* Courses */}
					<div className='w-full flex flex-col lg:flex-row gap-[30px]'>
						{[1, 2].map((id) => (
							<div
								key={id}
								className='bg-[#F0F0F0] w-full lg:w-[705.81px] h-auto rounded-[15px] border border-[#F1F1F3] p-[30px] lg:p-[50px] flex flex-col gap-[30px]'
							>
								<div className='w-full flex flex-col gap-[30px]'>
									<img
										src={`/images/robot${id}.png`}
										alt={`robot${id}`}
										className='w-full h-auto max-h-[380px] object-cover rounded-[8px]'
									/>

									<div className='w-full flex flex-col sm:flex-row justify-between items-start sm:items-center gap-[20px]'>
										<div className='flex gap-[10px]'>
											<div className='min-w-[103px] h-[45px] rounded-[8px] border border-[#F1F1F3] bg-white flex justify-center items-center px-4'>
												<p className='text-[#4C4C4D] text-[18px] font-medium'>
													4 Weeks
												</p>
											</div>
											<div className='min-w-[109px] h-[45px] rounded-[8px] border border-[#F1F1F3] bg-white flex justify-center items-center px-4'>
												<p className='text-[#4C4C4D] text-[18px] font-medium'>
													Beginner
												</p>
											</div>
										</div>
										<p className='text-[#262626] text-[20px]'>By John Smith</p>
									</div>

									<div className='flex flex-col gap-[14px]'>
										<h3 className='text-[24px] text-[#262626] font-semibold'>
											Web Design Fundamentals
										</h3>
										<p className='text-[18px] text-[#4C4C4D] font-normal'>
											Learn the fundamentals of web design, including HTML, CSS,
											and responsive design principles. Develop the skills to
											create visually appealing and user-friendly websites.
										</p>
									</div>
								</div>

								<button className='w-full h-[63px] rounded-[8px] border border-[#F1F1F3] bg-[#002868] text-white cursor-pointer'>
									Get it Now
								</button>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default CourseSection
