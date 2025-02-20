import * as React from 'react';

import { cn } from '@/lib/utils';

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<'input'>>(
    ({ className, type, ...props }, ref) => {
        return (
            <input
                type={type}
                className={cn(
                    'flex w-full text-gray-900 rounded-lg border border-gray-200 bg-gray-100 p-4 transition-colors lg:placeholder:text-md placeholder:text-sm placeholder:text-gray-400 focus-visible:outline-none focus-visible:border-gray-600 focus-visible:ring-ring hover:border-gray-400 disabled:cursor-not-allowed disabled:opacity-50 lg:text-md text-sm',
                    className,
                )}
                ref={ref}
                {...props}
                required
            />
        );
    },
);
Input.displayName = 'Input';

export { Input };
