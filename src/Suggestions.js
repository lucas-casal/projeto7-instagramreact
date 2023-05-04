import Suggestion from "./Suggestion"
import Img1 from "./assets/img/bad.vibes.memes.svg"
import Img2 from "./assets/img/chibirdart.svg"
import Img3 from "./assets/img/razoesparaacreditar.svg"
import Img4 from "./assets/img/adorable_animals.svg"
import Img5 from "./assets/img/smallcutecats.svg"

export default function Suggestions(){
const suggestionObj1={
    image: Img1,
    name: "bad.vibes.memes",
    reason: "Segue você"
}

const suggestionObj2={
    image: Img2,
    name: "chibirdart",
    reason: "Segue você"
}

const suggestionObj3={
    image: Img3,
    name: "razoesparaacreditar",
    reason: "Novo no Instagram"
}

const suggestionObj4={
    image: Img4,
    name: "adorable_animals",
    reason: "Segue você"
}

const suggestionObj5={
    image: Img5,
    name: "smallcutecats",
    reason: "Segue você"
}

const suggestionsArray = [suggestionObj1, suggestionObj2, suggestionObj3, suggestionObj4, suggestionObj5]

    return (
        <div class="sugestoes">
        <div class="titulo">
            Sugestões para você
            <div>Ver tudo</div>
        </div>
           {suggestionsArray.map(Suggestion)}
        </div>
    )
}

