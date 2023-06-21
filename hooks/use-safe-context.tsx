import { Context, useContext } from "react";

/**
 * @param context
 * @returns
 */
const useSafeContext = <T,>(context: Context<T>): NonNullable<T> => {
  const contextState = useContext(context);
  if (contextState == null) {
    throw Error(`해당 Context의 Provider가 상위에 없습니다`);
  }
  return contextState as NonNullable<T>;
};

export default useSafeContext;
