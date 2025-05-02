'use client'

import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded'
import CalendarTodayRoundedIcon from '@mui/icons-material/CalendarTodayRounded'
import LoopIcon from '@mui/icons-material/Loop'
import ThumbDownOffAltRoundedIcon from '@mui/icons-material/ThumbDownOffAltRounded'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt'
import VolumeUpRoundedIcon from '@mui/icons-material/VolumeUpRounded'
import { useState } from 'react'

const ChatbotSection = () => {
	const [input, setInput] = useState('')
	const [messages, setMessages] = useState([
		{
			id: 0,
			text: "Hello! I'm your AI sales coach. How can I help you improve your sales performance today?",
			sender: 'bot',
		},
	])

	const handleSend = () => {
		if (input.trim() === '') return
		setMessages([
			...messages,
			{ id: messages.length + 1, text: input, sender: 'user' },
		])
		setInput('')
	}

	return (
		<div className='w-full max-w-[1920px] overflow-x-hidden'>
			<div className='w-full h-auto mx-auto bg-gradient-to-r from-[#103570] to-[#004FCE] py-20 px-4 text-white'>
				<div className='w-full max-w-screen-xl mx-auto flex flex-col gap-16'>
					<div className='w-full flex flex-col gap-5'>
						<p className='text-xl sm:text-2xl text-[#FCE38A] font-normal'>
							Live Ai Coach
						</p>
						<h4 className='text-3xl sm:text-5xl lg:text-6xl leading-tight font-normal text-white break-words'>
							Take a Suggestion Coaching
						</h4>
					</div>
					<div className='w-full flex flex-col lg:flex-row gap-6'>
						<div className='w-full lg:w-2/3 h-[577px] max-h-[577px] flex flex-col sm:flex-row justify-center items-center gap-6'>
							<div className='w-full h-[577px] max-h-[577px] rounded-xl border border-[#CDCDCD] bg-[#F2F3F3] flex flex-col justify-between'>
								<div className='w-full h-[62px] pt-4 flex items-center gap-6 rounded-t-xl bg-white px-8'>
									<p className='text-lg text-[#1B1B1B] font-bold'>
										AI Sales Coach
									</p>
								</div>

								<div className='flex-1 px-5 pt-6 flex flex-col gap-4 overflow-y-auto'>
									{messages.map((msg) => (
										<div
											key={msg.id}
											className={`flex ${
												msg.sender === 'user' ? 'justify-end' : 'justify-start'
											} items-start gap-4`}
										>
											{msg.sender === 'bot' && (
												<div className='w-10 h-10 rounded-full bg-[#D9D9D9]' />
											)}
											<div
												className={`w-fit max-w-[80%] rounded-md px-6 py-2 text-base sm:text-lg ${
													msg.sender === 'user'
														? 'bg-[#002868] text-white'
														: 'bg-white text-[#181818]'
												}`}
											>
												<p>{msg.text}</p>
											</div>
										</div>
									))}
								</div>

								<div className='w-full bg-white rounded-b-xl pt-4 px-6 flex flex-col gap-4 pb-4'>
									<div className='flex flex-wrap gap-3'>
										{[
											'How do I handle objections?',
											'Give me a cold email template',
											'Closing techniques',
											'Negotiation tips',
										].map((text, i) => (
											<div
												key={i}
												className='rounded-full bg-[#00286814] px-5 py-3 text-sm text-[#002868] cursor-pointer'
												onClick={() => setInput(text)}
											>
												{text}
											</div>
										))}
									</div>
									<div className='flex flex-col sm:flex-row gap-3'>
										<input
											type='text'
											value={input}
											onChange={(e) => setInput(e.target.value)}
											placeholder='Ask anything you need'
											className='w-full sm:w-5/6 h-12 rounded border border-[#E5E7EB] py-2.5 px-4 text-sm text-[#002868] bg-white'
										/>
										<button
											onClick={handleSend}
											className='w-full sm:w-1/6 h-12 rounded bg-[#002868] flex items-center justify-center text-white text-base cursor-pointer font-medium'
										>
											Send
											<span>
												<ArrowUpwardRoundedIcon />
											</span>
										</button>
									</div>
								</div>
							</div>

							<div className='hidden md:flex w-[83px] h-[328px] rounded-full border border-[#4E4E4E1A] p-6 flex-col justify-center items-center gap-10 text-[#292929] bg-[#F2F3F3]'>
								<LoopIcon />
								<ThumbUpOffAltIcon />
								<ThumbDownOffAltRoundedIcon />
								<CalendarTodayRoundedIcon />
								<VolumeUpRoundedIcon />
							</div>
						</div>

						<div className='w-full lg:w-1/3 h-[577px] max-h-[577px] flex flex-col gap-6'>
							<div className='w-full h-[328px] max-h-[328px] flex flex-col gap-5 rounded-2xl p-6 bg-[#EFEFEF]'>
								<p className='text-2xl font-bold text-[#323232]'>
									Real-time Analysis
								</p>

								<div className='w-full rounded-xl border border-[#E7E7E7] p-4 bg-white flex flex-col gap-3'>
									<div className='flex items-center gap-2'>
										<img
											src='/images/checkcircle.png'
											alt='checkcircle.png'
											className='h-6 w-6'
										/>
										<h6 className='text-lg text-[#171D25]'>Confidence Level</h6>
									</div>
									<div className='flex items-center gap-3'>
										<div className='w-full h-2 bg-[#DFDFDF] rounded-full overflow-hidden'>
											<div className='w-[60%] h-2 bg-[#44D618] rounded-full' />
										</div>
										<p className='text-sm text-[#6D6D6D]'>60%</p>
									</div>
								</div>

								<div className='w-full rounded-xl border border-[#E7E7E7] p-4 bg-white flex flex-col gap-3'>
									<div className='flex items-center gap-2'>
										<img
											src='/images/stats.png'
											alt='stats'
											className='w-6 h-6'
										/>
										<h5 className='text-lg text-[#171D25]'>Confidence Level</h5>
									</div>
									<p className='text-base text-[#909090]'>
										85% improvement in objection handling
									</p>
								</div>
							</div>

							<div className='w-full h-[328px] max-h-[328px] rounded-2xl p-6 bg-[#EFEFEF] flex flex-col gap-5'>
								<p className='text-2xl font-bold text-[#323232]'>
									Quick Actions
								</p>
								<div className='flex flex-col sm:flex-row gap-5'>
									<div className='w-full sm:w-1/2 h-24 border border-[#E7E7E7] rounded-lg bg-white p-4 flex flex-col gap-2'>
										<img
											src='/images/vector1.png'
											alt='vector1'
											className='w-8 h-8'
										/>
										<p className='text-base font-semibold text-[#171D25]'>
											Generate Script
										</p>
									</div>
									<div className='w-full sm:w-1/2 h-24 border border-[#E7E7E7] rounded-lg bg-white p-4 flex flex-col gap-2'>
										<img
											src='/images/vector2.png'
											alt='vector2'
											className='w-8 h-8'
										/>
										<p className='text-base font-semibold text-[#171D25]'>
											Practice Pitch
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>{' '}
				</div>
			</div>
		</div>
	)
}

export default ChatbotSection
