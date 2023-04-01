import Item from "./Item"

function List(){

    return(
        <>
        <h1>Lista</h1>
        <ul>
            <Item marca = 'fiat' anoLancamento={2000}/>
            <Item marca = 'ferrari' anoLancamento={2015}/>
            <Item marca = 'volvo' anoLancamento={2019}/>
            <Item/>
        </ul>
        </>
    )
}
export default List