'use client'

import { useState } from 'react'

const faqData = [
	{
		id: '01',
		question: 'Why should i choose Humestic?',
		answer: `Bottleneck mice my capacity is full, nor incentivization we need to start advertising on social media, or helicopter view, for what the. Let's put a pin in that we need to build it so that it scales, are there any leftovers in the kitchen?, if you're not hurting you're not winning loop back`,
	},
	{
		id: '02',
		question: 'I like your works, how do we start a project?',
		answer: `Bottleneck mice my capacity is full, nor incentivization we need to start advertising on social media, or helicopter view, for what the. Let's put a pin in that we need to build it so that it scales, are there any leftovers in the kitchen?, if you're not hurting you're not winning loop back`,
	},
	{
		id: '03',
		question: 'What info is required to get a quotation?',
		answer: `Bottleneck mice my capacity is full, nor incentivization we need to start advertising on social media, or helicopter view, for what the. Let's put a pin in that we need to build it so that it scales, are there any leftovers in the kitchen?, if you're not hurting you're not winning loop back`,
	},
]

const FAQSection = () => {
	const [activeIndex, setActiveIndex] = useState(null)

	const toggleAccordion = (index) => {
		setActiveIndex(index === activeIndex ? null : index)
	}

	return (
		<div className='max-w-[1920px] w-full px-4 sm:px-6 md:px-10 flex flex-col justify-center items-center'>
			<div className='w-full max-w-[1441.62px] h-[643px] flex flex-col justify-center items-center gap-10 md:gap-[80px] pb-10'>
				<div className='w-full flex flex-col lg:flex-row justify-center lg:items-start items-center gap-6 lg:gap-[80px] text-center lg:text-left'>
					<p className='text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] text-[#001C4A] font-normal w-full lg:w-[280px]'>
						Frequently asked questions
					</p>
					<h2 className='text-[#111111] font-normal text-[32px] sm:text-[40px] md:text-[50px] lg:text-[60px] w-full lg:w-[920px]'>
						Constant collaboration is how we roll. Let's see if we are a good
						fit.
					</h2>
				</div>

				<div className='w-full max-w-[1441.62px] flex flex-col items-start gap-6 md:gap-[40px]'>
					{faqData.map((item, index) => (
						<div
							key={index}
							className='w-full border-b border-[#CCCCCC] pb-6 md:pb-[20px]'
						>
							<div
								className='flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-[40px] cursor-pointer'
								onClick={() => toggleAccordion(index)}
							>
								<p className='text-[24px] sm:text-[28px] md:text-[32px] text-[#8B7D4C] font-normal'>
									{item.id}
								</p>
								<p className='flex-1 text-[24px] sm:text-[30px] md:text-[36px] lg:text-[40px] text-[#111111] font-normal'>
									{item.question}
								</p>
								<div className='text-[32px] sm:text-[36px] md:text-[40px] text-[#111111]'>
									{activeIndex === index ? '+' : '-'}
								</div>
							</div>
							{activeIndex === index && (
								<p className='mt-4 sm:mt-[20px] text-[16px] text-[#636363] font-light ml-0 sm:ml-[80px] max-w-full sm:max-w-[1210px]'>
									{item.answer}
								</p>
							)}
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default FAQSection
