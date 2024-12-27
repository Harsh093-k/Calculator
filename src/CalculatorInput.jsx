import "./Calculatorinput.css"
export default function Calculatorinput({digit}){
    return(
        <div >
        <input
        className="input"
          type="text"
          name="Digit"
          value={digit}
          readOnly
          placeholder="Enter number"
        />
      </div>
    )
}