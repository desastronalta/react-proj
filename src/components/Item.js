import PropTypes from 'prop-types'
function Item({marca, anoLancamento}){

    return(
        <>
        <li>{marca} - {anoLancamento}</li>
        <p>listem gerados</p>
        </>
    )

}
Item.propTypes = {
    marca : PropTypes.string.isRequired,
    anoLancamento : PropTypes.number.isRequired
}
Item.defaultProps = {
    marca : 'faltou a marca',
    anoLancamento : 0
}
export default Item