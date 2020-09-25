import React from "react";

const LinkBox = ({ hashid, url }) => {
  return (
    <div>
      <div>
        <p></p>
      </div>
      <div>
        <a href={`https://rel.ink/${hashid}`}>{`https://rel.ink/${hashid}`} </a>
      </div>
      <button>COPY</button>
    </div>
  );
};

export default LinkBox;
