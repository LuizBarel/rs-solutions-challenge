// Definindo o componente para ser renderizado no lado do cliente (client side)
'use client';

import { useState } from 'react';

import { motion } from 'motion/react';

import Link from 'next/link';
import Image from 'next/image';

import brandImg from '@public/brand/rssolutions-brand.png';
import pcMokcupImg from '@public/login/pc-dashboard-mockup.png';

import FormInput from '@/components/form/formInput';
import { Button } from '@/components/ui/button';

import { IoMdEye, IoMdEyeOff } from 'react-icons/io';

export default function Register() {
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

    return (
        <main className="grid md:grid-cols-2 h-screen overflow-hidden">
            <section className="flex flex-col justify-between items-center py-6">
                <div className="2xl:w-3/4 w-11/12">
                    <Image src={brandImg} alt="Logo" width={130} />
                </div>

                <div className="2xl:w-3/5 lg:w-4/5 md:w-11/12 sm:w-4/5 w-11/12 flex flex-col justify-center gap-8 pb-16">
                    <motion.div
                        className="flex flex-col gap-4"
                        initial={{ y: 85 }}
                        animate={{ y: 0 }}
                        transition={{
                            duration: 1,
                            ease: 'easeInOut',
                        }}
                    >
                        <h1 className="text-gray-900 lg:text-4xl text-3xl font-semibold">
                            Sign Up
                        </h1>
                        <p className="text-gray-600 lg:text-lg text-md">
                            Registre-se para acessar o Seru Dashboard e
                            acompanhar seus negócios de um jeito simples!
                        </p>
                    </motion.div>

                    <form
                        className="flex flex-col gap-8"
                        onSubmit={handleSubmit}
                    >
                        <div className="flex flex-col gap-4">
                            <motion.div
                                initial={{ opacity: 0, y: 90 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 1,
                                    ease: 'easeInOut',
                                }}
                            >
                                <FormInput
                                    name="name"
                                    type="text"
                                    placeholder="Nome de Usuário"
                                    pattern="^[A-Za-z0-9]{3,16}$"
                                    onChange={onChange}
                                    errorMessage="O nome de usuário deve ter entre 3 e 16 caracteres e nenhum caractere especial"
                                />
                            </motion.div>

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

                            <motion.div
                                className="relative"
                                initial={{ opacity: 0, y: -90 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 1,
                                    ease: 'easeInOut',
                                }}
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
                            </motion.div>
                        </div>

                        <motion.div
                            initial={{ y: -75 }}
                            animate={{ y: 0 }}
                            transition={{
                                duration: 1,
                                ease: 'easeInOut',
                            }}
                        >
                            <Button className="w-full" variant="default">
                                Registrar-se
                            </Button>
                        </motion.div>
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
