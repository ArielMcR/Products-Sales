import '../../index.css'
import React, { useRef, useState } from 'react'
import { IoMdCube } from "react-icons/io";
import { Link } from 'react-router-dom';
import { FaEye, FaEyeSlash, FaHeart } from "react-icons/fa";
import { api } from '../../Services/api'
import { toast, ToastContainer } from "react-toastify"
import { useNavigate } from "react-router-dom"
export default function Login() {
    const navigate = useNavigate()
    const refEmail = useRef(null);
    const refSenha = useRef(null);
    const [eyesClose, setEyesClose] = useState(false)
    const toggleShow = () => {
        if (refSenha.current.type === "password") {
            setEyesClose(!eyesClose)
            refSenha.current.type = 'text'
        } else {
            setEyesClose(false)
            refSenha.current.type = 'password'
        }
    }
    const HandleSubmit = async (event) => {
        event.preventDefault();
        if (!refEmail.current?.value || !refSenha.current?.value) { return }
        try {
            const res = await api.post('/Client/Login', {
                email: refEmail.current?.value,
                senha: refSenha.current?.value
            })
            if (res.data.msg) {
                toast.error(res.data.msg)
                return
            } else {
                console.log(res.data.token)
                localStorage.setItem(
                    "notification", "Login Realizado com sucesso",
                    "token", res.data.token
                )
                navigate("/")
            }
        } catch (error) {
            toast.error("Erro interno do servidor, tente novamente")

        }
    }
    return (
        <>
            <ToastContainer

                limit={1} />
            <div className="w-full min-h-screen bg-[url('https://images.pexels.com/photos/5158234/pexels-photo-5158234.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover object-cover  bg-no-repeat flex justify-center bg-opacity-75 ">
                <div className="flex md:w-5/12 h-full  bg-white rounded-3xl bg-opacity-25 backdrop-blur-md flex-col justify-center px-8 py-12 mt-12 lg:px-8 w-full ">
                    <Link to={"/"}>
                        <div className="sm:mx-auto sm:w-full sm:max-w-sm flex items-center justify-center">
                            <IoMdCube size={75} color={'#0C0624'} />
                            <span className="font-personalizada text-8xl ml-4 text-black">Cubiist</span>

                        </div>
                    </Link>
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Entre na sua conta </h2>

                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                        <form className="space-y-6" onSubmit={HandleSubmit}>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-200">Email</label>
                                <div className="mt-2">
                                    <input id="email" name="email" type="email" autoComplete="email" required placeholder="Digite seu email" ref={refEmail} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center justify-between">
                                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-200">Senha</label>

                                    <div className="text-sm">
                                        <Link to={"/User/ForgetPassword"} className="font-semibold text-indigo-600 hover:text-gray-100">Esqueceu sua senha ?</Link>
                                    </div>
                                </div>
                                <div className="mt-2 flex">
                                    <input id="password" name="password" type="password" autoComplete="current-password" ref={refSenha} placeholder="Digite sua senha" required className="block w-full rounded-md rounded-e-none border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 "

                                    />
                                    <button type='Button' className="bg-gray-100 rounded-e-md w-10 flex justify-center items-center" onClick={toggleShow}>
                                        {eyesClose ? <FaEye size={20} /> : <FaEyeSlash size={20} />}
                                    </button>
                                </div>
                            </div>

                            <div>
                                <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-950 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-200 opacity-100">Entrar</button>
                            </div>
                        </form>

                        <p className="mt-10 text-center text-sm text-gray-100">
                            Não tem conto ainda ?
                            <Link to={"/Client/Register"} className="font-semibold leading-6 text-indigo-950 hover:text-indigo-900"> Cadastre-se aqui </Link>
                        </p>

                        <div className="mt-10 text-center">
                            <p>
                                Created by <span className="font-HomePage">Everleast</span>
                            </p>
                        </div>

                    </div>
                </div>
            </div >
        </>
    )

}