import { FaFacebookF, FaHeart, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoMdCube } from "react-icons/io";
import { Link } from "react-router-dom"
export default function Footer() {
    return (
        <>

            <footer className="footer p-10 bg-base-200 text-base-content mt-4">
                <nav>
                    <h6 className="footer-title">Serviços</h6>
                    <Link to={"/"} className="link link-hover">Branding</Link>
                    <Link to={"/"} className="link link-hover">Design</Link>
                    <Link to={"/"} className="link link-hover">Marketing</Link>
                    <Link to={"/"} className="link link-hover">Advertisement</Link>
                </nav>
                <nav>
                    <h6 className="footer-title">Compania</h6>
                    <Link to={"/"} className="link link-hover">About us</Link>
                    <Link to={"/"} className="link link-hover">Contact</Link>
                    <Link to={"/"} className="link link-hover">Jobs</Link>
                    <Link to={"/"} className="link link-hover">Press kit</Link>
                </nav>
                <nav>
                    <h6 className="footer-title">Informações Legais</h6>
                    <Link to={"/"} className="link link-hover">Terms of use</Link>
                    <Link to={"/"} className="link link-hover">Privacy policy</Link>
                    <Link to={"/"} className="link link-hover">Cookie policy</Link>
                </nav>
            </footer>
            <footer className="footer px-10 py-4 border-t bg-base-200 text-base-content border-base-300">
                <aside className="items-center grid-flow-col-dense">
                    <IoMdCube size={65} color={'#ffffff'} rotate={20} />
                    <p className="text-7xl font-personalizada">Cubiist</p><br />
                    <p className="flex items-center justify-center font-sans">Powered by Everleast <span className="ml-2"><FaHeart color='#ff0000' /></span></p>
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
