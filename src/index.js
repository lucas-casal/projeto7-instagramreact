import ReactDOM from 'react-dom'
import Navbar from './Navbar';
import Body from "./Body"



function App() {
    return (
        <div>
		    <Navbar />
            <Body />
        </div>
	);
}




const app = App();
const elemento = document.querySelector(".root");
ReactDOM.render(app, elemento);
