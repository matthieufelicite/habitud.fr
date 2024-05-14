import Link from "next/link";

// components
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";

export default function Home() {

	return (

		<>

			<MaxWidthWrapper className="flex flex-col items-center justify-center text-center min-h-screen">

				<div className="mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-white px-7 py-2 shadow-md bacdrop-blur transition-all hover:border-gray-300 hover:bg-white/50">

					<Calendar className="h-5 w-5" />

					<p className='text-sm font-semibold text-gray-700'>habitud bientôt disponible...</p>
				</div>

				<h1 className='max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl'>

					Suivez vos habitudes en <span className='text-gradient'>quelques secondes</span>
				</h1>

				<p className='mt-5 max-w-3xl text-zinc-700 sm:text-lg'>

					<span className='text-gradient font-semibold'>habitud</span> vous permet de changer votre vie grace au pouvoir des habitudes. Construisez de bonnes habitudes et supprimez les mauvaises en <span className='text-gradient font-semibold'>quelques secondes</span> par jour.
				</p>

				<Link href='/' className={buttonVariants({ size: 'lg', className: 'mt-5' })}>

					Passer à l'action <ArrowRight className="ml-2 h-5 w-5" />
				</Link>
			</MaxWidthWrapper>
		</>
	);
}
