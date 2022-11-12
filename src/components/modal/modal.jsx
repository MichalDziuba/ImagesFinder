export const Modal = ({ largeImageURL, tags, modalToggle }) => (
  <div
    className=" fixed top-0 left-0 z-[999] mb-3 flex h-screen w-screen items-center justify-center bg-gray-800 bg-opacity-70"
    onClick={modalToggle}
  >
    <div className="max-w-[calc(w-screen-48px)] mr-2 ml-2 max-h-[calc(h-screen-24px)] ">
      <img src={largeImageURL} alt={tags} loading="lazy" />
    </div>
  </div>
);
