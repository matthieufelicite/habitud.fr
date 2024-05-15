"use client"

import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Calendar, AlignJustify, X, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';

const navigation = [

	{ name: 'Product', href: '#' },
	{ name: 'Features', href: '#' },
	{ name: 'Marketplace', href: '#' },
	{ name: 'Company', href: '#' },
]

export default function Page() {

	const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

	return (
		<div className="bg-white">

			<header className="absolute inset-x-0 top-0 z-50">

				<nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">

					<div className="flex lg:flex-1">

						<a href="/" className="-m-1.5 p-1.5">

							<span className="sr-only">habitud.fr</span>

							<img className="h-8 w-auto" src="/logo.png" alt="logo" />
						</a>
					</div>

					<div className="flex lg:hidden">

						<button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" onClick={() => setMobileMenuOpen(true)}>

							<span className="sr-only">Open main menu</span>

							<AlignJustify className="h-6 w-6" aria-hidden="true" />
						</button>
					</div>

					<div className="hidden lg:flex lg:gap-x-12">

						{navigation.map((item) => (

							<a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900">{item.name}</a>
						))}
					</div>

					<div className="hidden lg:flex lg:flex-1 lg:justify-end">

						<a href="#" className="text-sm font-semibold leading-6 text-gray-900">Se connecter</a>
					</div>
				</nav>

				<Dialog className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>

					<div className="fixed inset-0 z-50" />

					<Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">

						<div className="flex items-center justify-between">

							<a href="#" className="-m-1.5 p-1.5">

								<span className="sr-only">habitud.fr</span>

								<img className="h-8 w-auto" src="/logo.png" alt="logo" />
							</a>
							<button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700" onClick={() => setMobileMenuOpen(false)}>

								<span className="sr-only">Close menu</span>

								<X className="h-6 w-6" aria-hidden="true" />
							</button>
						</div>

						<div className="mt-6 flow-root">

							<div className="-my-6 divide-y divide-gray-500/10">

								<div className="space-y-2 py-6">

									{navigation.map((item) => (
										<a key={item.name} href={item.href} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">{item.name}</a>
									))}
								</div>

								<div className="py-6">

									<a href="#" className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Se connecter</a>
								</div>
							</div>
						</div>
					</Dialog.Panel>
				</Dialog>
			</header>

			<div className="relative isolate px-6 pt-14 lg:px-8">

				<div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">

					<div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#5de0e6] to-[#004aad] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{
						clipPath:
							'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
					}}
					/>
				</div>

				<div className="mx-auto max-w-2xl py-[20vh]">

					<div className="hidden sm:mb-8 sm:flex sm:justify-center">

						<div className="mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-white px-7 py-2 shadow-md bacdrop-blur">

							<Calendar className="h-5 w-5" />

							<p className='text-sm font-semibold text-gray-700'>habitud bientôt disponible...</p>
						</div>
					</div>

					<div className="text-center">

						<h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
							Suivez vos habitudes en <span className='text-gradient'>quelques secondes</span>
						</h1>

						<p className="mt-6 text-lg leading-8 text-gray-600">

							<span className='text-gradient font-semibold'>habitud</span> vous permet de changer votre vie grace au pouvoir des habitudes. Construisez de bonnes habitudes et supprimez les mauvaises en <span className='text-gradient font-semibold'>quelques secondes</span> par jour.
						</p>

						<div className="mt-10 flex items-center justify-center gap-x-6">

							<Link href='/' className={buttonVariants({ size: 'lg' })}>

								Passer à l'action
							</Link>

							<Link href='/' className={buttonVariants({ size: 'lg', variant: 'ghost' })}>

								En savoir plus <ArrowRight className="ml-2 h-5 w-5" />
							</Link>
						</div>
					</div>
				</div>

				<div
					className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">

					<div
						className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#004aad] to-[#5de0e6] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style={{
							clipPath:
								'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
						}}
					/>
				</div>
			</div>
		</div>
	)
}
