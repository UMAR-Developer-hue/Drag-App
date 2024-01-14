import React, { useRef} from "react";
import Crad from "./Crad";

function Forground() {
const ref=useRef(null);

  const data = [
    {
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        fileSize: ".9mb",
        close: false,
        tags: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
      },
      {
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        fileSize: ".9mb",
        close: false,
        tags: { isOpen: true, tagTitle: "Download Now", tagColor: "pink" },
      },
      {
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        fileSize: ".9mb",
        close: false,
        tags: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
      }
  ];
  return (
    <>
      <div ref={ref} className="relative top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5">
        {data.map((item, index) => (
          <Crad data={item } refrence={ref}/>
        ))}
      </div>
    </>
  );
}

export default Forground;
