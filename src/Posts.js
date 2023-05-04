import Post from "./Post"
import User1 from "./assets/img/meowed.svg"
import Post1 from "./assets/img/gato-telefone.svg"
import Liked1 from "./assets/img/respondeai.svg"
import User2 from "./assets/img/barked.svg"
import Post2 from "./assets/img/dog.svg"
import Liked2 from "./assets/img/adorable_animals.svg"

export default function Posts(){
    const postObj1={
		ProfileImg: User1,
		ProfileName: "meowed",
        PostImg: Post1,
        LikedImg: Liked1,
		LikedName: "respondeai",
        Likes:101523
	}
	
	const postObj2={
        ProfileImg: User2,
		ProfileName: "barked",
        PostImg: Post2,
        LikedImg: Liked2,
		LikedName: "adorable_animals",
        Likes:99159	
	}
	
	const postObj3={
        ProfileImg: User1,
		ProfileName: "meowed",
        PostImg: Post1,
        LikedImg: Liked1,
		LikedName: "respondeai",
        Likes:101523	
	}
	
	const postsArray = [postObj1, postObj2, postObj3]
	
	return (
		<div class="posts">
			{postsArray.map(Post)}
		</div>
	)
   
}