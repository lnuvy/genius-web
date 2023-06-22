import React from "react";

interface MatchProps {
  when: boolean | undefined | null;
  children: JSX.Element | JSX.Element[] | string;
}

const Match = (props: MatchProps) => {
  const { when, children } = props;

  if (when) return <>{children}</>;

  return <></>;
};

export default Match;
