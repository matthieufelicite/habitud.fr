import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { ArrowRightIcon } from "@heroicons/react/16/solid";

export default function CallToAction() {

    return (

        <div className="relative -z-10 mt-32 px-6 lg:px-8">

            <div className="absolute inset-x-0 top-1/2 -z-10 flex -translate-y-1/2 transform-gpu justify-center overflow-hidden blur-3xl sm:bottom-0 sm:right-[calc(50%-6rem)] sm:top-auto sm:translate-y-0 sm:transform-gpu sm:justify-end" aria-hidden="true">

                <div className="aspect-[1108/632] w-[69.25rem] flex-none bg-gradient-to-r from-[#5de0e6] to-[#004aad] opacity-25" style={{
                    clipPath:
                        'polygon(73.6% 48.6%, 91.7% 88.5%, 100% 53.9%, 97.4% 18.1%, 92.5% 15.4%, 75.7% 36.3%, 55.3% 52.8%, 46.5% 50.9%, 45% 37.4%, 50.3% 13.1%, 21.3% 36.2%, 0.1% 0.1%, 5.4% 49.1%, 21.4% 36.4%, 58.9% 100%, 73.6% 48.6%)'
                }}
                />
            </div>

            <div className="mx-auto max-w-2xl text-center">

                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">

                    Envie de devenit une meilleure version de vous même ?
                </h2>

                <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
                    Incididunt sint fugiat pariatur cupidatat consectetur sit cillum anim id veniam aliqua proident excepteur
                    commodo do ea.

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

            <div className="absolute left-1/2 right-0 top-full -z-10 hidden -translate-y-1/2 transform-gpu overflow-hidden blur-3xl sm:block" aria-hidden="true">

                <div className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#5de0e6] to-[#004aad] opacity-30" style={{

                    clipPath:
                        'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
                />
            </div>
        </div>
    );
}