import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import logodeliveroo from "./images/logo-deliveroo.svg";
import Header from "./components/Header";

function App() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [basket, setBasket] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://site--test-deliveroo-backend--kq885dbc6xpm.code.run/"
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
      <div className="main">
        {/* restaurant */}
        <div className="restaurant">
          <div className="text-restaurant">
            <h2>{data.restaurant.name}</h2>
            <p>{data.restaurant.description}</p>
          </div>
          <img src={data.restaurant.picture} alt="" />
        </div>

        {/* categories */}
        <div className="all-categories">
          {data.categories.map((category) => {
            return (
              <div className="box">
                <h3>{category.name}</h3>

                {/* second map sur les menus */}
                <div className="categorie">
                  {category.meals.map((meal) => {
                    return (
                      <div
                        key={meal.id}
                        className="meal"
                        onClick={() => {
                          // console.log(meal.id);
                        }}
                      >
                        <div>
                          <h4 className="title">{meal.title}</h4>
                          <div className="description-container">
                            <p className="description">{meal.description}</p>
                          </div>

                          <p className="price">{meal.price} €</p>
                          <span>{meal.popular}</span>
                        </div>

                        {meal.picture && <img src={meal.picture} alt="" />}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
