import { useContext } from "react"
import { CalcContext } from "../context/CalcContext"
import { Textfit } from 'react-textfit';

const Screen = () => {
  const { calc } = useContext(CalcContext);

  return (
    <textarea className="screen" max={70}  mode="single">{calc.num ? calc.num : calc.res}</textarea>
  )
}

export default Screen