import ErrorImg from './error.jpg';
export const ErrorMessage = () => {
  return (
    <img
      src={ErrorImg}
      alt="error_image"
      style={{
        width: 1000,
        height: 500,
        margin: 'auto',
      }}
    />
  );
};
