"use client"

import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import {
	Bars3Icon,
	XMarkIcon,
	ArrowRightIcon,
	PlusIcon,
	PencilIcon,
	ChartPieIcon,
	DevicePhoneMobileIcon
} from '@heroicons/react/24/outline'
import { CheckIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import Footer from '@/components/Footer'
import CallToAction from '@/components/CallToAction'
import Pricing from '@/components/Pricing'
import Team from '@/components/Team'

const header = [

	{
		name: 'Service',
		href: '#'
	},
	{
		name: 'Tarifs',
		href: '#'
	},
	{
		name: 'Qui sommes nous ?',
		href: '#'
	}
]

const features = [
	{
		name: "Ajout d'habitudes",
		description:
			"Ajoutez jusqu'à 3 habitudes avec le plan débutant et autant que vous le souhaitez avec le plan expert.",
		icon: PlusIcon,
	},
	{
		name: 'Application mobile',
		description:
			"Téléchargez l'application mobile habitud pour un suivi encore plus rapide.",
		icon: DevicePhoneMobileIcon,
	},
	{
		name: 'Suivi des habitudes',
		description:
			"Il vous suffit que quelques secondes par jour pour marquer vos habitudes comme faite ou pas.",
		icon: PencilIcon,
	},
	{
		name: 'Statistiques avancées',
		description:
			'Le plan premium inclut la possibilité de consulter des statistiques avancées sur vos habitudes.',
		icon: ChartPieIcon,
	},
]


const faqs = [
	{
		id: 1,
		question: "What's the best thing about Switzerland?",
		answer:
			"I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
	},
	// More questions...
]

const footer = {

	main: [

		{
			name: 'Mentions légales',
			href: '/mentionslegales'
		},
		{
			name: "Conditions générales d'utilisation",
			href: '/cgu'
		},
		{
			name: 'Conditions générales de vente',
			href: '/cgv'
		},
		{
			name: 'Politique de confidentialité',
			href: '/privacy'
		},
		{
			name: 'Politique de cookies',
			href: '/cookies'
		}
	],
	social: [

		{
			name: 'Facebook',
			href: '#',
			icon: (props: any) => (
				<svg fill="currentColor" viewBox="0 0 24 24" {...props}>
					<path
						fillRule="evenodd"
						d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
						clipRule="evenodd"
					/>
				</svg>
			),
		},
		{
			name: 'Instagram',
			href: '#',
			icon: (props: any) => (
				<svg fill="currentColor" viewBox="0 0 24 24" {...props}>
					<path
						fillRule="evenodd"
						d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
						clipRule="evenodd"
					/>
				</svg>
			),
		},
		{
			name: 'X',
			href: '#',
			icon: (props: any) => (
				<svg fill="currentColor" viewBox="0 0 24 24" {...props}>
					<path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
				</svg>
			),
		},
		{
			name: 'GitHub',
			href: '#',
			icon: (props: any) => (
				<svg fill="currentColor" viewBox="0 0 24 24" {...props}>
					<path
						fillRule="evenodd"
						d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
						clipRule="evenodd"
					/>
				</svg>
			),
		},
		{
			name: 'YouTube',
			href: '#',
			icon: (props: any) => (
				<svg fill="currentColor" viewBox="0 0 24 24" {...props}>
					<path
						fillRule="evenodd"
						d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
						clipRule="evenodd"
					/>
				</svg>
			),
		},
	],
}




export default function Page() {

	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (

		<div className="bg-white">
			{/* Header */}
			<header className="absolute inset-x-0 top-0 z-50">

				<nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">

					<div className="flex lg:flex-1">

						<Link href="/" className="-m-1.5 p-1.5">

							<span className="sr-only">habitud.fr</span>

							<img className="h-8 w-auto" src="/logo.svg" alt="" />
						</Link>
					</div>

					<div className="flex lg:hidden">

						<button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" onClick={() => setMobileMenuOpen(true)}>

							<span className="sr-only">Open main menu</span>

							<Bars3Icon className="h-6 w-6" aria-hidden="true" />
						</button>
					</div>

					<div className="hidden lg:flex lg:gap-x-12">

						{header.map((item) => (

							<Link key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900">{item.name}</Link>
						))}
					</div>

					<div className="hidden lg:flex lg:flex-1 gap-2 lg:justify-end">

						<Link href="#" className={buttonVariants({ variant: "ghost" })}>

							Se connecter
						</Link>

						<Link href="#" className={buttonVariants({ variant: "default" })}>

							Créer un compte <ArrowRightIcon className='ml-2 h-5 w-5' />
						</Link>
					</div>
				</nav>

				<Dialog className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>

					<div className="fixed inset-0 z-50" />

					<Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">

						<div className="flex items-center justify-between">

							<Link href="#" className="-m-1.5 p-1.5">

								<span className="sr-only">habitud.fr</span>

								<img className="h-8 w-auto" src="/logo.svg" alt="" />
							</Link>

							<button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700" onClick={() => setMobileMenuOpen(false)}>

								<span className="sr-only">Close menu</span>

								<XMarkIcon className="h-6 w-6" aria-hidden="true" />
							</button>
						</div>

						<div className="mt-6 flow-root">

							<div className="-my-6 divide-y divide-gray-500/10">

								<div className="space-y-2 py-6">

									{header.map((item) => (

										<Link key={item.name} href={item.href} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
											{item.name}
										</Link>
									))}
								</div>

								<div className="py-6 flex flex-col gap-2">

									<Link href="#" className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-accent hover:text-accent-foreground">

										Se connecter
									</Link>

									<Link href="#" className="-mx-3 flex items-center rounded-lg px-3 py-2.5 text-base font-semibold leading-7 bg-primary text-primary-foreground hover:bg-primary/90">

										Créer un compte <ArrowRightIcon className='ml-2 h-5 w-5' />
									</Link>
								</div>
							</div>
						</div>
					</Dialog.Panel>
				</Dialog>
			</header>

			<main className="isolate">
				{/* Hero section */}
				<div className="relative pt-14">

					<div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true" >

						<div
							className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#5de0e6] to-[#004aad] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{

								clipPath:
									'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
							}}
						/>
					</div>

					<div className="py-24 sm:py-32">

						<div className="mx-auto max-w-7xl px-6 lg:px-8">

							<div className="mx-auto max-w-2xl text-center">

								<h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">

									Suivez vos habitudes en <span className='text-gradient'>quelques secondes</span>
								</h1>

								<p className="mt-6 text-lg leading-8 text-gray-600">

									<span className='text-gradient font-semibold'>habitud</span> vous permet de changer votre vie grace au pouvoir des habitudes. Construisez de bonnes habitudes et supprimez les mauvaises en <span className='text-gradient font-semibold'>quelques secondes</span> par jour.
								</p>

								<div className="mt-10 flex items-center justify-center gap-x-6">

									<Link href="#" className={buttonVariants({ variant: "default", size: 'lg' })}>

										Passer à l'action
									</Link>

									<Link href="#" className={buttonVariants({ variant: "ghost", size: 'lg' })}>

										En savoir plus <ArrowRightIcon className='h-5 w-5 ml-2' />
									</Link>
								</div>
							</div>
						</div>
					</div>

					<div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">

						<div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#004aad] to-[#5de0e6] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style={{

							clipPath:
								'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
						}}
						/>
					</div>
				</div>

				{/* Feature section */}
				<div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-56 lg:px-8">

					<div className="mx-auto max-w-2xl lg:text-center">

						<h2 className="text-base font-semibold leading-7 text-gradient">Suivi d'habitudes</h2>

						<p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">

							Le suivi d'habitude simple et rapide
						</p>

						<p className="mt-6 text-lg leading-8 text-gray-600">

							<span className='text-gradient font-semibold'>habitud</span> est une plateforme qui vous aide à suivre vos habitudes quotidiennes de la manière la plus <span className='text-gradient font-semibold'>simple</span> possible sans y passer plus de <span className='text-gradient font-semibold'>quelques secondes</span> par jour.
						</p>
					</div>

					<div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">

						<dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">

							{features.map((feature) => (

								<div key={feature.name} className="relative pl-16">

									<dt className="text-base font-semibold leading-7 text-gray-900">

										<div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-gradient">

											<feature.icon className="h-6 w-6 text-white" aria-hidden="true" />

										</div>

										{feature.name}
									</dt>

									<dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
								</div>
							))}
						</dl>
					</div>
				</div>

				<Pricing />

				<Team />

				<CallToAction />
			</main >

			<Footer />
		</div>
	)
}
