
import React from "react";
import "./index.scss"
import banner from "../../assets/img/fluentui-wide-banner.png"
const Introduction = () => {
  return (
    <>
      <div className='introduction-container'>
        <div className="header">
          <p className="name">Fluent UI React Components</p>
          <p className="version">v9.63.0</p>
        </div>
        <div className="content">
          <div className="banner">
            <img src={banner} alt="" />
</div>
        </div>
        <div className="footer">

        </div>
      </div>

    </>
  );
};
export default Introduction;
