import React, { useState, useEffect } from "react";
import "./index.css";
import Search from "./Search";
import Station from "./Station";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function App() {
  const [channels, setChannels] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);

  async function getChannels() {
    const result = await fetch(
      "https://api.sr.se/api/v2/channels?format=json&size=100"
    );
    const data = await result.json();
    setChannels(data.channels);
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000);
    setLoading(true);
    return () => clearTimeout(timeout);
  }, [searchTerm]);

  useEffect(() => {
    getChannels();
  }, []);

  function handleSearch(e) {
    setSearchTerm(e.target.value);
  }

  const searchedChannels = channels.filter((channel) =>
    channel.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Search setSearchTerm={setSearchTerm} />
      {loading ? (
        <div id="channels">
          <Skeleton
            count={10}
            height={100}
            width={400}
            containerClassName="channels"
          />
        </div>
      ) : (
        <div id="channels">
          {searchedChannels.map((channel) => (
            <Station key={channel.id} channel={channel} />
          ))}
        </div>
      )}
    </>
  );
}
