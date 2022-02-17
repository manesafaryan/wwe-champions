import "./SliderArrow.css"

export default function SliderArrow({arrow, onClick, className}) {
    console.log(className)
    return (
        <div className={`arrow sample-${className}-arrow`} onClick={onClick}>
            {arrow}
        </div>
    )
}