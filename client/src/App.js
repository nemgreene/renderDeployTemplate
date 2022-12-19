import React, { useEffect, useState } from "react";
import { ApiClient } from "./apiClient";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

function App() {
  const client = new ApiClient();
  const [loaded, changeLoaded] = useState(false);

  useEffect(() => {
    const checkServerOnload = async () => {
      changeLoaded(await (await client.checkServer()).data);
    };
    checkServerOnload();
  }, []);
  return (
    <div className="App">
      <div className="checkContainer">
        <h1>{loaded ? "Server Loaded" : "Server Loading"}</h1>
        <h1 style={{ fontSize: "10rem" }}>{loaded ? "✅" : "❌"}</h1>
      </div>
    </div>
  );
}

export default App;
