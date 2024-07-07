import React, { useRef, useState } from "react";
import Cards from "./Cards";
function Foreground() {
  // const data= [
  //      desc ,file size , closedOrDownload,tagDetails
  // ]
  const ref =useRef(null);

  const data = [
    {
      desc: "this is the background color of card.",
      filesize: ".9mb",
      close: true,
      tag: { isOpen:false,tagTitle:"download Now",tagcolor:"green" },
    },
    {
      desc: "this is the background color of card.",
      filesize: ".9mb",
      close: true,
      tag: { isOpen:true,tagTitle:"download Now",tagcolor:"blue" },
    },
    {
      desc: "this is the background color of card.",
      filesize: ".9mb",
      close: true,
      tag: { isOpen:true,tagTitle:"Upload",tagcolor:"green" },
    },
  ];
  useState();
  return (
    <div ref={ref} className="foreground p-5 fixed top-0 left-0 z-[3] w-full h-full  flex gap-10 flex-wrap ">
      {data.map((item,index)=>(
        <Cards data={item} reference={ref} />

      )) }
    </div>
  );
}

export default Foreground;
