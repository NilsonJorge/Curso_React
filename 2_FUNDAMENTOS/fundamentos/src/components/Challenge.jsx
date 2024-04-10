const x1 = 6
const x2 = 7
const soma = () => {
    return  console.log(x1+x2)
}
const Challenge = () => {
    return (
        <>
        <h2>Primeiro número: {x1}</h2>
        <h2>Segundo número: {x2}</h2>
        <button onClick={soma}>Somar</button>

        </>
    )
};

export default Challenge