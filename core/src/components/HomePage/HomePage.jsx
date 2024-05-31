import axios from "axios";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from 'embla-carousel-react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Search, CircleDollarSign } from "lucide-react";
import { useEffect, useLayoutEffect, useState } from 'react';
import { FaFacebookF, FaHeart, FaInstagram, FaTshirt } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { GiRunningShoe, GiUnderwearShorts } from "react-icons/gi";
import { IoMdCube } from "react-icons/io";
import { TbSkateboard } from "react-icons/tb";
import { toast, ToastContainer } from "react-toastify";
import Header from '../Header.jsx';
import { Card, CardContent, CardDescription, CardFooter, CardTitle } from "../ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";

export default function HomePage() {
    const [carouselRef] = useEmblaCarousel({ Loop: true }, [Autoplay()])
    const [data, setData] = useState()

    const fetchProdutos = (async () => {
        try {
            const res = await axios.get('http://localhost:3333/Products')
            setData(res.data)
        } catch (error) {

        }
    })
    useEffect(() => {
        fetchProdutos()
    }, [])
    console.log(data)


    useEffect(() => {
        const notification = localStorage.getItem('notification');
        if (notification) {
            toast.success(notification);
            localStorage.removeItem('notification');
        }
    },);


    // Animação do corpo principal do texto
    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const image1 = document.getElementsByClassName("img1");
        const image2 = document.getElementsByClassName("img2");
        const text1 = document.getElementsByClassName("text1")

        const tl1 = gsap.timeline();
        tl1.fromTo(
            image1,
            { opacity: 0, y: '-100px' },
            { opacity: 1, y: '0px', duration: 5, ease: 'power4.out' }
        );

        const tl2 = gsap.timeline();
        tl2.fromTo(
            image2,
            { opacity: 0, x: '-100px' },
            { opacity: 1, x: '0px', duration: 5, ease: 'power4.out' }
        );
        const tl3 = gsap.timeline()
        tl3.fromTo(
            text1,
            { opacity: 0, x: '-400px' },
            { opacity: 1, x: '0px', duration: 5, ease: 'power4.out' }
        );
        gsap.timeline().add([tl1, tl2, tl3]);




    }, [])

    useLayoutEffect(() => {
        const elementoPrincipal = document.getElementsByClassName("marcacao")

        const tl1 = gsap.timeline()

        tl1.fromTo(elementoPrincipal,
            {
                opacity: 0,
            },
            { opacity: 1 }
        )


    }, [])



    return (
        <>
            <Header></Header>
            <ToastContainer
                limit={1}
            />
            {/* Imagens e o texto, animar depois */}
            <div className='grid grid-cols-1 gap-2 md:grid-cols-2 '>
                <div className='left-elements'>
                    <h1 className='text1 font-HomePage text-3xl mt-3 mb-25 p-3  text-center md:text-8xl md:mt-36'>
                        Com nossa moda, voce nao
                        <br />
                        apenas anda de skate,
                        <br />
                        voce vive o skate.
                        <br />
                        Vista a sua paixao,
                        <br />
                        <p className='text-gray-500'> expresse o seu estilo.</p>
                    </h1>
                </div>
                <div className='right-elements mb-25'>
                    <div className="flex">
                        <div className="image1 flex-1">
                            <img className="img1 p-2 w-full h-full rounded-2xl" src="/imagens/Header/teste.jpg" alt="" />
                        </div>
                        <div className="img2 flex-1">
                            <img className="p-2 w-full h-full rounded-2xl " src="/imagens/Header/teste2.jpg" alt="" />
                        </div>
                    </div>



                </div>
            </div>
            {/* busca por items */}
            <div className='marcacao flex bg-gray-950 w-full md:w-auto h-30 md:h-40 justify-evenly'>
                <div className="flex mt-5 flex-col md:flex-row md:space-x-20 md:mt-5">
                    <div className="group produtos camisetas bg-gray-500 h-28 w-28 md:h-28 md:w-28 rounded-full flex flex-col items-center justify-center hover:bg-gray-400 cursor-pointer mt-2">
                        <FaTshirt size={60} className="text-white group-hover:text-black" />
                        <span className='text-white group-hover:text-black'>Camisas</span>
                    </div>
                    <div className="group produtos bermuda mt-2 bg-gray-500 h-28 w-28 md:h-28 md:w-28 rounded-full flex flex-col items-center justify-center hover:bg-gray-400 cursor-pointer">
                        <GiUnderwearShorts size={60} className="text-white group-hover:text-black" />
                        <span className='text-white group-hover:text-black'>Bermudas</span>
                    </div>
                    <div className="group produtos tenis mt-2 bg-gray-500 h-28 w-28 md:h-28 md:w-28 rounded-full flex flex-col items-center justify-center hover:bg-gray-400 cursor-pointer">
                        <GiRunningShoe size={60} className="text-white group-hover:text-black" />
                        <span className='text-white group-hover:text-black'>Tênis</span>
                    </div>
                    <div className="group produtos skates mt-2 bg-gray-500 h-28 w-28 md:h-28 md:w-28 rounded-full flex flex-col items-center justify-center hover:bg-gray-400 cursor-pointer">
                        <TbSkateboard size={60} className="text-white group-hover:text-black" />
                        <span className='text-white group-hover:text-black'>Skates</span>
                    </div>
                </div>
            </div>

            <div className="bg-sky-500 mt-0 h-15">
                <div className="search-icons text-center pt-2 pb-2">
                    <form action="">
                        <input type="text" placeholder='Pesquisar...' className=' h-12 rounded-s-xl border-0 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-400 sm:text-xl sm:leading-6' />
                        <button className='bg-slate-100 w-9 h-12 md:w-9  md:h-12  p-2 rounded-e-xl focus:bg-slate-300 hover:border  hover:bg-slate-200'>
                            <Search size={15} strokeWidth={3} />
                        </button>
                    </form>
                </div>
            </div>
            <hr className="h-px  bg-gray-100 border-0 dark:bg-gray-100" />
            <section className="info-produtos flex">
                <section className="qualidade  md:grid grid-cols-3  gap-1 relative">
                    <div className="esquerda  col-span-1 ">
                        <img alt="" className=" h-auto w-auto md:ml-10 rounded-xl" src="https://images.pexels.com/photos/3133688/pexels-photo-3133688.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                    </div>
                    <div className="direita col-span-2 pt-10 mx-2 md:pt-52 mr-3 ">
                        <div className="texto border-sky-500 shadow-xl border-t-4  bg-gray-200 rounded-e-xl h-auto xl:border-l-4 xl:border-t-0 ">
                            <h3 className='text-center font-mono text-gray-700 text-3xl md:text-8xl'>
                                Qualidade
                            </h3>
                            <p className=' text-justify px-3 py-4 text-gray-500'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, repudiandae, inventore voluptatum porro ut esse quam vitae odit sed voluptate aut tenetur in, a officia dolorum dicta corporis quos natus.
                                Consequuntur numquam quas ea ex, doloremque ipsam eum sint saepe neque nobis, ad nulla esse voluptates eaque asperiores quos. Harum totam labore sapiente esse odio voluptatibus eum officia natus recusandae.
                                Inventore ex, facere similique nemo harum, aspernatur maxime consequatur dolor, veniam nulla vel eius! Voluptas est aut quis. Nihil vero ut laborum ea itaque mollitia in ad laudantium nulla nisi?
                                Ex quibusdam inventore eius quo? Ducimus excepturi sint quos reprehenderit quae ipsum laboriosam a voluptatibus necessitatibus fuga, suscipit, hic et ad in officia quod, nostrum ea aliquid adipisci architecto commodi.
                                Nostrum veniam similique, quo optio atque consequuntur modi sunt soluta, at iusto odit rem distinctio, reprehenderit sapiente saepe suscipit quaerat nihil ducimus! Ab cupiditate odit perspiciatis dignissimos soluta explicabo voluptatibus.
                                Nemo est, autem magnam veritatis atque, dolore tenetur, reiciendis debitis velit beatae minus voluptate nam sed quisquam porro facere ex itaque aliquam nisi magni consectetur deserunt qui? Inventore, molestias quo.
                                Reprehenderit, ducimus deserunt perferendis consequuntur quia nemo. Quisquam aliquam alias possimus, reprehenderit dolores suscipit fuga quos. Quo autem nobis dolore accusantium, dicta sit esse laborum omnis a hic, aperiam delectus.
                                Asperiores molestiae repellendus totam voluptatum dolorum quaerat eveniet autem ea in. Odit rem, nesciunt sit iure, atque illo laboriosam perferendis dolorum, a molestias vitae

                            </p>
                        </div>
                    </div>
                </section>
            </section>
            <section className="sustentabilidade md:grid grid-cols-3 gap-1">
                {/* <div className="direita visible h-0 w-0 md:invisible">
                    <img className="object-cover w-full h-full rounded-xl" src="imagens/header/sustentabilidade.jpg" alt="" />
                </div> */}
                <div className="esquerda col-span-2 pt-10 mx-2 md:pt-24 mr-3">
                    <div className="texto border-green-500  shadow-xl mb-2 border-y-4  bg-gray-200 rounded-s-xl h-auto xl:border-r-4 xl:border-y-0 xl:mb-0">
                        <h3 className='text-center font-mono text-gray-700 text-2xl md:text-7xl'>
                            Sustentabilidade
                        </h3>
                        <p className=' text-justify px-3 py-4 text-gray-500'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, repudiandae, inventore voluptatum porro ut esse quam vitae odit sed voluptate aut tenetur in, a officia dolorum dicta corporis quos natus.
                            Consequuntur numquam quas ea ex, doloremque ipsam eum sint saepe neque nobis, ad nulla esse voluptates eaque asperiores quos. Harum totam labore sapiente esse odio voluptatibus eum officia natus recusandae.
                            Inventore ex, facere similique nemo harum, aspernatur maxime consequatur dolor, veniam nulla vel eius! Voluptas est aut quis. Nihil vero ut laborum ea itaque mollitia in ad laudantium nulla nisi?
                            Ex quibusdam inventore eius quo? Ducimus excepturi sint quos reprehenderit quae ipsum laboriosam a voluptatibus necessitatibus fuga, suscipit, hic et ad in officia quod, nostrum ea aliquid adipisci architecto commodi.
                            Nostrum veniam similique, quo optio atque consequuntur modi sunt soluta, at iusto odit rem distinctio, reprehenderit sapiente saepe suscipit quaerat nihil ducimus! Ab cupiditate odit perspiciatis dignissimos soluta explicabo voluptatibus.
                            Nemo est, autem magnam veritatis atque, dolore tenetur, reiciendis debitis velit beatae minus voluptate nam sed quisquam porro facere ex itaque aliquam nisi magni consectetur deserunt qui? Inventore, molestias quo.
                            Reprehenderit, ducimus deserunt perferendis consequuntur quia nemo. Quisquam aliquam alias possimus, reprehenderit dolores suscipit fuga quos. Quo autem nobis dolore accusantium, dicta sit esse laborum omnis a hic, aperiam delectus.
                            Asperiores molestiae repellendus totam voluptatum dolorum quaerat eveniet autem ea in. Odit rem, nesciunt sit iure, atque illo laboriosam perferendis dolorum, a molestias vitae

                        </p>
                    </div>
                </div>
                <div className="direita col-span-1 md:pt-20 pb-20">
                    <img className="object-cover w-full h-full rounded-xl" src="imagens/header/sustentabilidade.jpg" alt="" />
                </div>
            </section >
            <section className="security mb-4 md:grid grid-cols-3 gap-2 ">
                <div className="esquerda pt-12 ">
                    <img className="rounded-xl" src="imagens/header/seguranca.jpg" alt="" />
                </div>
                <div className="direita col-span-2 pt-10 mx-2 md:pt-24 mr-3">
                    <div className="texto border-yellow-500 shadow-xl mb-2 border-t-4  bg-gray-200 rounded-e-xl h-auto xl:border-l-4 xl:border-t-0 xl:mb-0">
                        <h3 className='text-center font-mono text-gray-700 text-1xl md:text-7xl'>
                            Segurança, Como protegemos vc
                        </h3>
                        <p className=' text-justify px-3 py-4 text-gray-500'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, repudiandae, inventore voluptatum porro ut esse quam vitae odit sed voluptate aut tenetur in, a officia dolorum dicta corporis quos natus.
                            Consequuntur numquam quas ea ex, doloremque ipsam eum sint saepe neque nobis, ad nulla esse voluptates eaque asperiores quos. Harum totam labore sapiente esse odio voluptatibus eum officia natus recusandae.
                            Inventore ex, facere similique nemo harum, aspernatur maxime consequatur dolor, veniam nulla vel eius! Voluptas est aut quis. Nihil vero ut laborum ea itaque mollitia in ad laudantium nulla nisi?
                            Ex quibusdam inventore eius quo? Ducimus excepturi sint quos reprehenderit quae ipsum laboriosam a voluptatibus necessitatibus fuga, suscipit, hic et ad in officia quod, nostrum ea aliquid adipisci architecto commodi.
                            Nostrum veniam similique, quo optio atque consequuntur modi sunt soluta, at iusto odit rem distinctio, reprehenderit sapiente saepe suscipit quaerat nihil ducimus! Ab cupiditate odit perspiciatis dignissimos soluta explicabo voluptatibus.
                            Nemo est, autem magnam veritatis atque, dolore tenetur, reiciendis debitis velit beatae minus voluptate nam sed quisquam porro facere ex itaque aliquam nisi magni consectetur deserunt qui? Inventore, molestias quo.
                            Reprehenderit, ducimus deserunt perferendis consequuntur quia nemo. Quisquam aliquam alias possimus, reprehenderit dolores suscipit fuga quos. Quo autem nobis dolore accusantium, dicta sit esse laborum omnis a hic, aperiam delectus.
                            Asperiores molestiae repellendus totam voluptatum dolorum quaerat eveniet autem ea in. Odit rem, nesciunt sit iure, atque illo laboriosam perferendis dolorum, a molestias vitae

                        </p>
                    </div>
                </div>

            </section>
            <section className="conhecendo-produtos bg-gray-50">
                <div className="flex justify-center">
                    <Carousel className="w-full max-w-xl md:max-w-7xl mx-auto">
                        <CarouselContent className="-ml-1">
                            {Array.from({ length: 20 }).map((_, index) => (
                                <CarouselItem key={index} className="pl-1 md:basis-2/6 lg:basis-1/3">
                                    <div className="p-1 ">
                                        <Card className="items-center rounded-xl border ">
                                            <CardTitle>

                                            </CardTitle>
                                            <CardContent className="flex aspect-square items-center justify-center p-0">
                                                <CardDescription>
                                                    <img src="https://images.unsplash.com/photo-1571945153237-4929e783af4a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                                                </CardDescription>
                                            </CardContent>
                                            <CardFooter>
                                                <div className="w-auto flex">
                                                    <p className="font-sans text-sm justify-center text-sky-600">Novo*</p>

                                                    <CircleDollarSign size={28} color="#000000" strokeWidth={1.75} />
                                                </div>

                                            </CardFooter>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div>
            </section >
            {/* Possivelmente aqui terá uma seção de reviews que n fiz ainda, mas pretendo fazer */}

            {/* Arrumar este erro dos links, usar o react-router-Dom */}
            <footer className="footer p-10 bg-base-200 text-base-content">
                <nav>
                    <h6 className="footer-title">Services</h6>
                    {/* <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a> */}
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    {/* <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a> */}
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    {/* <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a> */}
                </nav>
            </footer>
            <footer className="footer px-10 py-4 border-t bg-base-200 text-base-content border-base-300">
                <aside className="items-center grid-flow-col">
                    <IoMdCube size={65} color={'#ffffff'} rotate={20} />
                    <p>Cubiist <br />Powered by Everleast <FaHeart color='#ff0000' /></p>
                </aside>
                <nav className="md:place-self-center md:justify-self-end">
                    <div className="grid grid-flow-col gap-4">
                        <FaXTwitter size={30} />
                        <FaInstagram size={30} />
                        <FaFacebookF size={30} />
                    </div>
                </nav>
            </footer>
        </>
    )

}