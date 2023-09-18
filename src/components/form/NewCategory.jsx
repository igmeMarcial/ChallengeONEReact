import React, { useEffect, useState } from "react";
import { Input } from "@nextui-org/react";
import "./form.css";
import { Button } from "@nextui-org/react";
import Tables from "./Tables";

import { helpHTTP } from "../../components/helpers/helpHTTP";

const inittialForm = {
  id: "",
  titulo: "",
  colorPrimario: "",
  colorSecundario: "",
};

export default function NewCategory() {
  const [formSub, setFormSub] = useState(inittialForm);
  const [bg, setBg] = useState({
    colorPrimario: "",
    colorSecundario: "",
  });
  const [Db, setDb] = useState([]);
  const [category, setCategory] = useState([]);
  let api = helpHTTP();
  let url = "http://localhost:3000/categorias";

  const onChange = (e) => {
    // console.log(e.target.value);
    // console.log(e.target.name);
    setFormSub({ ...formSub, [e.target.name]: e.target.value });
    if (e.target.name === "colorPrimario") {
      setBg({ [e.target.name]: e.target.value });
    }
    if (e.target.name === "colorSecundario") {
      setBg({ [e.target.name]: e.target.value });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formSub);
    // data((prevData) => [...prevData, form]);
    // console.log(data);
    createData(formSub);
  };
  let urlCategory = "http://localhost:3000/categorias";

  useEffect(() => {
    //  setLoading(true);
    helpHTTP()
      .get("https://api-aluraflix.vercel.app/categorias")
      .then((res) => {
        if (!res.err) {
          setCategory(res);
          // console.log(res);
        } else {
          //   setDb(null);
          //   setError(res);
          console.log(res);
        }
      });
  }, []);

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
        // setError(res);
        console.log(res);
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
              name="titulo"
              value={formSub.titulo}
              onChange={onChange}
              required
            />
            <Input
              className="inputForm colorSelect"
              size="lg"
              type="color"
              label="Select Color primary "
              placeholder="Enter your url"
              name="colorPrimario"
              value={formSub.colorPrimario}
              onChange={onChange}
              required
            />
            <div
              style={{ backgroundColor: `${bg.colorPrimario}` }}
              className="colorDiv"
            >
              Primary
            </div>
            <div
              style={{ backgroundColor: `${bg.colorSecundario}` }}
              className="colorDiv"
            >
              Secondary
            </div>
            <Input
              className="inputForm colorSelect"
              size="lg"
              type="color"
              label="Select Color secondary"
              name="colorSecundario"
              value={formSub.colorSecundario}
              onChange={onChange}
              required
            />

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
      <div className="pt-6" style={{ paddingTop: "30px" }}>
        <Tables className="pt-4" list={category} />
      </div>
    </div>
  );
}
