import { useState } from "react"
import Img from "./assets/img/catanacomics.svg"



export default function User(){
    let [nome, setNome] = useState('catanacomics')
    let [image, setImage] = useState(Img)
    
    function ChangeUsername(event){
    const wrote = prompt("Qual nome você quer usar?")
    const input = wrote.trim()
    if (!input){
    } else{
        setNome(wrote);
    }
    }

    function ChangeImage(event){
        const wrote = prompt("Qual é o link da foto nova?")
        const input = wrote.trim()
        if (!input){
        } else{
            setImage(wrote);
        }

    }

    return(
        <div class="usuario" id="usuario">
        <img src={image} onClick={ChangeImage} alt="imagem de perfil" data-test="profile-image"/>
        <div class="texto">
            <span data-test="name">
            <strong>{nome}</strong>
            <ion-icon name="pencil" onClick={ChangeUsername} data-test="edit-name"></ion-icon>
            </span>
        </div>
        </div>
    )
}