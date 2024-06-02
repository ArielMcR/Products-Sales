import { useForm } from "react-hook-form"
import { useRef, useState } from "react"
import Header from "../Header"
// import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
// import { Button } from "../ui/button"
import Footer from "../Footer/Footer"
import { NumericFormat } from "react-number-format"
export default function ListarProdutos() {



    // const formValues = useForm()


    return (
        <>
            <Header />
            <section className="grid grid-cols-4 gap-2 h-full bg-sky-500">
                <div className="form-esquerda col-span-1 rounded-sm bg-gray-200 mt-20 flex flex-col items-center">
                    <form action="" className="m-5">
                        <label htmlFor="nome">Filtrar por Nome</label>
                        <br />
                        <input type="text" name="nome" />
                        <br />
                        <label htmlFor="produto">Selecione o produto</label>
                        <br />
                        <select name="produto" id="" className="mt-2 w-52 text-black">
                            <option value="" selected>Camiseta</option>
                            <option value="">Tênis</option>
                            <option value="" >Bermuda</option>
                            <option value="" >Skate</option>
                        </select>
                        <br />
                        <div className="mt-2">
                            <label htmlFor="tamanho">Tamanho</label>
                            <br />
                            <input type="radio" name="tamanho" value="P" id="" className="ring-black ring-1" /><label htmlFor="P" className="pl-2">P</label><br />
                            <input type="radio" name="tamanho" value="M" id="" /><label htmlFor="M" className="pl-2">M</label><br />
                            <input type="radio" name="tamanho" value="G" id="" /><label htmlFor="G" className="pl-2">G</label><br />
                        </div>
                        <div className="mt-2">
                            <label htmlFor="sexo" className="mt-3">Sexo</label><br />
                            <input type="radio" name="sexo" id="" value="masculino" /><label htmlFor="sexo" className="pl-2">Masculino</label><br />
                            <input type="radio" name="sexo" id="" value="feminino" /><label htmlFor="sexo" className="pl-2">Feminino</label><br />
                            <input type="radio" name="sexo" id="" value="unisex" /><label htmlFor="sexo" className="pl-2">Unisex</label><br />
                        </div>
                        <br />
                        <label htmlFor="">Filtrar por preço</label><br />
                        <span className="mr-2">De</span>
                        <NumericFormat
                            thousandSeparator="."
                            decimalSeparator=","
                            prefix={'R$ '}
                            decimalScale={2}
                            fixedDecimalScale={true}
                            allowNegative={false}
                            inputMode="numeric"
                            name="minimo"
                            className="ml-2 w-32"

                        />
                        <span className="ml-2">Até</span>
                        <NumericFormat
                            thousandSeparator="."
                            decimalSeparator=","
                            prefix={'R$ '}
                            decimalScale={2}
                            fixedDecimalScale={true}
                            allowNegative={false}
                            inputMode="numeric"
                            name="minimo"
                            className="ml-2 w-32"

                        />



                    </form>
                    <div className="bg-gray-100 w-20 cursor-pointer text-center">
                        <button type="submit">Filtrar</button>
                    </div>
                </div>
                <div className="produtos col-span-3 bg-yellow-500">
                    teste
                </div>
            </section>
            <Footer />
        </>
    )

}

