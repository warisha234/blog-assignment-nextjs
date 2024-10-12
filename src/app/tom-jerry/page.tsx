import Image from "next/image"
import Tomjrry from "../public/tomjrry.jpg"
export default function Blog() {
    return (
        <div className="blog-container">
    <h2>Tom And Jerry</h2>
    <Image src={Tomjrry} alt="Tom and Jerry"/>
    <p>Tom and Jerry is one of the most iconic animated television series in history. The series revolves around the eternal struggle between Tom,
        the well-meaning but often bumbling cat, and Jerry, the cunning and resourceful mouse.</p>
    <p>Each episode typically showcases Toms attempts to catch Jerry, leading to a series of humorous and chaotic scenarios.
        The charm of the show lies in its unique blend of physical comedy and clever storytelling. While Tom often finds himself in comical predicaments due to Jerry’s quick wit and agility,
        the series also features a variety of supporting characters, including Spike the bulldog and Tyke, adding depth and humor to the storyline.</p>
    <p>The animation style and expressive character designs contribute significantly to the shows charm.
        Despite the absence of dialogue, the characters exaggerated expressions and sounds effectively convey the story, making it accessible to audiences worldwide.

        Over the years, Tom and Jerry has not only entertained generations of viewers but has also inspired numerous adaptations, merchandise, and even feature films. Its timeless humor and relatable characters continue to resonate with both children and adults, solidifying its status as a cultural icon in the world of animation.</p>
</div>

    )
}