import React, { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    // Replace with your backend URL
    const backendUrl = "https://java-ylej.onrender.com";

    const fetchData = async () => {
      try {
        const response = await fetch(backendUrl);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Database Content</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            {JSON.stringify(item)} {/* Replace with formatted content if needed */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;