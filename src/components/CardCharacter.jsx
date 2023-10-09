export default function CardCharacter({ character }) {
  if (!character) {
    // Si character no está definido, puedes mostrar un mensaje de error o hacer algo más
    return <p>Character not found</p>;
  }

  return (
    <div className="div_card">
      <section className="section_card">
        <h1 className="title_card">{character.name}</h1>
        <article className="article_card">
          <img
            className="img_card"
            src={character.image}
            alt={character.name}
          />
        </article>
      </section>
    </div>
  );
}
