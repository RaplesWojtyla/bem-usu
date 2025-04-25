import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import type { News } from "@/types/news"
import { UserCircle, CalendarCheck } from 'lucide-react'
import Image from 'next/image'


const HotSpot = ({ hotSpot }: { hotSpot: Array<News> }) => {
	return (
		<div>
			<div>
				<h2 className='text-2xl font-semibold'>Today's Hot Spot</h2>
				<div className='relative mt-1'>
					<div className='absolute left-0 right-0 top-0 h-1 bg-gray-400/35 rounded-full'></div>
					<div className='absolute left-0 right-0 h-1 w-10 bg-red-400 rounded-full'></div>
				</div>
			</div>

			<ScrollArea className='w-full rounded-md overflow-x-auto mt-8'>
				<div className='pb-4 flex gap-x-6 w-max'>
					{hotSpot.map(obj => (
						<Card key={obj.title} className='w-[21.875rem] group shrink-0 cursor-pointer hover:bg-[#00633C] hover:text-white ease-in-out transition-all duration-500 group'>
							<CardContent className='px-3 pt-3'>
								<div className='overflow-hidden h-[200px] rounded-t-lg'>
									<Image 
										className='object-cover group-hover:scale-110 transition-transform ease-in-out duration-500' 
										src={obj.imgURL ? obj.imgURL : '/img/politics_post01.png'} 
										alt='news-img' 
										width={350} 
										height={180}
									/>
								</div>
								<div className='mt-3'>
									<Badge className='bg-[#00633C] shadow-lg group-hover:text-black group-hover:bg-white transition duration-500'>{obj.genre}</Badge>

									<div className='mt-6'>
										<p className='text-lg font-semibold line-clamp-2'>{obj.title}</p>

										<div className='mt-1 flex gap-x-3 items-center'>
											<p className='inline-flex items-center text-xs gap-x-1 group-hover:text-gray-200 text-muted-foreground transition duration-500'>
												<UserCircle strokeWidth={1} width={20} />
												{obj.user}
											</p>
											<p className='inline-flex items-center justify-center text-xs gap-x-1 group-hover:text-gray-200 text-muted-foreground transition duration-500'>
												<CalendarCheck strokeWidth={1} width={20} />
												<span>{obj.date}</span>
											</p>
										</div>
									</div>
								</div>
							</CardContent>
						</Card>
					))}
				</div>

				<ScrollBar orientation='horizontal' />
			</ScrollArea>
		</div>
	)
}

export default HotSpot