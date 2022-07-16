import Story from "./Story"
import Post from "./Post"
function Esquerda(props) {

    return (

        <div class="esquerda">

            <div class="stories">

                {props.arrayStory.map(arrayStory => <Story image = {arrayStory.image} user = {arrayStory.user} /> ) }

                <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
                </div>
                
            </div>

            <div class="posts">

                {props.arrayPost.map(arrayPost => <Post 
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