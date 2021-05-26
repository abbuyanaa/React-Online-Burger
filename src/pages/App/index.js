import Toolbar from "../../components/Toolbar";
import BurgerPage from "../BurgerPage";
import styles from "./style.module.css";

function App() {
  return (
    <div>
      <Toolbar />
      <main className={styles.Content}>
        <BurgerPage />
      </main>
    </div>
  );
}

export default App;
