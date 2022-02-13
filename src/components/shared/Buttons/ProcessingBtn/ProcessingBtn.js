import "./ProcessinBtn.css"

export default function ProcessingBtn({type}) {
   return (
    <button className={type}>
    <div className="processing-btn__balls">
      <div className="odd"></div>
      <div className="even"></div>
      <div className="odd"></div>
      <div className="even"></div>
    </div>
    <p>Processing</p>
  </button>
   )
}