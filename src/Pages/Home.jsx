import React, { useEffect, useState } from "react";
import { helpHTTP } from "../components/helpers/helpHTTP";
import Category from "../components/categoria/Category";
const equipos = [
  {
    titulo: "Programación",
    colorPrimario: "#57C278",
    colorSecundario: "#D9F7E9",
  },
  {
    titulo: "Front End",
    colorPrimario: "#82CFFA",
    colorSecundario: "#E8F8FF",
  },
  {
    titulo: "Data Science",
    colorPrimario: "#A6D157",
    colorSecundario: "#F0F8E2",
  },
  {
    titulo: "Devops",
    colorPrimario: "#E06B69",
    colorSecundario: "#FDE7E8",
  },
  {
    titulo: "UX y Diseño",
    colorPrimario: "#DB6EBF",
    colorSecundario: "#FAE9F5",
  },
  {
    titulo: "Móvil",
    colorPrimario: "#FFBA05",
    colorSecundario: "#FFF5D9",
  },
  {
    titulo: "Innovación y Gestión",
    colorPrimario: "#FF8A29",
    colorSecundario: "#FFEEDF",
  },
];

function Home() {
  const [Db, setDb] = useState([]);
  const [category, setCategory] = useState([]);
  const [dataToEdit, setDataToEdit] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  let api = helpHTTP();
  let url = "http://localhost:3000/posts";
  let urlCategory = "http://localhost:3000/categorias";

  let urlRepo = "https://api-aluraflix.vercel.app/posts";

  useEffect(() => {
    setLoading(true);
    helpHTTP()
      .get("https://api-aluraflix.vercel.app/categorias")
      .then((res) => {
        if (!res.err) {
          setCategory(res);
          // console.log(res);
        } else {
          setDb(null);
          setError(res);
        }
      });
    helpHTTP()
      .get("https://api-aluraflix.vercel.app/posts")
      .then((res) => {
        if (!res.err) {
          setDb(res);
          // console.log(res);
        } else {
          setDb(null);
          setError(res);
        }
      });
  }, []);

  return (
    <div>
      {category.map((cat, index) => (
        <Category
          key={index}
          data={cat}
          videos={Db.filter((item) => item.categoria === cat.titulo)}
        />
      ))}
    </div>
  );
}

export default Home;
