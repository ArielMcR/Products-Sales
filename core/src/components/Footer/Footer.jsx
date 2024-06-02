import { FaFacebookF, FaHeart, FaInstagram, FaTshirt } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoMdCube } from "react-icons/io";
export default function Footer() {
    return (
        <>

            <footer className="footer p-10 bg-base-200 text-base-content mt-4">
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
