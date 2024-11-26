// import './index.scss';
// import img from "../../assets/images/404-found.gif"
// const NotFound = () => {
//     return (
//         <div className="not-found-container">
//             <h1>404 - Page Not Found</h1>
//             <img src={img} alt="Not Found" className="not-found-gif" />
//             <p>Sorry, the page you are looking for does not exist.</p>
//         </div>
//     );
// };

// export default NotFound;
import { useLocation } from 'react-router-dom';
import './index.scss';
// import img from "../../assets/images/404-found.gif"
const NotFound: React.FC = () => {
  const location = useLocation();
  const error = location.state?.error;
console.log(error,"errorerrorerrorerror");

  return (
    <div className="not-found-container">
      <h1>404 - Not Found</h1>
      {error && <p>Error: {error}</p>}
    </div>
  );
};

export default NotFound;
