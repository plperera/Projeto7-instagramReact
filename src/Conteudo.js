import Esquerda from "./Esquerda";
import SideBar from "./SideBar";

function Conteudo() {

    const arrayStory = [

        {image: "assets/img/9gag.svg", user: "9gag"},
        {image: "assets/img/meowed.svg", user: "meowed"},
        {image: "assets/img/barked.svg", user: "barked"},
        {image: "assets/img/nathanwpylestrangeplanet.svg", user: "nathanwpylestrangeplanet"},
        {image: "assets/img/wawawicomics.svg", user: "wawawicomics"},
        {image: "assets/img/respondeai.svg", user: "respondeai"},
        {image: "assets/img/filomoderna.svg", user: "filomoderna"},
        {image: "assets/img/memeriagourmet.svg", user: "memeriagourmet"}
    ]

    const arrayPost = [
        {
            imageUser: "assets/img/meowed.svg",
            user: "meowed",
            imagePost: "assets/img/gato-telefone.svg",
            imageLike: "assets/img/respondeai.svg",
            userLike: "respondeai",
            likeAmount: 523
        },
        {
            imageUser: "assets/img/barked.svg",
            user: "barked",
            imagePost: "assets/img/dog.svg",
            imageLike: "assets/img/adorable_animals.svg",
            userLike: "adorable_animals",
            likeAmount: 159
            }
    ]

    const arraySugestoes = [
        {
            image: "assets/img/bad.vibes.memes.svg",
            user: "bad.vibes.memes",
            followYou: "True"
        },
        {
            image: "assets/img/chibirdart.svg",
            user: "chibirdart",
            followYou: "True"
        },
        {
            image: "assets/img/razoesparaacreditar.svg",
            user: "razoesparaacreditar",
            followYou: "False"
        },
        {
            image: "assets/img/adorable_animals.svg",
            user: "adorable_animals",
            followYou: "True"
        },
        {
            image: "assets/img/smallcutecats.svg",
            user: "smallcutecats",
            followYou: "True"
        }
    ]

    //USUARIO QUE ESTA LOGADO
    const objUser = 
        {   
            image: "assets/img/plperera.jpg",
            user: "plperera",
            name: "Pedro Pereira"
    
        }

    return (
        <div class="corpo">

            <Esquerda arrayPost = {arrayPost} arrayStory = {arrayStory} />
            
            <SideBar arraySugestoes = {arraySugestoes} objUser = {objUser}/>

        </div>
    )
}

export default Conteudo;