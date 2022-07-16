import Story from "./Story"
import Post from "./Post"
function Esquerda() {
    
    return (

        <div class="esquerda">

            <div class="stories">

                <Story image = "assets/img/9gag.svg" user = "9gag"/>

                <Story image = "assets/img/meowed.svg" user = "meowed"/>

                <Story image = "assets/img/barked.svg" user = "barked"/>

                <Story image = "assets/img/nathanwpylestrangeplanet.svg" user = "nathanwpylestrangeplanet"/>

                <Story image = "assets/img/wawawicomics.svg" user = "wawawicomics"/>

                <Story image = "assets/img/respondeai.svg" user = "respondeai"/>

                <Story image = "assets/img/filomoderna.svg" user = "filomoderna"/>

                <Story image = "assets/img/memeriagourmet.svg" user = "memeriagourmet"/>

                <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
                </div>
                
            </div>

        <div class="posts">

            <Post 
            imageUser = "assets/img/meowed.svg"
            user = "meowed"
            imagePost = "assets/img/gato-telefone.svg"
            imageLike = "assets/img/respondeai.svg"
            userLike = "respondeai"
            likeAmount = "101.523"
            />

            <Post 
            imageUser = "assets/img/barked.svg"
            user = "barked"
            imagePost = "assets/img/dog.svg"
            imageLike = "assets/img/adorable_animals.svg"
            userLike = "adorable_animals"
            likeAmount = "99.159"
            />

        </div>

        </div>

    )
}

export default Esquerda;