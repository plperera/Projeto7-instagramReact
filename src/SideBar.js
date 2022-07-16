import Sugestao from "./Sugestao";
function SideBar () {


    return (
        <div class="sidebar">
            <div class="usuario">
                <img src="assets/img/catanacomics.svg" />
                <div class="texto">
                <strong>catanacomics</strong>
                Catana
                </div>
            </div>

            <div class="sugestoes">
                <div class="titulo">
                    Sugestões para você
                    <div>Ver tudo</div>
                </div>

                <Sugestao 
                    image = "assets/img/bad.vibes.memes.svg"
                    user = "bad.vibes.memes"
                    followYou = "True"
                />

                <Sugestao 
                    image = "assets/img/chibirdart.svg"
                    user = "chibirdart"
                    followYou = "True"
                />
                
                <Sugestao 
                    image = "assets/img/razoesparaacreditar.svg"
                    user = "razoesparaacreditar"
                    followYou = "False"
                />
   
                <Sugestao 
                    image = "assets/img/adorable_animals.svg"
                    user = "adorable_animals"
                    followYou = "True"
                />

                <Sugestao 
                    image = "assets/img/smallcutecats.svg"
                    user = "smallcutecats"
                    followYou = "True"
                />

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