import React from "react";

const Misc = () => {
  return (
    <div className="left">
      <ul>
        <li>
          Debug: "test:debug": "react-scripts --inspect-brk test --runInBand
          --no-cache"
        </li>
        <br></br>
        <li>Hooks: jest.fn(), jest-react-hooks-shallow</li>
        <br></br>
        <li>extension: test, spec, __tests__</li>
        <br></br>
        <li>E2E jest-puppeteer</li>
        <br></br>
      </ul>
    </div>
  );
};

export default Misc;
