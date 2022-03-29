import { useRef, useState } from "react";
import { getRepos } from './Fetch';

const Axios = () => {
  const [data, setData] = useState([]);
  const inputName = useRef(null);

  const click = async (e) => {
    const userName = inputName.current.value;
    const result = await getRepos(userName);
    setData(result);
  };

  return (
    <>
      <section>
        <input type="text" id="username" ref={inputName} className='fields'></input>
        <button onClick={click}>Submit</button>
        <hr></hr>
        <ul className='left'>
        {data.map((item) => {
          return (
            <li key={item.id}>
              {item.name}
            </li>
          );
        })}
        </ul>
      </section>
    </>
  );
};

export default Axios;
