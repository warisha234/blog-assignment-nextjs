import Image from "next/image"
import Picachoo from "../public/picachoo.jpg"
export default function Blog() {
    return (
        <div className="blog-container">
            <h2>Pokemon</h2>
            <Image src={Picachoo} alt="picachoo" />
            <p>
                Pokemon short for Pocket Monsters has become a global phenomenon since its debut in 1996. The franchise began with video games for the Game Boy and quickly expanded into an animated television series, trading card games, movies, and a vast array of merchandise.

                The core concept of Pokémon revolves around Pokemon creatures, each possessing unique abilities, types, and characteristics. Trainers, often young individuals, embark on journeys to catch and train these creatures, aiming to become Pokémon Masters. The ultimate goal is often to compete in Pokémon battles, earn badges, and participate in prestigious tournaments.

                The animated series follows the adventures of Ash Ketchum, a determined Pokemon Trainer, and his loyal partner, Pikachu. Together, they travel through various regions, meeting new friends and rivals while battling Gym Leaders and thwarting the plans of the nefarious Team Rocket. Each episode features themes of friendship, perseverance, and the importance of working together.

                The franchises appeal lies in its rich world, filled with diverse Pokemon species, each with distinct traits and lore. From legendary Pokemon like Mewtwo to beloved fan favorites like Charizard and Eevee, there is something for everyone. The games encourage exploration, strategy, and collection, making them engaging and interactive.
            </p>
        </div>

    )
}