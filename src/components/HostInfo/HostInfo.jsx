import React from "react";
import "./hostinfo.scss";

const HostInfo = ({ host }) => {
  return (
    <div className="host-info">
      <span>{host.name}</span>
      <img src={host.picture} alt={host.name} className="host-image" />
    </div>
  );
};

export default HostInfo;
