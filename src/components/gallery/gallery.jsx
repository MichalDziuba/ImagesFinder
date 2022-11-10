import GalleryItem from "../galleryItem/galleryItem";
import { nanoid } from "nanoid";
export const Gallery = ({ items,galleryRef }) => {
  return (
    <div className="pt-5 pb-5 flex h-full w-full justify-center" ref={galleryRef} >
      {items.length > 0 ? (
        <ul className="flex h-full flex-col items-center gap-4  md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 xl:grid-cols-4  ">
          {items.map(({ id, webformatURL, largeImageURL, tags }) => (
            <GalleryItem
              key={nanoid()}
              webformatURL={webformatURL}
              largeImageURL={largeImageURL}
              tags={tags}
            />
          ))}
        </ul>
      ) : (
        <p className="w-11/12 text-2xl font-semibold mt-10 text-center">
          Sorry, there are no images matching your search query. Please try
          again.
        </p>
      )}
   
    </div>
  );
};
