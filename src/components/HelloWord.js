import Frase from "./Frase"
import SayMyName from "./SayMyName"
function HelloWord(){
    
    return(
        <div>
            <Frase/>
            <Frase/>
            <h1>Meu primeiro componente</h1>
            <SayMyName nome ="joaozinho da Akban"/>
        </div>
    )
   
}
export default HelloWord