function Story (props) {

    //entradas :

    //image: assets/img/9gag.svg
    //user: 9gag

    return(

        <div class="story">
        <div class="imagem">
            <img src={props.image} />
        </div>
        <div class="usuario">
            {props.user}
        </div>
        </div>
    )
}
export default Story;