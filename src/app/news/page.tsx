import type { News } from '@/types/news'
import HotSpot from '@/components/HotSpot'
import Politics from '@/components/Politics'
import Sports from '@/components/Sports'

const hotSpot: Array<News> = [
	{
		// imgURL: '/img/news.png',
		genre: 'SPORT',
		title: 'Badminton Championship',
		user: 'ADMIN',
		date: '27 AGUSTUS 2024'
	},
	{
		imgURL: '/img/news1.png',
		genre: 'TECH',
		title: 'Implementing A Reset Password Feature With Dynamic Routes',
		user: 'ADMIN',
		date: '29 AGUSTUS 2024'
	},
	{
		imgURL: '/img/news2.png',
		genre: 'TECH',
		title: 'Implementing A Reset Password Feature With Dynamic Routes',
		user: 'ADMIN',
		date: '29 AGUSTUS 2024'
	},
	{
		imgURL: '/img/news2.png',
		genre: 'SPORT',
		title: 'Badminton Championship',
		user: 'ADMIN',
		date: '27 AGUSTUS 2024'
	},
	{
		imgURL: '/img/news.png',
		genre: 'TECH',
		title: 'Implementing A Reset Password Feature With Dynamic Routes',
		user: 'ADMIN',
		date: '29 AGUSTUS 2024'
	},
	{
		imgURL: '/img/news2.png',
		genre: 'TECH',
		title: 'Implementing A Reset Password Feature With Dynamic Routes',
		user: 'ADMIN',
		date: '29 AGUSTUS 2024'
	},
]

const rightSideNews1: Array<News> = [
	{
		title: 'UX Checklists For Interface Designers Lorem Ipsum Dolor',
		user: "ADMIN",
		date: '17 Agustus 2024'
	},
	{
		title: 'The Realities And Myths Of Contrast And Color Lorem Makan Ipsum',
		user: "ADMIN",
		date: '17 Agustus 2024'
	},
	{
		title: 'Designing Better Error Messages UX',
		user: "ADMIN",
		date: '17 Agustus 2024'
	},
]

const rightSideNews2: Array<News> = [
	{
		imgURL: '/img/sports2.png',
		genre: 'basket ball',
		title: 'Using Instagram tawo promote your',
		user: 'ADMIN',
		date: '17 Agustus 1975'
	},
	{
		imgURL: '/img/sports3.png',
		genre: 'boxing',
		title: 'Implementing Okta Authentication',
		user: 'ADMIN',
		date: '17 Agustus 1975'
	},
	{
		imgURL: '/img/sports4.png',
		genre: 'football',
		title: 'Core Web Vitals Tools To Boost Your',
		user: 'ADMIN',
		date: '17 Agustus 1975'
	},
	{
		imgURL: '/img/sports5.png',
		genre: 'politic',
		title: 'Migration From jQuery to Next.js: A Guide',
		user: 'ADMIN',
		date: '17 Agustus 1975'
	},
]

const News = () => {
	return (
		<div className='px-20 py-12'>
			<HotSpot hotSpot={hotSpot} />

			<Politics rightSideNews1={rightSideNews1} />

			<Sports rightSideNews2={rightSideNews2} />
		</div>
	)
}

export default News