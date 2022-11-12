import { useState } from "react";
import { Modal } from "../modal/modal";
export default function GalleryItem(props) {
  const [isOpen, setModal] = useState(false);
  function modalToggle(e) {
    e.stopPropagation();
    setModal(!isOpen);
  }
  function handleKeyDown(e) {
    if (e.code === "Escape") {
      setModal(false);
    }
  }
  const { webformatURL, largeImageURL, tags } = props;
  window.addEventListener("keydown", handleKeyDown);

  return (
    <div className="">
      <li
        className=" md:w-76 h-40 w-72  transition delay-100 ease-in-out hover:shadow-2xl md:h-48 lg:h-52 lg:w-80 2xl:h-72 2xl:w-96 3xl:h-[310px] 3xl:w-[520px] "
        onClick={modalToggle}
      >
        <img 
          loading="lazy"
          src={webformatURL}
          alt={tags}
          className="h-full w-full object-cover hover:scale-[1.03]"
        />
      </li>
      {isOpen && (
        <Modal
          largeImageURL={largeImageURL}
          tags={tags}
          modalToggle={modalToggle}
        />
      )}
    </div>
  );
}
