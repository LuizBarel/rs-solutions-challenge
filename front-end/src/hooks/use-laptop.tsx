import * as React from 'react';

const LAPTOP_BREAKPOINT = 1024;

export function useIsLaptop() {
    const [isLaptop, setIsLaptop] = React.useState<boolean | undefined>(
        undefined,
    );

    React.useEffect(() => {
        const mql = window.matchMedia(
            `(max-width: ${LAPTOP_BREAKPOINT - 1}px)`,
        );
        const onChange = () => {
            setIsLaptop(window.innerWidth < LAPTOP_BREAKPOINT);
        };
        mql.addEventListener('change', onChange);
        setIsLaptop(window.innerWidth < LAPTOP_BREAKPOINT);
        return () => mql.removeEventListener('change', onChange);
    }, []);

    return !!isLaptop;
}
