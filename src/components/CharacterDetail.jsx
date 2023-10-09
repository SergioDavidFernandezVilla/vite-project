import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";

export default function CharacterDetail() {
  const { id } = useParams();

  const [character, setCharacter] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `https://rickandmortyapi.com/api/character/${id}`
        );
        const result = await response.json();
        setCharacter(result); // Setea el personaje directamente, no los resultados
        console.log(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, [id]);

  if (!character) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container_card_character">
      <Link className="a_link_character" to="/">
        <div className="space_link_character">
          <GoArrowLeft className="svg_back_home" />
          <span className="span_link_character">Ir al home</span>
        </div>
      </Link>
      <section className="section_character">
        <div className="box_card_character">
          <div className="container_text">
            <h1 className="title_card_character">{character.name}</h1>
            <p>Status: {character.status}</p>
            <p>Status: {character.gender}</p>
            <p>Status: {character.location.name}</p>
          </div>

          <div className="container_image">
            <img
              className="img_card_character"
              src={character.image}
              alt={character.name}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
