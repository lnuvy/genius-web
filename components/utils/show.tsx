import React from "react";

interface ShowProps {
  when: boolean | undefined | null;
  children: JSX.Element | JSX.Element[] | string;
  fallback?: JSX.Element | JSX.Element[] | string;
}

const Show = (props: ShowProps) => {
  const { when, fallback, children } = props;

  if (when) return <>{children}</>;
  if (fallback) return <>{fallback}</>;
  return <></>;
};

export default React.memo(Show);
