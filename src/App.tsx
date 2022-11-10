import { Box, Button } from "@mui/material";
import { useEffect, useState } from "react";
import "./App.css";
import CardList from "./components/CardList";
import { ApiData } from "./components/Context";
import Sidebar from "./components/Sidebar";
function App() {
  const [Data, setData] = useState([]);
  const [loading, setloading] = useState(false);
  const [error, setError] = useState(false);

  async function getData() {
    try {
      setloading(true);
      const res = await fetch(
        `https://bikeindex.org:443/api/v3/search?page=1&per_page=50&location=sydney&distance=10&stolenness=proximity`,
        {
          headers: {
            // 'Authorization': 'Bearer 2b8Qd-E0WdW0Q1FAhKFxH3VAtod7mGbOVBZ82nyTwWk',
        }
        }
      );
      const json = await res.json();
      setData(json.bikes);
      setloading(false);
    } catch (error) {
      setError(true);
    }
  }
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <ApiData.Provider value={Data}>
        {loading ? <p>Loading</p> : error ? <p>Eror</p> : <CardList />}
      </ApiData.Provider>
    </div>
  );
}

export default App;
