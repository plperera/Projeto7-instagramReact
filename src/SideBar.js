import Sugestao from "./Sugestao";
function SideBar (props) {

    const arrayUser = props.arrayUser
    console.log (arrayUser)
    return (
        <div class="sidebar">
            <div class="usuario">
                <img src={arrayUser[0].image}/>
                <div class="texto">
                <strong>{arrayUser[0].user}</strong>
                {arrayUser[0].name}
                </div>
            </div>

            <div class="sugestoes">
                <div class="titulo">
                    Sugestões para você
                    <div>Ver tudo</div>
                </div>

                {props.arraySugestoes.map(arraySugestoes => <Sugestao image = {arraySugestoes.image} user = {arraySugestoes.user} followYou = {arraySugestoes.followYou} />)}
               
            </div>

            <div class="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
            </div>

            <div class="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>
    )
}

export default SideBar;