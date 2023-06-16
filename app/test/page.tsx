import React from "react";

const array = ["(˚Δ˚)b", "(≥o≤)", "\\(^Д^)/", "(^_^)b", "(·_·)", "(='X'=)"];
const NotFoundPage = () => {
  return <div>{array.map((v) => v)}</div>;
};

export default NotFoundPage;
