import CircleLink from "./CircleLink";

function Links({ URL }) {
  return (
    <div className="links-container">
      {URL.map((item, index) => (
        <div
          key={index}
        >
          <CircleLink
            link={item.imageUrl}
          />
        </div>
      ))}
    </div>
  );
}

export default Links;
