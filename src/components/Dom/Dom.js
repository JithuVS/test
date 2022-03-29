import { useState } from "react";

const Dom = ({ learn = "React" }) => {
  const [data, setData] = useState([learn]);

  const click = (e) => {
    setData([...data, e.target.textContent]);
  };

  return (
    <>
      <section>
        <div className="margin">Learn</div>
        <div data-test="data">
          {data.map((item) => {
            return <span key={Math.random()}>{item} </span>;
          })}
        </div>
        <br></br>
        <br></br>
        <div onClick={click}>
          <button data-test='css' className="button">CSS</button>
          <button className="button">HTML</button>
          <button className="button">React</button>
          <button className="button">Redux</button>
        </div>
      </section>
    </>
  );
};

export default Dom;
