import css from './Button.module.css';

export const Button = ({ loadingButton }) => {
  return (
    <div>
      <button type="button" className={css.button} onClick={loadingButton}>
        Load more
      </button>
    </div>
  );
};
