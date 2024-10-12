import Image from "next/image"
import Miraculous from "../public/miraculous.jpg"
export default function Blog() {
    return (
        <div className="blog-container">
            <h2>Miraculous</h2>
            <Image src={Miraculous} alt="miraculous" />
            <p>
                "Miraculous: Tales of Ladybug & Cat Noir" has gained immense popularity since its debut, captivating audiences with its unique blend of action, romance, and comedy. The series revolves around the lives of two high school students, Marinette Dupain-Cheng and Adrien Agreste, who lead double lives as superheroes.

                When danger arises in Paris, Marinette transforms into Ladybug, a brave and resourceful superhero equipped with magical powers granted by her Miraculous, a magical jewel. Similarly, Adrien becomes Cat Noir, a charming and agile hero, with his own set of powers. Together, they battle against the nefarious Hawk Moth, who uses his powers to turn ordinary citizens into supervillains known as Akumas.

                The series highlights themes of friendship, teamwork, and self-discovery as Marinette and Adrien navigate their feelings for each other, unaware of each other's true identities. Their dynamic is filled with humor and tension, as they confront not only external threats but also the challenges of teenage life.

                The animation style is vibrant and colorful, bringing to life the beautiful landscapes of Paris and the dynamic action sequences. The supporting characters, including Alya, Luka, and Master Fu, contribute to the story's richness and depth, each with their own unique qualities and story arcs.
                "Miraculous" has also spawned a wide range of merchandise, video games, and even a musical. Its catchy theme song and engaging storylines have resonated with viewers, making it a beloved series for children and teens around the world.

                Overall, "Miraculous: Tales of Ladybug & Cat Noir" is a delightful series that combines superhero action with relatable themes of love and friendship, making it a standout in the realm of animated television.
            </p>
        </div>
    )
}

