import React from "react";
import "antd/dist/antd.min.css"
import { Spin } from "antd";

function Spinner() {
  return (
    <div className="spinner">
      <Spin color='gray' style={{color:'gray'}} size='large'/>
    </div>
  );
}

export default Spinner;