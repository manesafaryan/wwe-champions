import "./SliderArrow.css"

export default function SliderArrow({arrow, onclick}) {
    return (
        <div className="arrow" onClick={onclick}>
            {arrow}
        </div>
    )
}