import Footer from '@/components/Footer'
import CallToAction from '@/components/CallToAction'
import Pricing from '@/components/Pricing'
import Team from '@/components/Team'
import Features from '@/components/Features'
import Hero from '@/components/Hero'
import Header from '@/components/Header'

export default function Page() {

	return (

		<div className="bg-white">

			<Header />

			<main className="isolate">

				<Hero />

				<Features />

				<Pricing />

				<Team />

				<CallToAction />
			</main >

			<Footer />
		</div>
	)
}
