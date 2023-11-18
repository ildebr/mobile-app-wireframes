import { useNavigate } from "react-router-dom"
import backbutton from "../../assets/backicon.svg"
import "./Headerprogress.scss"
const Headerprogress = ( {marknumber} ) =>{
    console.log(marknumber)
    const navigate = useNavigate()
    const STEPS = 5

    function Bars(){
        var li = []
        var i 
        for( i=1; i<STEPS+1; i++ ){
            li.push(
                <div 
                className={i <= marknumber ? 'headerprogress__element headerprogress__element--active' : 'headerprogress__element'}
                key={i}
                >
                
                </div>
            )
        }
        

        return li
    }
    return(
        <div className="headerprogress">
            <div className="backarrow">
                <img src={backbutton} alt="" />
            </div>
            <div className="headerprogress__bar">
                <Bars />
            </div>
        </div>
    )
}

export default Headerprogress