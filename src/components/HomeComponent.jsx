import FetchComponent from "./FetchComponent";

export default function HomeComponent() {
  return (
    <div className="container_principal">
      <div className="box_principal">
        <h1 className="title_box">Rick And Morty ApiREST</h1>

        <p className="paragh_box">
          Bienvenido a la emocionante aventura de la Rick and Morty API REST.
          Sumérgete en el vasto y extravagante universo de la popular serie de
          televisión Rick and Morty
        </p>
      </div>

      <main>
        <FetchComponent></FetchComponent>
      </main>
    </div>
  );
}
