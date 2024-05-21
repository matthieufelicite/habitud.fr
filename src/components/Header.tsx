"use client"

import { ArrowRightIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import { useState } from "react";
import { buttonVariants } from "./ui/button";
import { Dialog } from '@headlessui/react'

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

export default function Header() {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (

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

                <div className="hidden lg:flex lg:flex-1 gap-6 lg:justify-end">

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
    );
}