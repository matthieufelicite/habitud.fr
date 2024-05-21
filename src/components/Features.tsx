import { ChartPieIcon, DevicePhoneMobileIcon, PencilIcon, PlusIcon } from "@heroicons/react/24/outline";

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

export default function Features() {

    return (

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
    );
}