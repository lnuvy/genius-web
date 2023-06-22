import React, { Children, ReactElement } from "react";

interface SwitchProps {
  children: JSX.Element[];
  fallback?: JSX.Element | JSX.Element[] | string;
}

const Switch = (props: SwitchProps) => {
  const { fallback, children } = props;

  const match = Children.toArray(children).find(
    (child): child is ReactElement<any> =>
      React.isValidElement(child) && child.props.when
  );

  if (!!match) return <>{match}</>;

  if (fallback) return <>{fallback}</>;

  return <></>;
};

export default React.memo(Switch);
