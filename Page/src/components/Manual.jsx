import { ManualUrl } from "./utils/apiUrl";
import "../style/main.css";
import "../style/media.css";
function Manual() {
  return (
    <div className="contenedor">
      <div className="manual-container">
        <iframe src={ManualUrl} className="manual"></iframe> {/*Imprimimos todo el manual desde el link traido desde data ManualUrl*/}
      </div>
    </div>
  );
}

export default Manual;
