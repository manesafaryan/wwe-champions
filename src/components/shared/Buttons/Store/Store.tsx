import { FunctionComponent } from "react";
import "./Store.css"

interface IProps { title: string, store:string, link:string, icon:JSX.Element }

const Store: FunctionComponent<IProps> = ({title, store, link, icon}) =>{
  return (
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
  );
}

export default Store
