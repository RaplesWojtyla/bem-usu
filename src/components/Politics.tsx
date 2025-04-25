import { UserCircle, Calendar, MoveUpRight } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import type { News } from "@/types/news"
import Image from 'next/image'

const Politics = ({ rightSideNews1 }: { rightSideNews1: Array<News> }) => {
	return (
		<div className='mt-16'>
			<div>
				<h2 className='text-2xl font-semibold'>Politics</h2>
				<div className='relative mt-1'>
					<div className='absolute left-0 right-0 top-0 h-1 bg-gray-400/35 rounded-full'></div>
					<div className='absolute left-0 right-0 top-0 h-1 w-10 bg-red-400 rounded-full'></div>
				</div>
			</div>

			<div className='flex justify-between h-80 w-full mt-8'>
				<div className='flex w-2/3'>
					<div className='overflow-hidden h-full rounded-md shrink-0'>
						<Image 
							className='object-cover hover:scale-110 transition-transform duration-300 ease-in-out h-full' 
							src={'/img/politics_post01.png'} 
							alt='politics-post-img' 
							width={280} 
							height={250}
						/>
					</div>

					<div className='flex flex-col justify-between px-7 py-2'>
						<div>
							<Badge variant={'outline'} className='cursor-pointer'>Politic</Badge>
							<p className='font-bold text-lg mt-4 line-clamp-2'>
								Warns Financial Institutions to be on Watch for Russian Russian Russian Russian Russian Russian Russian Russian Russian
							</p>

							<div className='flex gap-x-3 items-center my-3'>
								<p className='flex items-center text-[#6D757F] font-semibold gap-x-1 text-sm'>
									<UserCircle strokeWidth={1} size={20} />
									BY ADMIN
								</p>
								<p className='flex items-center text-[#6D757F] font-semibold gap-x-1 text-sm'>
									<Calendar strokeWidth={1} size={20} />
									17 Agustus 1975
								</p>
							</div>

							<p className='text-gray-500 line-clamp-4'>
								Browned butter browa melly ness crispy edgend software centers puddles of chocolate. Browned butter browa melly ness crispy edgend software centers puddles of chocolate. Browned butter browa melly ness crispy edgend software centers puddles of chocolate. Browned butter browa melly ness crispy edgend software centers puddles of chocolate.
							</p>
						</div>

						<Button variant={'outline'} className='uppercase mt-5 w-fit'>
							Read More
							<MoveUpRight color='red' strokeWidth={2} />
						</Button>
					</div>
				</div>

				<Separator orientation='vertical' />

				<div className='w-1/3 px-4 py-2'>
					{rightSideNews1.map((obj, idx) => (
						<div key={obj.title} className='w-full mb-2'>
							<p className='text-lg font-semibold line-clamp-2'>{obj.title}</p>
							<p className='flex items-center gap-x-2 mt-3 text-sm text-muted-foreground'>
								<Calendar strokeWidth={1} size={20} />
								{obj.date}
							</p>
							{rightSideNews1.length - 1 !== idx && <Separator className='mt-5' />}
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default Politics