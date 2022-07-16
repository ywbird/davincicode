import React from "react";

const Home = () => {
  return (
    <>
      <h1>Enter Nickname</h1>
      <form>
        <input
          type="text"
          placeholder="Nickname"
          minLength={3}
          maxLength={15}
          required
        />
        <input
          type={"number"}
          placeholder="Game ID"
          min={0}
          step="1"
          required
        />
        <input type="submit" value="Enter" />
      </form>
    </>
  );
};

export default Home;
