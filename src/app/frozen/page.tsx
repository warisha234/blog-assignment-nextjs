import Image from "next/image"
import Frozen from "../public/frozen.jpg"
export default function Blog() {
    return (
        <div className="blog-container">
            <h2>Frozen</h2>
            <Image src={Frozen} alt="frozen" />
            <p>
                "Frozen" is a groundbreaking animated film that redefined Disney storytelling when it was released in 2013. Directed by Jennifer Lee and Chris Buck, the movie is inspired by Hans Christian Andersen's fairy tale "The Snow Queen" and centers around two sisters, Elsa and Anna, from the kingdom of Arendelle.

                The plot follows Elsa, who possesses magical powers that allow her to create ice and snow. After accidentally revealing her abilities during her coronation, she retreats to the mountains, unintentionally plunging Arendelle into an eternal winter. Anna, determined to bring her sister back, embarks on a perilous journey to find Elsa and restore summer to their kingdom.

                Throughout the film, themes of love, sacrifice, and self-acceptance are explored. Anna's unwavering love for her sister drives her actions, showcasing the bond between siblings and the importance of embracing one’s true self. The film's standout moment, "Let It Go," performed by Elsa (voiced by Idina Menzel), emphasizes the power of self-acceptance and liberation from societal expectations.

                The animation in "Frozen" is stunning, with breathtaking visuals of snow-covered landscapes and intricate character designs. The film's supporting characters, including the lovable snowman Olaf and the rugged ice seller Kristoff, add humor and depth to the story.
                "Frozen" received widespread acclaim from critics and audiences alike, leading to a successful franchise that includes a sequel, merchandise, theme park attractions, and stage adaptations. The film's impact on popular culture is undeniable, as it has inspired countless parodies, covers, and fan creations.

                Overall, "Frozen" is not just a tale of adventure and magic; it is a celebration of love, family, and the importance of being true to oneself, making it a beloved classic for audiences of all ages.
            </p>
        </div>
    )
}