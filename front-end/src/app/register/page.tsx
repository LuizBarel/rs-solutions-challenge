// Definindo o componente para ser renderizado no lado do cliente (client side)
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

import { m } from 'motion/react';
import { cn } from '@/lib/utils';

import { useIsMobile } from '@/hooks/use-mobile';

import Link from 'next/link';
import Image from 'next/image';

import brandImg from '@public/brand/rssolutions-brand.png';
import pcMokcupImg from '@public/login/pc-dashboard-mockup.png';

import FormInput from '@/components/form/formInput';
import Spinner from '@/components/feedback/spinner';
import { Button } from '@/components/ui/button';

import { IoMdEye, IoMdEyeOff } from 'react-icons/io';

import { createUser } from './register-functions';

export default function Register() {
    const router = useRouter();
    const isMobile = useIsMobile();

    // Estado que a partir dele, altera o ícone do input de senha e o tipo do input de senha
    const [passwordVisibility, setPasswordVisibility] = useState(true);

    // Estado que a partir dele, altera o ícone do segundo input de senha e o tipo do segundo input de senha
    const [confirmPasswordVisibility, setConfirmPasswordVisibility] =
        useState(true);

    // Estado para armazenar o valor dos inputs
    const [inputsValue, setInputsValue] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    // Função para chamar o estado que armazena o valor dos inputs
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputsValue({ ...inputsValue, [e.target.name]: e.target.value });
    };

    // Função para prevenir o carregamento da página ao clicar no botão de registrar-se
    const handleSubmit = (e: any) => {
        e.preventDefault();
    };

    // Estado do carregamento do register
    const [isLoading, setIsLoading] = useState(false);

    // Função para criar o usuário se todos os campos forem preenchidos corretamente
    const handleRegister = async () => {
        if (
            !inputsValue.name ||
            !inputsValue.email ||
            !inputsValue.password ||
            !inputsValue.confirmPassword
        ) {
            return;
        }

        if (inputsValue.password !== inputsValue.confirmPassword) {
            return;
        }

        setIsLoading(true);

        const response = await createUser(
            inputsValue.name,
            inputsValue.email,
            inputsValue.password,
        );

        if (response) {
            localStorage.setItem('registerMessage', response);

            setIsLoading(false);
            router.push('/login');
        }
    };

    return (
        <main className="grid md:grid-cols-2 h-screen overflow-hidden">
            <section className="flex flex-col justify-between items-center py-6">
                <div className="2xl:w-3/4 w-11/12">
                    <Image src={brandImg} alt="Logo" width={130} />
                </div>

                <div className="2xl:w-3/5 lg:w-4/5 md:w-11/12 sm:w-4/5 w-11/12 flex flex-col justify-center gap-8 pb-16">
                    <m.div
                        className={cn(
                            'flex flex-col gap-4',
                            isMobile ? '!translate-y-0' : '',
                        )}
                        initial={!isMobile ? { y: 85 } : undefined}
                        animate={!isMobile ? { y: 0 } : undefined}
                        transition={
                            !isMobile
                                ? {
                                      duration: 1,
                                      ease: 'easeInOut',
                                  }
                                : undefined
                        }
                    >
                        <h1 className="text-gray-900 lg:text-4xl text-3xl font-semibold">
                            Sign Up
                        </h1>
                        <p className="text-gray-600 lg:text-lg text-md">
                            Registre-se para acessar o Seru Dashboard e
                            acompanhar seus negócios de um jeito simples!
                        </p>
                    </m.div>

                    <form
                        className="flex flex-col gap-8"
                        onSubmit={handleSubmit}
                    >
                        <div className="flex flex-col gap-4">
                            <m.div
                                className={
                                    isMobile
                                        ? '!opacity-100 !translate-y-0'
                                        : ''
                                }
                                initial={
                                    !isMobile
                                        ? { opacity: 0, y: 90 }
                                        : undefined
                                }
                                animate={
                                    !isMobile ? { opacity: 1, y: 0 } : undefined
                                }
                                transition={
                                    !isMobile
                                        ? {
                                              duration: 1,
                                              ease: 'easeInOut',
                                          }
                                        : undefined
                                }
                            >
                                <FormInput
                                    name="name"
                                    type="text"
                                    placeholder="Nome de Usuário"
                                    pattern="^[A-Za-z0-9]{3,16}$"
                                    onChange={onChange}
                                    errorMessage="O nome de usuário deve ter entre 3 e 16 caracteres e nenhum caractere especial"
                                />
                            </m.div>

                            <FormInput
                                name="email"
                                type="email"
                                placeholder="E-mail"
                                onChange={onChange}
                                errorMessage="O e-mail inserido é inválido"
                            />

                            <div className="relative">
                                <FormInput
                                    name="password"
                                    type={
                                        passwordVisibility ? 'password' : 'text'
                                    }
                                    placeholder="Senha"
                                    pattern="^[A-Za-z0-9!@#$%^&*]{8,}$"
                                    onChange={onChange}
                                    errorMessage="A senha deve ter no mínimo 8 caracteres"
                                />
                                <div
                                    className="text-gray-500 absolute top-4 right-4 cursor-pointer transition hover:text-gray-600"
                                    onClick={() =>
                                        setPasswordVisibility((prev) => !prev)
                                    }
                                >
                                    {passwordVisibility ? (
                                        <IoMdEye size={24} />
                                    ) : (
                                        <IoMdEyeOff size={24} />
                                    )}
                                </div>
                            </div>

                            <m.div
                                className={cn(
                                    'relative',
                                    isMobile
                                        ? '!opacity-100 !translate-y-0'
                                        : '',
                                )}
                                initial={
                                    !isMobile
                                        ? { opacity: 0, y: -90 }
                                        : undefined
                                }
                                animate={
                                    !isMobile ? { opacity: 1, y: 0 } : undefined
                                }
                                transition={
                                    !isMobile
                                        ? {
                                              duration: 1,
                                              ease: 'easeInOut',
                                          }
                                        : undefined
                                }
                            >
                                <FormInput
                                    name="confirmPassword"
                                    type={
                                        confirmPasswordVisibility
                                            ? 'password'
                                            : 'text'
                                    }
                                    placeholder="Confirme a sua senha"
                                    pattern={inputsValue.password}
                                    onChange={onChange}
                                    errorMessage="As senhas digitadas são diferentes"
                                />

                                <div
                                    className="text-gray-500 absolute top-4 right-4 cursor-pointer transition hover:text-gray-600"
                                    onClick={() =>
                                        setConfirmPasswordVisibility(
                                            (prev) => !prev,
                                        )
                                    }
                                >
                                    {confirmPasswordVisibility ? (
                                        <IoMdEye size={24} />
                                    ) : (
                                        <IoMdEyeOff size={24} />
                                    )}
                                </div>
                            </m.div>
                        </div>

                        <m.div
                            className={isMobile ? '!translate-y-0' : ''}
                            initial={!isMobile ? { y: -75 } : undefined}
                            animate={!isMobile ? { y: 0 } : undefined}
                            transition={
                                !isMobile
                                    ? {
                                          duration: 1,
                                          ease: 'easeInOut',
                                      }
                                    : undefined
                            }
                        >
                            <Button
                                className="w-full"
                                variant="default"
                                onClick={handleRegister}
                            >
                                {isLoading ? <Spinner /> : 'Registrar-se'}
                            </Button>
                        </m.div>
                    </form>
                </div>

                <div className="2xl:w-3/5 lg:w-4/5 md:w-11/12 sm:w-4/5 w-11/12">
                    <p className="text-gray-600 lg:text-md text-sm">
                        Já possui uma conta?
                        <Link
                            href="/login"
                            className="text-primary-700 ml-1 hover:text-primary-800 hover:underline"
                        >
                            Faça login
                        </Link>
                    </p>
                </div>
            </section>

            <section className="gradient-background relative hidden md:flex flex-col justify-center items-center text-center 2xl:gap-14 md:gap-7">
                <div className="2xl:w-3/5 lg:w-4/5 md:w-11/12 center-col gap-7">
                    <h1 className="2xl:text-6xl lg:text-5xl md:text-4xl font-semibold text-primary-100">
                        Seru Dasboard
                    </h1>
                    <p className="lg:text-lg md:text-md text-primary-100">
                        Um sistema que oferece um dashboard completo para que
                        você possa ficar a par das informações da sua empresa!
                    </p>
                </div>

                <div className="2xl:w-auto xl:w-3/4 lg:w-4/5 md:w-11/12 center">
                    <Image
                        src={pcMokcupImg}
                        alt="Mockup do Dashboard"
                        priority
                    />
                </div>

                <div className="absolute bottom-0 w-full h-[150px] black-gradient"></div>
            </section>
        </main>
    );
}
