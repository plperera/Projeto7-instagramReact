import React from "react"

let likeClass = ""
let likeIcon = "heart-outline"

function Post (props) {

    function like () {
        
        console.log(likeAmount)

        likeClass = (likeAmount !== props.likeAmount ? "coracaoVazio":"coracaoCheio")
        likeIcon = (likeAmount !== props.likeAmount ? "heart-outline":"heart")

        likeAmount === props.likeAmount ? setLikeAmount ( likeAmount + 1) : setLikeAmount ( likeAmount - 1)
        console.log(likeAmount)
        
    }

    const [likeAmount, setLikeAmount] = React.useState(props.likeAmount)



    return (
        <div class="post">

            <div class="topo">

                <div class="usuario">

                    <img src={props.imageUser}/>
                    {props.user}

                </div>

                <div class="acoes">

                    <ion-icon name="ellipsis-horizontal"></ion-icon>

                </div>

            </div>

            <div class="conteudo">
                <img src={props.imagePost} />
            </div>

            <div class="fundo">

                <div class="acoes">
                    
                    <div>
                        <ion-icon 

                        class={likeClass} 
                        name={likeIcon} 
                        onClick={like}>

                        </ion-icon>

                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>

                    <div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>

                </div>

                <div class="curtidas">

                    <img src={props.imageLike}/>

                    <div class="texto">
                        Curtido por <strong> {props.userLike} </strong> e <strong>outras {likeAmount} pessoas </strong>
                    </div>

                </div>

            </div>
        </div>
    )
}
export default Post