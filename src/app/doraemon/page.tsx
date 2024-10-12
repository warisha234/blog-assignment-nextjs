import Image from "next/image"
import Doraemon from "../public/doraemon.jpg"
export default function Blog() {
    return (
        <div className="blog-container">
            <h2>Doraemon</h2>
            <Image src={Doraemon} alt="Doraemon" />
            <p>
                Doraemon is a beloved animated series that has captured the hearts of audiences worldwide since its inception. The story revolves around a robotic cat named Doraemon, who is sent back in time from the 22nd century to help a clumsy and often unlucky boy named Nobita Nobi.

                Doraemon possesses a pocket from which he can pull out an array of futuristic gadgets and tools designed to solve problems and enhance Nobita's life. These gadgets range from time machines to gadgets that can alter reality, each introducing a new adventure and often leading to unexpected consequences. Despite his good intentions, Nobita's impulsive nature and laziness frequently lead to comical mishaps.

                The series not only focuses on the comedic elements of Nobita's adventures but also imparts valuable life lessons about friendship, responsibility, and perseverance. The bond between Doraemon and Nobita highlights the importance of teamwork and support in overcoming obstacles.

                The animation style, along with the memorable character designs, contributes to the show's charm. Supporting characters such as Shizuka, Gian, and Suneo add depth to the storyline and create a rich universe filled with diverse personalities.

                Doraemon has enjoyed immense popularity in Japan and abroad, resulting in various adaptations, including movies, merchandise, and spin-offs. Its enduring appeal lies in its ability to entertain while imparting meaningful messages, making it a timeless classic in the realm of animation.
            </p>
        </div>

    )
}