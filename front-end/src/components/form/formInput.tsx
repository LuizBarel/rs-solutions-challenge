import { useState } from 'react';

import { Input } from '@/components/ui/input';

// Definindo o tipo das props
interface FormInputProps {
    errorMessage: string;
    name: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    pattern?: string;
    placeholder?: string;
    type: string;
}

export default function FormInput(props: FormInputProps) {
    // Passagem das props
    const { errorMessage, name, onChange, pattern, placeholder, type } = props;

    const [focused, setFocused] = useState(false);

    // Aplica true ao estado de setFocused quando ocorrer o onBlur, ou se houver foco no campo de confirmação de senha
    /* eslint-disable @typescript-no-unused-vars */
    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
        setFocused(true);
    };
    /* eslint-enable @typescript-no-unused-vars */

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
