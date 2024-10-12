import Link from "next/link"
import Image from "next/image"
import Logo from "../src/app/public/logo4.webp"
export default function Header() {
    return (
        <div className="header">
            <div className="header-line">
                <Image className="logo"
                    src={Logo}
                    alt="Logo"
                    width={100}
                    height={50}/>
                <ul className="list">
                    <Link href={"/"}>
                    <li>Home</li>
                    </Link>
                    <Link href={"/about-us"}>
                    <li>About Me</li>
                    </Link>
                    <Link href={"/contact-us"}>
                    <li>Contact Me</li>
                    </Link>
                </ul>
            </div>
        </div>
    )
}