import User from "./user";
import { MyProvider } from "../context/index";

const App = () => {

    return(
        <MyProvider>
            <User/>
        </MyProvider>
    )
}

export default App;