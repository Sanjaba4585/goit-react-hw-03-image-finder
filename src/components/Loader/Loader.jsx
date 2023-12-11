import { Hourglass } from 'react-loader-spinner';
import css from './Loader.module.css';
export const Loader = () => {
  return (
    <Hourglass
      visible={true}
      height="80"
      width="80"
      ariaLabel="hourglass-loading"
      wrapperStyle={{}}
      wrapperClass={css.overlay}
      colors={['#306cce', '#72a1ed']}
    />
  );
};
