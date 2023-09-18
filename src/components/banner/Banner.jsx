import React from "react";
import banner from "../../assets/banner.png";
import "./banner.css";
import Video from "../video/Video";
function Banner() {
  return (
    <div className="relative">
      <img src={banner} className="w-full object-cover"></img>
      <div className="bannerInfo">
        <div className="w-full flex justify-around gap-6">
          <div className="titleInfo">
            <div>
              <h1>Frond Tend</h1>
            </div>
            <h2>Marcial Igme</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              eligendi, minus vero repudiandae quaerat quis, molestiae facere
              iusto nam, soluta voluptatem tempore! Ipsum distinctio recusandae
              nesciunt numquam! Explicabo, alias architecto.
            </p>
          </div>
          <div className="videoContent">
            <Video
              w={"400px"}
              color="#257be5"
              title="Marcial Igme"
              cate="Frontend Developer"
              url="https://www.youtube.com/embed/C9ctoK4M9Bk?si=_upOjY_Fc0wbZmsT"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
