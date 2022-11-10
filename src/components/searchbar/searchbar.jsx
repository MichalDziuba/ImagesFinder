import { SearchIcon } from "../../icons/search";

export const SearchBar = ({ getKeyword }) => {

  const submitHandler = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const input = form.elements.input;
    const inputText = input.value;
    getKeyword(inputText);
  };
  const inputReset = (e) => {
    const input = e.target;
    input.value = "";
  };
  return (
    <div className=" shadow-xl1 flex h-24 w-full items-center justify-center bg-blue-600 3xl:h-40">
      <form
        className="flex w-5/6  flex-row-reverse justify-center lg:w-2/3 "
        onSubmit={submitHandler}
      >
        <input
          type="text"
          name="input"
          className="h-12 w-1/2  rounded-br-lg rounded-tr-lg p-3 text-base placeholder:text-center placeholder:text-xs focus:outline-0 3xl:h-20 xl:text-2xl 3xl:text-4xl xl:placeholder:text-xl 3xl:placeholder:text-3xl"
          placeholder="Search for an image!"
          onClick={inputReset}
        />

        <button
          type="submit"
          className="flex h-12 w-12 items-center justify-center rounded-tl-lg rounded-bl-lg bg-neutral-300 3xl:h-20 3xl:w-20"
        >
          <SearchIcon className="h-6 w-6 3xl:w-12 3xl:h-12" />
        </button>
      </form>
    </div>
  );
};
