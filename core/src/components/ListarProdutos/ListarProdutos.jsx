import { ArrowDownNarrowWide, Filter, ArrowUpAZ, ArrowUpNarrowWide, ArrowDownAZ } from 'lucide-react';
import { NumericFormat } from "react-number-format";
import Footer from "../Footer/Footer";
import Header from "../Header";
import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardTitle, CardHeader } from "../ui/card";
export default function ListarProdutos() {
    const [priceMintoMax, setPriceMintoMax] = useState(0)
    const [nameAtoZ, setNameAtoZ] = useState(0)

    const [produtos, setProdutos] = useState([1, 2, 3, 4, 5, 6])

    const ChangeArrowDownWide = () => {
        if (priceMintoMax === 0) {
            return setPriceMintoMax(1)
        }
        return setPriceMintoMax(0)
    }

    const ChangeArrowUpAZ = () => {
        if (nameAtoZ === 0) {
            return setNameAtoZ(1)
        }
        return setNameAtoZ(0)
    }

    // const formValues = useForm()


    return (
        <>
            <Header />
            <section className="grid grid-cols-4 gap-2 h-full">
                <div className="form-esquerda col-span-1 rounded-sm mt-10 flex flex-col items-center ">
                    <div className="filtrar bg-sky-500 w-[23.3rem] text-center rounded-t-xl h-10">
                        <h3 className="text-white text-2xl font-normal pt-1">
                            Filtrar Produtos
                        </h3>
                    </div>
                    <div className="filtros  border-black border-x-[1px] border-b-[1px]">

                        <form action="" className="m-5">
                            <label htmlFor="marca" className="text-black "> Marca:</label><br />
                            <select className="mt-2 text-black border-black rounded-md w-52 focus:ring-sky-500 focus:border-sky-500" name="marca" id="">
                                <option value="cubiist">Loja oficial - Cubiist</option>
                            </select>
                            <br />
                            <label className="mt-2 text-black " htmlFor="nome">Filtrar por Nome:</label><br />
                            <input className="mt-2 border-black focus:ring-sky-500" type="text" name="nome" />
                            <br />
                            <label htmlFor="produto" className="mt-2 text-black ">Selecione o produto</label>
                            <br />
                            <select name="produto" id="" className="mt-2 w-52 text-black focus:ring-sky-500 border-black ">
                                <option value="" selected>Camiseta</option>
                                <option value="">Tênis</option>
                                <option value="" >Bermuda</option>
                                <option value="" >Skate</option>
                            </select>
                            <br />
                            <div className="mt-2 text-black">
                                <label htmlFor="tamanho">Tamanho</label>
                                <br />
                                <input type="radio" name="tamanho" value="P" id="" className="text-sky-500 focus:ring-sky-500" /><label htmlFor="P" className="pl-2">P</label><br />
                                <input type="radio" name="tamanho" value="M" id="" className="text-sky-500 focus:ring-sky-500" /><label htmlFor="M" className="pl-2">M</label><br />
                                <input type="radio" name="tamanho" value="G" id="" className="text-sky-500 focus:ring-sky-500" /><label htmlFor="G" className="pl-2">G</label><br />
                            </div>
                            <div className="mt-2 text-black ">
                                <label htmlFor="sexo" className="mt-3">Sexo</label><br />
                                <input type="radio" name="sexo" id="" value="masculino" className="text-sky-500 focus:ring-sky-500" /><label htmlFor="sexo" className="pl-2">Masculino</label><br />
                                <input type="radio" name="sexo" id="" value="feminino" className="text-violet-500 focus:ring-violet-500" /><label htmlFor="sexo" className="pl-2">Feminino</label><br />
                                <input type="radio" name="sexo" id="" value="unisex" className="text-sky-500 focus:ring-sky-500" /><label htmlFor="sexo" className="pl-2">Unisex</label><br />
                            </div>
                            <br />
                            <label htmlFor="minimo" className="mt-2 text-black">Filtrar por preço:</label><br />
                            <div className="mt-2">

                                <span className="mr-2 text-black">De</span>
                                <NumericFormat
                                    thousandSeparator="."
                                    decimalSeparator=","
                                    prefix={'R$ '}
                                    decimalScale={2}
                                    fixedDecimalScale={true}
                                    allowNegative={false}
                                    inputMode="numeric"
                                    name="minimo"
                                    className="ml-2 w-32 focus:border-sky-500 focus:ring-sky-500 rounded-lg"
                                    placeholder="R$ 0,00"

                                />
                                <span className="ml-2 text-black">Até</span>

                                <NumericFormat
                                    thousandSeparator="."
                                    decimalSeparator=","
                                    prefix={'R$ '}
                                    decimalScale={2}
                                    fixedDecimalScale={true}
                                    allowNegative={false}
                                    inputMode="numeric"
                                    name="maximo"
                                    className="ml-2 w-32 focus:border-sky-500 focus:ring-sky-500"
                                    placeholder="R$ 10.000,00"

                                />
                            </div>
                            <div className="bg-sky-500 w-32 cursor-pointer mt-10 rounded-xl text-white hover:bg-indigo-500">
                                <button type="submit" className="h-10 ml-7 flex items-center justify-center text-xl font-sans">Filtrar <span className="ml-2"><Filter size={23} strokeWidth={2} /></span></button>

                            </div>
                        </form>
                    </div >
                </div>
                <div className="produtos col-span-3 bg-yellow-500">
                    <div className="header-produtos w-full bg-gray-200 h-10 flex items-center justify-end ">
                        <button className="mr-5" onClick={ChangeArrowDownWide}>{priceMintoMax ? <ArrowDownNarrowWide color="#737373" /> : <ArrowUpNarrowWide color="#737373" />}</button>
                        <button className="mr-4" onClick={ChangeArrowUpAZ}>{nameAtoZ ? <ArrowUpAZ color="#737373" /> : <ArrowDownAZ color="#737373" />}</button>
                    </div>
                    <div className="cards grid grid-cols-3 gap-2">
                        {produtos.map((produtos) => (
                            <Card className="mt-2">
                                <CardHeader>
                                    <CardTitle>Card Title</CardTitle>
                                    <CardDescription>Card Description</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p>Card Content</p>
                                </CardContent>
                                <CardFooter>
                                    <p>Card Footer</p>
                                </CardFooter>
                            </Card>

                        ))}

                    </div>
                </div>
            </section>
            <Footer />
        </>
    )

}

