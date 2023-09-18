import React from "react";
import { Card, CardFooter, Image, Button } from "@nextui-org/react";
import "../../components/banner/banner.css";

function Video({ w, color, title, cate, url }) {
  console.log(w);
  return (
    <div className="text-center  ">
      <Card
        isFooterBlurred
        radius="lg"
        className=" w-full cardVideo "
        style={{ border: `solid ${color}` }}
      >
        <iframe
          className="w-full "
          height="315"
          src={url}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
          <p className="text-tiny text-white/80">{title}</p>
          <Button
            className="text-tiny text-white bg-black/20"
            variant="flat"
            color="default"
            radius="lg"
            size="sm"
          >
            {cate}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default Video;
