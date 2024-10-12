import Link from "next/link";
import Image from "next/image";
import Tomjerry from "../app/public/tomjrry.jpg"
import Doraemon from "../app/public/doraemon.jpg"
import Picachoo from "../app/public/picachoo.jpg"
import Frozen from "../app/public/frozen.jpg"
import Miraculous from "../app/public/miraculous.jpg"
import Shinchan from "../app/public/shinchan.jpg"

export default function Blogs() {
    return (
        <div>
            <h1 className="cartoon">Exploring the World of Cartoons</h1>
            <div className="parentcontainer">
            <div className="childcontainer">
                <div className="imagecontainer"> 
                     <Image src={Tomjerry} alt="Tom and jerry"/>
                </div>
                <h1 className="title">Tom & Jerry</h1>
                <p className="description">
                   Tom and Jerry is one of the most iconic animated television series in history.  
                </p>
                <Link href={"/tom-jerry"}>
                <button className="readmore">Read More</button>
                </Link>
            </div>
            {/* box2 */}
            <div className="childcontainer">
                <div className="imagecontainer"> 
                     <Image src={Doraemon} alt="Doraemon"/>
                </div>
                <h1 className="title">Doraemon</h1>
                <p className="description">
                  Doraemon is a popular Japanese animated series created by Fujiko F. Fujio, first aired in 1973.
                </p>
                <Link href={"/doraemon"}>
                <button className="readmore">Read More</button>
                </Link>
            </div>
            {/* box3 */}
            <div className="childcontainer">
                <div className="imagecontainer"> 
                     <Image src={Picachoo} alt="picachoo"/>
                </div>

                <h1 className="title">Pookemon</h1>
                <p className="description">
                  Pokemon is a widely popular franchise created by Satoshi Tajiri and Ken Sugimori, first launched in 1996.
                </p>
                 <Link href={"/pookemon"}>
                <button className="readmore">Read More</button>
                </Link>
            </div>
            {/* box4 */}
            <div className="childcontainer">
                <div className="imagecontainer"> 
                     <Image src={Frozen} alt="Frozen"/>
                </div>

                <h1 className="title">Frozen</h1>
                <p className="description">
                Frozen is a highly acclaimed animated film produced by Walt Disney Animation Studios, released in 2013.
                </p>
                <Link href={"/frozen"}>
                <button className="readmore">Read More</button>
                </Link>
            </div>
            {/* box5 */}
            <div className="childcontainer">
                <div className="imagecontainer"> 
                     <Image src={Miraculous} alt="Miraculous"/>
                </div>

                <h1 className="title">Miraculous</h1>
                <p className="description">
                  Miraculous Tales of Ladybug & Cat Noir is a French animated television series created by Thomas Astruc, first premiered in 2015. 
                </p>
                <Link href={"/miraculous"}>
                <button className="readmore">Read More</button>
                </Link>
            </div>
            {/* box 6 */}
            <div className="childcontainer">
                <div className="imagecontainer"> 
                     <Image src={Shinchan} alt="Pookemon"/>
                </div>

                <h1 className="title">Shinchaan</h1>
                <p className="description">
                Shinchan also known as Crayon Shin-chan is a Japanese animated television series created by Yoshito Usui, first aired in 1992. 
                   </p>
                   <Link href={"/shinchan"}>
                <button className="readmore">Read More</button>
                </Link>
            </div>
        </div>
        </div>
    )
}
