import "./Store.css"

export default function Store({ title, store, link, icon }) {
  return (
    <div className="store-container">
      <a
        className="store"
        href={link}
        target="_blank"
      >
        {icon}
        <div className="title-container">
          <p className="title">{title}</p>
          <p>{store}</p>
        </div>
      </a>
    </div>
  );
}
