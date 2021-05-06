import Toolbar from "../../components/Toolbar";
import BurgerBuilder from "../BurgerBuilder";
import styles from "./style.module.css";

function App() {
  return (
    <div>
      <Toolbar />
      <main className={styles.Content}>
        <BurgerBuilder />
      </main>
    </div>
  );
}

export default App;
