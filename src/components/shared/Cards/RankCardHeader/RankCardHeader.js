import "./RankCardHeader.css"
export default function RankCardHeader({heading, content, icon}) {
    return(
        <div className="rankcard-header">
            <div className="rankcard-header__icon">
               {icon}
            </div>
            <div className="rankcard-header__content">
                <h3>{heading}</h3>
                <p>{content}</p>
            </div>
        </div>
    )
}