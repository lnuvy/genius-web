import useSafeContext from "@/hooks/use-safe-context";
import React, { useMemo } from "react";

/**
 * @param initialProps
 * @returns
 */
export const createDynamicContext = <TProps extends object>() => {
  const Context = React.createContext<TProps | null>(null);

  const useContext = () => {
    return useSafeContext(Context);
  };

  const ContextProvider = ({
    children,
    ...props
  }: { children: React.ReactElement | React.ReactElement[] } & TProps) => (
    <Context.Provider value={props as TProps}>{children}</Context.Provider>
  );

  const withContextProvider =
    (Component: React.FunctionComponent<TProps>) => (props: TProps) => {
      const Memoized = useMemo(() => React.memo<TProps>(Component), []);
      const WithProvider = (props: TProps) => (
        <ContextProvider {...props}>
          <Memoized {...props} />
        </ContextProvider>
      );

      return WithProvider;
    };

  return { useContext, Context, ContextProvider, withContextProvider };
};
