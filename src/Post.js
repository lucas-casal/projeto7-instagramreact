import { useState } from "react"
export default function Post(props){
    let [saved, setSave] = useState("bookmark-outline")
    let [liked, setLike] = useState("heart-outline")
    let [heart, setHeart] = useState("")
    let [userLike, setUserLike] = useState(0)
    let [heartAnimation, setAnimation] = useState("hidden")

    
    function Save(){
    if (saved === "bookmark-outline") {
        setSave("bookmark")
    } else {
        setSave("bookmark-outline")
    }
    }

    function LikeBtn(){
        if (liked === "heart-outline") {
            setLike("heart")
            setHeart("heart")
            setUserLike(1)
        } else {
            setLike("heart-outline")
            setHeart("")
            setUserLike(0)
        }
    }

    function LikePic(){
        if (liked === "heart-outline") {
            setLike("heart")
            setHeart("heart")
            setUserLike(1)
        } 
        setAnimation("pic-heart animate")
        setTimeout( hide => {
            setAnimation("hidden");
        }, 500)

        }
    
    return (
        <div class="post"  data-test="post">
            <div class="topo">
            <div class="usuario">
                <img src={props.ProfileImg} alt={props.ProfileName}/>
                {props.ProfileName}
            </div>
            <div class="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
            </div>

            <div class="conteudo">
                <ion-icon name="heart" class={heartAnimation}></ion-icon>
                <img src={props.PostImg} alt={props.alt} onDoubleClick={LikePic} data-test="post-image"/>
            </div>

            <div class="fundo">
            <div class="acoes">
                <div>
                <ion-icon onClick={LikeBtn} class={heart} name={liked} data-test="like-post"></ion-icon>
                <ion-icon name="chatbubble-outline"></ion-icon>
                <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div>
                <ion-icon name={saved} onClick={Save} data-test="save-post"></ion-icon>
                </div>
            </div>

            <div class="curtidas">
                <img src={props.LikedImg} alt={props.LikedName}/>
                <div class="texto" data-test="likes-number">
                Curtido por <strong>{props.LikedName}</strong> e <strong>outras {props.Likes + userLike} pessoas</strong>
                </div>
            </div>
            </div>
        </div>
    )
}