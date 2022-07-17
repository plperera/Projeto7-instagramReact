import Sugestao from "./Sugestao";
function SideBar (props) {

    return (
        <div class="sidebar">
            <div class="usuario">
                <img src={props.objUser.image}/>
                <div class="texto">
                <strong>{props.objUser.user}</strong>
                {props.objUser.name}
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