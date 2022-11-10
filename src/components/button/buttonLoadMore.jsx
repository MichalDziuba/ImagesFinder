export const ButtonMore = ({ cb }) => {
  return (
    <button
      className="mb-5 rounded bg-blue-600 p-2 text-xl font-semibold text-white 3xl:text-3xl"
      onClick={cb}
    >
      Load More!
    </button>
  );
};
