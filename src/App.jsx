import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
const App = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://site--deliveroo--jb29wjf8x9mr.code.run/"
        );
        console.log(response.data);
        setData(response.data);
        console.log("oui");
        setIsLoading = false;
        console.log(data); // ici
      } catch (error) {
        console.log(error.response);
      }
    };

    fetchData();
  }, []);

  return isLoading ? (
    <span>En cours de chargement ...</span>
  ) : (
    <div>
      {/* {data.map((categorie) => {
        return (
          <div>
            <h2>{categorie.name}</h2>
          </div>
        );
      })} */}
      hello world
    </div>
  );
};

export default App;
