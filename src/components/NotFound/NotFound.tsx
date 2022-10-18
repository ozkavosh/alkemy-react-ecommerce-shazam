import "./NotFound.scss";
import { TbFaceIdError } from "react-icons/tb";

const NotFound = () => {
  return (
    <main className="notFound">
      <TbFaceIdError />
      <h2>
        Lo sentimos no se <strong>encontró</strong> la sección solicitada!
      </h2>
    </main>
  );
};

export default NotFound;
