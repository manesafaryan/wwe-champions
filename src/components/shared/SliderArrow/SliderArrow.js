import "./SliderArrow.css"

export default function SliderArrow({arrow, onClick, className, position}) {
    return (
        <div className={`arrow sample-${className}-arrow`} onClick={onClick}>
            {arrow}
        </div>
    )
}