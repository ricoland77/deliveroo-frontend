import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import logodeliveroo from "./images/logo-deliveroo.svg";
import Header from "./components/Header";

function App() {
  const [data, setData] = useState();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "site--test-deliveroo-backend--5wf9vkgf5cjh.code.run"
      );
      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return isLoading ? (
    <p>Loading…</p>
  ) : (
    <div className="container">
      {/* header */}
      <Header logodeliveroo={logodeliveroo} />

      {/* main */}
      <div className="main"></div>
    </div>
  );
}

export default App;
