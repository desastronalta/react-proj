import Button from "./Button"

function Eventos(){

    function meuEvento(){
        console.log('fui ativado que tudooo!!')
    }
    return(
    <div>
        <p>Clique para disparar um evento</p>
        <Button event={meuEvento} text='meu primeiro evento' />
        <button onClick={meuEvento}>Ativar</button>
    </div>
    )
}

export default Eventos  