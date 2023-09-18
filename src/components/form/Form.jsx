import React, { useEffect, useRef, useState } from "react";
import { Input } from "@nextui-org/react";
import "./form.css";
import { Button } from "@nextui-org/react";
import { Select, SelectItem } from "@nextui-org/react";

import { helpHTTP } from "../helpers/helpHTTP";

const cat = [
  "Programación",
  "Front End",
  "Data Science",
  "Devops",
  "UX y Diseño",
  "Móvil",
  "Innovación y Gestión",
];
const formInitial = {
  id: "",
  title: "",
  image: "",
  metadescription: "",
  body: "",
  categoria: "",
  subcategoria: "",
};
const sub = [
  {
    nombre: "Programación",
    subcategorias: [
      "Lenguajes de Programación",
      "Desarrollo Web",
      "Desarrollo de Software",
    ],
  },
  {
    nombre: "Front End",
    subcategorias: ["HTML/CSS", "JavaScript", "Frameworks Front-end"],
  },
  {
    nombre: "Data Science",
    subcategorias: [
      "Ciencia de Datos",
      "Machine Learning",
      "Análisis de Datos",
    ],
  },
  {
    nombre: "DevOps",
    subcategorias: [
      "Automatización",
      "Gestión de Infraestructura",
      "Integración Continua/Entrega Continua (CI/CD)",
    ],
  },
  {
    nombre: "UX y Diseño",
    subcategorias: [
      "Diseño de Experiencia de Usuario (UX)",
      "Diseño Gráfico",
      "Interfaz de Usuario (UI)",
    ],
  },
  {
    nombre: "Móvil",
    subcategorias: ["Desarrollo de Aplicaciones Móviles", "iOS", "Android"],
  },
  {
    nombre: "Innovación y Gestión",
    subcategorias: [
      "Gestión de Proyectos",
      "Emprendimiento",
      "Estrategia Empresarial",
    ],
  },
];

function Form() {
  const sizes = ["sm", "md", "lg"];
  const [form, setForm] = useState(formInitial);
  const [subcategoriasOptions, setSubcategoriasOptions] = useState([]);
  const inputRef = useRef(null);
  const [Db, setDb] = useState([]);

  let api = helpHTTP();
  let url = "http://localhost:3000/posts";

  const onChange = (e) => {
    // console.log(e.target.value);
    // console.log(e.target.name);
    setForm({ ...form, [e.target.name]: e.target.value });

    if (e.target.name === "categoria") {
      const selectedCategoria = e.target.value;
      const subcategoriaOptions =
        sub.find((item) => item.nombre === selectedCategoria)?.subcategorias ||
        [];
      setSubcategoriasOptions(subcategoriaOptions);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(form);
    // data((prevData) => [...prevData, form]);
    // console.log(data);
    // setDb([...Db, form]);
    // console.log(Db);
    createData(form);
  };

  const createData = (data) => {
    data.id = crypto.randomUUID();

    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };

    api.post(url, options).then((res) => {
      if (!res.err) {
        setDb([...Db, data]);
      } else {
        setError(res);
      }
    });
  };

  return (
    <div className="py-4 h-full px-4 containerForm">
      <form onSubmit={handleSubmit}>
        <div className="w-3/5 flex flex-col gap-4">
          <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4 text-center justify-center">
            <Input
              className="inputForm"
              size="lg"
              type="text"
              label="Title"
              name="title"
              value={form.title}
              onChange={onChange}
              required
            />
            <Input
              className="inputForm"
              size="lg"
              type="text"
              label="URL Image "
              placeholder="Enter your url"
              name="image"
              value={form.image}
              onChange={onChange}
              required
            />
            <Input
              className="inputForm"
              size="lg"
              type="text"
              label="metaDescription"
              name="metadescription"
              value={form.metadescription}
              onChange={onChange}
              required
            />

            <Input
              className="inputForm"
              size="lg"
              type="text"
              label="Body"
              name="body"
              value={form.body}
              onChange={onChange}
              required
            />

            <div className="group flex flex-col  inputForm  text-start my-4 w-full">
              <Select
                label="category"
                placeholder="Select an category"
                // defaultSelectedKeys={["marcial"]}
                className="w-2/4 mb-4 selectInput"
                scrollShadowProps={{
                  isEnabled: false,
                }}
                onChange={onChange}
                name="categoria"
                required
              >
                {cat.map((animal) => (
                  <SelectItem key={animal} value={form.categoria}>
                    {animal}
                  </SelectItem>
                ))}
              </Select>
              <Select
                label="Subcategory"
                placeholder="Select an category"
                // defaultSelectedKeys={["igme"]}
                className=" w-full selectInput"
                scrollShadowProps={{
                  isEnabled: false,
                }}
                onChange={onChange}
                name="subcategoria"
                ref={inputRef}
                required
              >
                {subcategoriasOptions.map((animal) => (
                  <SelectItem key={animal} value={form.subcategoria}>
                    {animal}
                  </SelectItem>
                ))}
              </Select>
            </div>

            <div className="group flex flex-col  inputForm btnRegister text-start my-4">
              <Button
                size="lg"
                type="submit"
                color="primary"
                variant="bordered"
              >
                Register
              </Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Form;
