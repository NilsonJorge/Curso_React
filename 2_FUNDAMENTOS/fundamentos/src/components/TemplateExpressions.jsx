const TemplateExpressions = () => {
    const name = "Nilson";
    const data = {
        age: 21, job: "Programmer",
    };
    return(
        <>
        <h1>Olá {name}, tudo bem?</h1>
        <p>Você atua como: {data.job}</p>
        <p>E tem {data.age} anos</p>
        </>
    )
}

export default TemplateExpressions