import { Link } from "react-router-dom"
import "./OrdinaryBtn.css"

export default function Ordinary({description}: {description: string}) {
    return(
      <Link to={"Offers"}>
          <div className="ordinary-btn">
              <p className="ordinary-btn__description">{description}</p>
          </div>
      </Link>
    )
}