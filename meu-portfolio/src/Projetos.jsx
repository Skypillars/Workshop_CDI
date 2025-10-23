function Projetos(){
    return(
        <section id="projetos">
            <h2> Meus Projetos </h2>
            <div className="projetos-grid">
                <div className="projeto-card">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_SYxURXMPP0P05aM7flfDw48ucXUIRiCabw&s" alt="Projeto 1" />
                    <h3> Projeto 1</h3>
                    <p> Descrição do projeto 1</p>
                </div>
            </div>
            <div className="projetos-grid">
                <div className="projeto-card">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_SYxURXMPP0P05aM7flfDw48ucXUIRiCabw&s" alt="Projeto 2" />
                    <h3> Projeto 2</h3>
                    <p> Descrição do projeto 2</p>
                </div>
            </div>
        </section>
    );
}

export default Projetos;