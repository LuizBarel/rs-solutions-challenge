import * as React from 'react';

import { cn } from '@/lib/utils';

import { LuCornerDownRight } from 'react-icons/lu';

const Table = React.forwardRef<
    HTMLTableElement,
    React.HTMLAttributes<HTMLTableElement>
>(({ className, ...props }, ref) => (
    <table
        ref={ref}
        className={cn('relative w-full caption-bottom text-sm', className)}
        {...props}
    />
));
Table.displayName = 'Table';

const TableHeader = React.forwardRef<
    HTMLTableSectionElement,
    React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
    <thead ref={ref} className={cn('[&_tr]:border-b', className)} {...props} />
));
TableHeader.displayName = 'TableHeader';

const TableBody = React.forwardRef<
    HTMLTableSectionElement,
    React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
    <tbody
        ref={ref}
        className={cn('[&_tr:last-child]:border-0', className)}
        {...props}
    />
));
TableBody.displayName = 'TableBody';

const TableFooter = React.forwardRef<
    HTMLTableSectionElement,
    React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
    <tfoot
        ref={ref}
        className={cn(
            'border-t bg-muted/50 font-medium [&>tr]:last:border-b-0',
            className,
        )}
        {...props}
    />
));
TableFooter.displayName = 'TableFooter';

const TableRow = React.forwardRef<
    HTMLTableRowElement,
    React.HTMLAttributes<HTMLTableRowElement> & {
        header?: boolean;
        subrow?: boolean;
    }
>(({ header = false, subrow = false, className, ...props }, ref) => (
    <tr
        ref={ref}
        className={cn(
            'bg-primary-50 border-b border-primary-100 transition-colors hover:bg-primary-100 font-medium data-[state=selected]:bg-muted',
            header ? 'bg-primary-500 text-gray-50 hover:bg-primary-500' : '',
            subrow ? 'text-gray-600 font-normal' : '',
            className,
        )}
        {...props}
    />
));
TableRow.displayName = 'TableRow';

const TableHead = React.forwardRef<
    HTMLTableCellElement,
    React.ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
    <th
        ref={ref}
        className={cn(
            'h-10 px-3 py-3 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]',
            className,
        )}
        {...props}
    />
));
TableHead.displayName = 'TableHead';

const TableCell = React.forwardRef<
    HTMLTableCellElement,
    React.TdHTMLAttributes<HTMLTableCellElement> & {
        icon?: boolean;
    }
>(({ icon = false, children, className, ...props }, ref) => {
    if (icon) {
        return (
            <td
                ref={ref}
                className={cn(
                    'flex gap-2 px-3 py-4 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]',
                    className,
                )}
                {...props}
            >
                <LuCornerDownRight size={18} />
                {children}
            </td>
        );
    }

    return (
        <td
            ref={ref}
            className={cn(
                'px-3 py-4 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]',
                className,
            )}
            {...props}
        >
            {children}
        </td>
    );
});
TableCell.displayName = 'TableCell';

const TableCaption = React.forwardRef<
    HTMLTableCaptionElement,
    React.HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...props }, ref) => (
    <caption
        ref={ref}
        className={cn('mt-4 text-sm text-muted-foreground', className)}
        {...props}
    />
));
TableCaption.displayName = 'TableCaption';

export {
    Table,
    TableHeader,
    TableBody,
    TableFooter,
    TableHead,
    TableRow,
    TableCell,
    TableCaption,
};
