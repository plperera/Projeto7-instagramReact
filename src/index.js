import ReactDOM from "react-dom";
import NavBar from './NavBar';
import Conteudo from './Conteudo';
import FundoMobile from "./FundoMobile";

function App() {
    return (
        <div>
            <NavBar />
            <Conteudo />
            <FundoMobile />
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector(".root"));
