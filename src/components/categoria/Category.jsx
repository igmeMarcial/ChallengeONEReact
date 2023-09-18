import React from "react";
import Video from "../video/Video";
import "./categoria.css";

function Category({ data, videos }) {
  console.log(data);
  console.log(videos);
  return (
    <>
      {videos.length > 0 && (
        <div
          className="mt-8 "
          //    style={{
          //      backgroundColor: data.colorPrimario,
          //    }}
        >
          <div className="text-start">
            <h3
              style={{ backgroundColor: `${data.colorPrimario}` }}
              className="titleSection"
            >
              {data.titulo}
            </h3>
          </div>
          <div className="flex justify-center gap-4 flex-wrap">
            {videos.map((people, index) => (
              //  <Person
              //    key={index}
              //    img={people.image}
              //    name={people.name}
              //    position={people.position}
              //  />
              <Video
                key={index}
                w={"400px"}
                color={data.colorPrimario}
                title={people.title}
                cate={people.categoria}
                url={people.image}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default Category;
