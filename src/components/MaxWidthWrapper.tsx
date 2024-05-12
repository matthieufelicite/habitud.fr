import { cn } from "@/lib/utils";

interface Props {

    className?: string;
    children: React.ReactNode;
}

const MaxWidthWrapper = ({ className, children }: Props) => {

    const classes: string = cn(className, 'mx-auto w-full max-w-screen-xl px-2.5 md:px-20');

    return (

        <div className={classes}>

            {children}
        </div>
    );
};

export default MaxWidthWrapper;