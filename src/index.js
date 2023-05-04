import ReactDOM from 'react-dom'
import Titulo from './Topo'
import Menu from './Menu'
import Conteudo from './Conteudo'



function App() {
    return (
		<div>
            <Titulo />
            <Menu />
			<Conteudo />
		</div>
	);
}




const app = App();
const elemento = document.querySelector(".root");
ReactDOM.render(app, elemento);
