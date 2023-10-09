import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CardCharacter from "./CardCharacter";

export default function FetchComponent() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [paginacion, setPaginacion] = useState({}); // Cambiar a objeto

  const HandleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const HandlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `https://rickandmortyapi.com/api/character?page=${currentPage}`
        );
        const result = await response.json();
        setData(result.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, [currentPage]);

  useEffect(() => {
    async function PaginacionFechData() {
      try {
        const response = await fetch(
          `https://rickandmortyapi.com/api/character`
        );
        const paginacion = await response.json();
        setPaginacion(paginacion.info);
        console.log(paginacion.info);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    PaginacionFechData();
  }, []);

  return (
    <>
      <div className="grupo_cards">
        {data.length > 0 ? (
          data.map((character) => (
            <Link
              className="link_card"
              key={character.id}
              to={`/character/${character.id}`}
            >
              <CardCharacter character={character} />
            </Link>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>

      <div className="container_pages">
        <div className="container_btns">
          <button
            className="btn_pages btn_prevent"
            onClick={HandlePrevPage}
            disabled={currentPage === 1}
          >
            Prev
          </button>
          <button
            className="btn_pages btn_next"
            onClick={HandleNextPage}
            disabled={currentPage === paginacion.pages}
          >
            Next
          </button>
        </div>
        {paginacion.pages ? (
          <div className="container_totalpages">
            <span className="span_pagina">
              Total paginas: {paginacion.pages}
            </span>
            <span className="span_pagina">Pagina: {currentPage}</span>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
}
