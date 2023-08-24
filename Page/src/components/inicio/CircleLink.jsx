function CircleLink({ link }) {
  return (
    <>
      <a href="">
        {/* Deben de sen imagenes de 120px 120px */}
        <div className="circle">
          <img
            className="circle-img"
            src={link}
            alt="Link"
          />
        </div>
      </a>
    </>
  );
}

export default CircleLink;
