import { Spinner } from "react-bootstrap";

const Loader = () => {
  return (
    <Spinner
        animation="border"
        role="status"
        sytle={{ 
            width: '100px',
            height: '100px',
            margin: 'auto',
            display:'block',
         }}
    ></Spinner>
  );
};
export default Loader;
