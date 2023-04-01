import { useState } from "react"

function Condicional(){
    function limparEmail(){
        setUserEmail('')
    }
    const [email,setEmail] = useState()
    const [userEmail,setUserEmail] = useState()
    function enviarEmail(e){
        e.preventDefault()
        console.log('testando evento')
        console.log(email)
        setUserEmail(email)
        console.log(userEmail)
    }
    return(
        <div>
            <h1> Cadastre seu e-mail </h1>
            <form>
                <input type='email'  
                placeholder="digite seu email..."
                onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit" onClick={enviarEmail}> Enviar Email </button>
                {userEmail &&(
                    <div>
                        <p>o seu email cadastrado é: {userEmail}</p>
                        <button onClick={limparEmail} >limpar email</button>
                    </div>                    
                )}
            </form>
        </div>
    )
}

export default Condicional