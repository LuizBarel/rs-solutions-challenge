// Definindo o componente para ser renderizado no lado do cliente (client side)
'use client';

import { useState } from 'react';

import { m } from 'motion/react';
import { cn } from '@/lib/utils';

import { useIsMobile } from '@/hooks/use-mobile';

import Link from 'next/link';
import Image from 'next/image';

import brandImg from '@public/brand/rssolutions-brand.png';
import pcMokcupImg from '@public/login/pc-dashboard-mockup.png';

import FormInput from '@/components/form/formInput';
import { Button } from '@/components/ui/button';

import { IoMdEye, IoMdEyeOff } from 'react-icons/io';

import { authUser } from './login-functions';
import { useAuth } from '@/contexts/authContext';

export default function Login() {
    const { login } = useAuth();
    const isMobile = useIsMobile();

    // Estado que a partir dele, altera o ícone do input de senha e o tipo do input de senha
    const [passwordVisibility, setPasswordVisibility] = useState(true);

    // Estado para armazenar o valor dos inputs
    const [inputsValue, setInputsValue] = useState({
        email: '',
        password: '',
    });

    // Função para chamar o estado que armazena o valor dos inputs
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputsValue({ ...inputsValue, [e.target.name]: e.target.value });
    };

    // Função para prevenir o carregamento da página ao clicar no botão de login
    const handleSubmit = (e: any) => {
        e.preventDefault();
    };

    // Função para logar o usuário se todos os campos forem preenchidos corretamente
    const handleLogin = async () => {
        if (!inputsValue.email || !inputsValue.password) {
            return;
        }

        await authUser(inputsValue.email, inputsValue.password, login);
    };

    return (
        <main className="grid md:grid-cols-2 h-screen overflow-hidden">
            <section className="flex flex-col justify-between items-center py-12">
                <m.div
                    className={cn(
                        '2xl:w-3/4 w-11/12',
                        isMobile ? '!opacity-100 !translate-y-0' : '',
                    )}
                    initial={!isMobile ? { opacity: 0, y: -110 } : undefined}
                    animate={!isMobile ? { opacity: 1, y: 0 } : undefined}
                    transition={
                        !isMobile
                            ? {
                                  duration: 1,
                                  ease: 'easeInOut',
                              }
                            : undefined
                    }
                >
                    <Image
                        src={brandImg}
                        alt="Logo"
                        width={130}
                        placeholder="blur"
                    />
                </m.div>

                <m.div
                    className={cn(
                        '2xl:w-3/5 lg:w-4/5 md:w-11/12 sm:w-4/5 w-11/12 flex flex-col justify-center gap-8 pb-16',
                        isMobile ? '!opacity-100 !translate-x-0' : '',
                    )}
                    initial={!isMobile ? { opacity: 0, x: -200 } : undefined}
                    animate={!isMobile ? { opacity: 1, x: 0 } : undefined}
                    transition={
                        !isMobile
                            ? {
                                  duration: 1,
                                  ease: 'easeInOut',
                              }
                            : undefined
                    }
                >
                    <div className="flex flex-col gap-4">
                        <h1 className="text-gray-900 lg:text-4xl text-3xl font-semibold">
                            Sign In
                        </h1>
                        <p className="text-gray-600 lg:text-lg text-md">
                            Faça login para acessar o Seru Dashboard e
                            acompanhar seus negócios de um jeito simples!
                        </p>
                    </div>

                    <form
                        className="flex flex-col gap-8"
                        onSubmit={handleSubmit}
                    >
                        <div className="flex flex-col gap-4">
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
                                    onChange={onChange}
                                    errorMessage="Preencha este campo"
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
                        </div>

                        <Button variant="default" onClick={handleLogin}>
                            Entrar
                        </Button>
                    </form>
                </m.div>

                <m.div
                    className={cn(
                        '2xl:w-3/5 lg:w-4/5 md:w-11/12 sm:w-4/5 w-11/12',
                        isMobile ? '!opacity-100 !translate-y-0' : '',
                    )}
                    initial={!isMobile ? { opacity: 0, y: 110 } : undefined}
                    animate={!isMobile ? { opacity: 1, y: 0 } : undefined}
                    transition={
                        !isMobile
                            ? {
                                  duration: 1,
                                  ease: 'easeInOut',
                              }
                            : undefined
                    }
                >
                    <p className="text-gray-600 lg:text-md text-sm">
                        Não possui uma conta?
                        <Link
                            href="/register"
                            className="text-primary-700 ml-1 hover:text-primary-800 hover:underline"
                        >
                            Registre-se
                        </Link>
                    </p>
                </m.div>
            </section>

            <section className="gradient-background relative hidden md:flex flex-col justify-center items-center text-center 2xl:gap-14 md:gap-7">
                <m.div
                    className="2xl:w-3/5 lg:w-4/5 md:w-11/12 center-col gap-7"
                    initial={!isMobile ? { opacity: 0, x: 500 } : undefined}
                    animate={!isMobile ? { opacity: 1, x: 0 } : undefined}
                    transition={
                        !isMobile
                            ? {
                                  duration: 1,
                                  ease: 'easeInOut',
                              }
                            : undefined
                    }
                >
                    <h1 className="2xl:text-6xl lg:text-5xl md:text-4xl font-semibold text-primary-100">
                        Seru Dasboard
                    </h1>
                    <p className="lg:text-lg md:text-md text-primary-100">
                        Um sistema que oferece um dashboard completo para que
                        você possa ficar a par das informações da sua empresa!
                    </p>
                </m.div>

                <m.div
                    className="2xl:w-auto xl:w-3/4 lg:w-4/5 md:w-11/12 center"
                    initial={!isMobile ? { opacity: 0, x: 500 } : undefined}
                    animate={!isMobile ? { opacity: 1, x: 0 } : undefined}
                    transition={
                        !isMobile
                            ? {
                                  duration: 1,
                                  ease: 'easeInOut',
                              }
                            : undefined
                    }
                >
                    <Image
                        src={pcMokcupImg}
                        alt="Mockup do Dashboard"
                        priority
                    />
                </m.div>

                <div className="absolute bottom-0 w-full h-[150px] black-gradient"></div>
            </section>
        </main>
    );
}
