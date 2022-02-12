import "./RankCardHeader.css"
export default function RankCardHeader({heading, content, icon}) {
    return(
        <div className="rankcard-header">
            <div className="rankcard-header__icon ">
               {icon}
            </div>
            <div className="rankcard-header__content  w-10">
                <h3 className="t-2">{heading}</h3>
                <p className="t-1 f-1">{content}</p>
            </div>
        </div>
    )
}