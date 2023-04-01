import Style from "./Pessoa.module.css"


function Pessoa({nome,idade,foto,profissao}){
    return(
        <div className={Style.PessoaContainer}>
            <img src={foto} alt={nome}/>
            <h2 className={Style.Titles} >nome: {nome}</h2>
            <h2 className={Style.Titles}>idade: {idade}</h2>
            <p className = {Style.Paragrafo}>profissão: {profissao}</p>
        </div>
    )
}
export default Pessoa
/*uma forma de se escrever de maneira menos legivel
function Pessoa(props){
    return(
        <div>
            <img src={props.foto} alt={props.nome}/>
            <h1>nome: {props.nome}</h1>
            <h2>idade: {props.idade}</h2>
            <p>profissão: {props.profissao}</p>
        </div>
    )
}
export default Pessoa */