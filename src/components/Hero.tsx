import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { ArrowRightIcon } from "@heroicons/react/16/solid";

export default function Hero() {

    return (

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
    );
}