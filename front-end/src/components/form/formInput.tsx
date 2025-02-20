import { useState } from 'react';

import { Input } from '@/components/ui/input';

export default function FormInput(props: any) {
    // Passagem das props
    const { errorMessage, name, onChange, pattern, placeholder, type } = props;

    const [focused, setFocused] = useState(false);

    // Aplica true ao estado de setFocused quando ocorrer o onBlur, ou se houver foco no campo de confirmação de senha
    const handleFocus = (e: any) => {
        setFocused(true);
    };

    return (
        <div>
            <Input
                name={name}
                type={type}
                placeholder={placeholder}
                pattern={pattern}
                onChange={onChange}
                onBlur={handleFocus}
                onFocus={() => name === 'confirmPassword' && setFocused(true)}
                data-focused={focused.toString()}
            />
            <span className="hidden text-red-500 text-sm mt-2">
                {errorMessage}
            </span>
        </div>
    );
}
