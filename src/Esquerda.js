import Story from "./Story"
import Post from "./Post"
function Esquerda() {
    
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
            likeAmount: "101.523" 
        },
        {
            imageUser: "assets/img/barked.svg",
            user: "barked",
            imagePost: "assets/img/dog.svg",
            imageLike: "assets/img/adorable_animals.svg",
            userLike: "adorable_animals",
            likeAmount: "99.159" 
            }

    ]
    return (

        <div class="esquerda">

            <div class="stories">

                {arrayStory.map(arrayStory => <Story image = {arrayStory.image} user = {arrayStory.user} /> ) }

                <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
                </div>
                
            </div>

            <div class="posts">

                {arrayPost.map(arrayPost => <Post 
                imageUser = {arrayPost.imageUser}
                user = {arrayPost.user}
                imagePost = {arrayPost.imagePost}
                imageLike = {arrayPost.imageLike}
                userLike = {arrayPost.userLike}
                likeAmount = {arrayPost.likeAmount}
                />)}

            </div>

        </div>

    )
}

export default Esquerda;