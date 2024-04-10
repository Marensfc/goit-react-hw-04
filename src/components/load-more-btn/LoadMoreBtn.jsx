import css from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ page, setPage }) => {
  return (
    <button className={css.btn} onClick={() => setPage(page + 1)}>
      Load more
    </button>
  );
};

export default LoadMoreBtn;
