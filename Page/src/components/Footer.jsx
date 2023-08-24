import "../style/media.css";
function Footer() {
  return (
    <div className="footer-container">
      <img
        className="logo logo-footer"
        src="https://via.placeholder.com/250x250"
        alt=""
      />
      <div className="info-container">
        {" "}
        <p className="info detalles">
          <strong className="info info-name">Telefono:</strong>834 7098
        </p>
        <p className="info detalles">
          <strong className="info info-name">E-mail:</strong>ie.cadr@yahoo.es
        </p>
        <p className="info detalles">
          <strong className="info info-name">Dane:</strong>105387000077
        </p>
        <p className="info detalles">
          <strong className="info info-name">Nit:</strong>811020168-67
        </p>
        <p className="info detalles">
          <strong className="info info-name">Dirección:</strong> Cra 5ª Nº 44-77
        </p>
        <p className="info detalles">
          <strong className="info info-name">Código icfes dia:</strong>030478
        </p>
        <p className="info detalles">
          <strong className="info info-name">Código icfes nocturno:</strong>095877
        </p>
      </div>
    </div>
  );
}

export default Footer;
