function Sugestao (props) {

    //entradas :

    //image: assets/img/bad.vibes.memes.svg
    //user: bad.vibes.memes
    //followYou: True

    return (
        <div class="sugestao">

            <div class="usuario">

                <img src= {props.image} />
                <div class="texto">
                    <div class="nome">{props.user}</div>
                    <div class="razao">{props.followYou === "True" ? "Segue Você" : "Novo no Instagram"}</div>
                </div>
                
            </div>

            <div class="seguir">Seguir</div>
        </div>
    )
}
export default Sugestao