import React from "react";
function Test() {
  const name = "react";
  const style = {
    backgroundColor: "black",
    color: "#ededed",
    fontSize: 24,
    margin: "10rem",
  };
  return (
    <>
      {" "}
      {/*fragment*/}
      <Hello />
      <div style={style}>{name}</div>
      <div className="a">hiii</div>
      {/* ui component reuse */}
    </>
  );
}

export default Test;
