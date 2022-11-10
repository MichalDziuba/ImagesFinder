import { useEffect, useState, useRef } from "react";
import { Gallery } from "./components/gallery/gallery";
import { SearchBar } from "./components/searchbar/searchbar";
import axios from "axios";
import { ButtonMore } from "./components/button/buttonLoadMore";
import { Loader } from "./components/loader/loader";

function App() {
  //data
  const [keyword, setKeyword] = useState("");
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [allImages, setAllImages] = useState(0);
  const [isLoading, setLoading] = useState(true);
  const galleryRef = useRef();

  //functions

  //getImages
  const fetchData = async () => {
    axios.defaults.baseURL = "https://pixabay.com/api/";
    const APIKEY = "23677449-ed03e132ebac9ff9282502f83";
    try {
      const response = await axios.get(
        `?key=${APIKEY}&q=${keyword}&image_type=photo&orientation=horizontal&per_page=12&page=${page}`
      );
      if (page === 1) {
        setImages(response.data.hits);
        setAllImages(response.data.totalHits);
        setLoading(false);
      } else {
        setImages((prevImages) => [...prevImages, ...response.data.hits]);
        setAllImages(response.data.totalHits);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };
  //fetch more Images
  const loadMore = () => {
    setPage(page + 1);
    setTimeout(() => {
      galleryRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }, 300);
  };
  //compare
  const usePrevious = (value) => {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    }, [value]);
    return ref.current;
  };
  const prevKeyword = usePrevious(keyword);

  useEffect(() => {
    if (prevKeyword !== keyword) {
      setLoading(true);
      setImages([]);
      setPage(1);
    } else {
      fetchData(keyword, page);
    }
  }, [keyword, page, prevKeyword]);

  return (
    <div className="flex h-full w-screen flex-col items-center ">
      <SearchBar getKeyword={setKeyword} />
      {isLoading ? (
        <Loader />
      ) : (
        <div className="flex flex-col items-center justify-center">
          <Gallery items={images} galleryRef={galleryRef} />
          {images.length < allImages && <ButtonMore cb={loadMore} />}
        </div>
      )}
    </div>
  );
}

export default App;
