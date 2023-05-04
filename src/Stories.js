import Story from "./Story"
import Story1 from "./assets/img/9gag.svg"
import Story2 from "./assets/img/meowed.svg"
import Story3 from "./assets/img/barked.svg"
import Story4 from "./assets/img/nathanwpylestrangeplanet.svg"
import Story5 from "./assets/img/wawawicomics.svg"
import Story6 from "./assets/img/respondeai.svg"
import Story7 from "./assets/img/filomoderna.svg"
import Story8 from "./assets/img/memeriagourmet.svg"


export default function Stories() {
    const StoryObj1={
		image: Story1,
		name: "9gag"		
	}
	
	const StoryObj2={
		image: Story2,
		name: "meowed"
	}
	
	const StoryObj3={
		image: Story3,
		name: "barked"
	}
	
	const StoryObj4={
		image: Story4,
		name: "nathanwpylestrangeplanet"
	}
	
	const StoryObj5={
		image: Story5,
		name: "wawawicomics"		
	}

	const StoryObj6={
		image: Story6,
		name: "respondeai"
	}
	
	const StoryObj7={
		image: Story7,
		name: "filomoderna"
	}
	
	const StoryObj8={
		image: Story8,
		name: "memeriagourmet"
	}
	const StoriesArray = [StoryObj1, StoryObj2, StoryObj3, StoryObj4, StoryObj5, StoryObj6, StoryObj7, StoryObj8]
	
	return (
		<div class="stories">
			{StoriesArray.map(Story)}
			<div class="setinha">
				<ion-icon name="chevron-forward-circle"></ion-icon>
			</div>
		</div>
	)
	
}
