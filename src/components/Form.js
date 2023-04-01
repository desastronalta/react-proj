import {useState} from 'react'
function Form(){
    const [nome,setNome] = useState('Matheus')
    const [passw,setPassw]=useState()
        function cadastraUsuario(e){
        e.preventDefault() //para a execução padrão do form e interpreta a proxima
        //linha de codigo : )
        console.log(nome)
        console.log(passw)
        console.log("Usuario Cadastrado")
    }
    
    return(
        <div>
            <h1>Cadastro</h1>
            <form onSubmit={cadastraUsuario}>                
                <div>
                    <label htmlFor='name'>Usuario:</label><br/>
                    <input 
                    type ='text' 
                    id='name' 
                    name='name' 
                    placeholder='Digite o seu o nome'
                    onChange={(e)=>setNome(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor='passw'>senha:</label>
                    <br/>
                    <input 
                    type ='password' 
                    id='passw'
                    name='passw' 
                    placeholder='Digite sua senha'
                    onChange={(e)=>setPassw(e.target.value)}/>
                </div>
                <div>
                    <input type ='submit' value = 'cadastrar'/>
                </div>
            </form>
        </div>
    )
}
export default Form