import { Calendar } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import type { News } from '@/types/news'
import Image from 'next/image'

const Sports = ({ rightSideNews2 }: { rightSideNews2: Array<News> }) => {
	return (
		<div className='mt-20'>
			<div>
				<h2 className='text-2xl font-semibold'>Sports</h2>
				<div className='relative'>
					<div className='absolute left-0 right-0 top-0 h-1 rounded-full bg-gray-400/35 mt-1'></div>
					<div className='absolute left-0 right-0 top-0 h-1 w-10 rounded-full bg-red-400 mt-1'></div>
				</div>
			</div>

			<div className='w-full h-[650px] flex mt-8'>
				<div className='w-fit'>
					<div className='overflow-hidden w-[830px] rounded-md'>
						<Image 
							className='object-cover hover:scale-110 transition-transform ease-in-out duration-300' 
							src={'/img/sports1.png'} 
							alt='sports-img' 
							width={830} 
							height={378}
						/>
					</div>

					<div className='mt-4 flex flex-col gap-2'>
						<Badge variant={'outline'} className='w-fit uppercase text-gray-500 font-semibold cursor-pointer'>Swimming</Badge>
						<p className='text-2xl font-bold max-w-[830px] line-clamp-2'>
							How To Protect Your App With Threat Model Based On w To Protect Your App With Based
						</p>
						<p className='flex gap-x-1 text-sm font-semibold items-center text-gray-500'>
							<Calendar strokeWidth={1} size={20} />
							17 Agustus 2024
						</p>
					</div>
				</div>

				<Separator orientation='vertical' className='mx-8' />

				<ScrollArea className=''>
					<div className='flex flex-col gap-5 w-full'>
						{rightSideNews2.map((obj, idx) => (
							<div className='group mr-3' key={obj.title}>
								<div className='flex gap-4 group-hover:bg-[#00633C] rounded-sm p-4 transition ease-in duration-300'>
									<div className='relative w-[130px] h-[130px] overflow-hidden rounded-sm'>
										<Image 
											className='object-cover hover:scale-110 transition-transform ease-in-out duration-300' 
											src={obj.imgURL ?? '/img/sports1.png'} 
											alt='sports-img' 
											fill
											sizes='130px'
										/>
									</div>

									<div className='flex flex-col gap-2 py-1'>
										<Badge variant={'outline'} className='uppercase cursor-pointer w-fit text-gray-500 group-hover:text-gray-200 hover:shadow-[2px_2px_0px_rgba(255,255,255,1)] transition ease-linear duration-200 font-semibold'>{obj.genre}</Badge>
										<p className='text-lg font-semibold text-gray-800 group-hover:text-gray-200 line-clamp-2'>
											{obj.title}
										</p>
										<p className='flex items-center gap-2 text-gray-400 group-hover:text-gray-300 font-semibold'>
											<Calendar strokeWidth={1} size={20} />
											{obj.date}
										</p>
									</div>
								</div>

								{idx !== rightSideNews2.length - 1 && <Separator className='mt-5' />}
							</div>
						))}
					</div>
				</ScrollArea>
			</div>
		</div>
	)
}

export default Sports