import { createDynamicContext } from "@/helper/create-dynamic-context";
import { useState } from "react";

interface VersionContext {
  isGrandFinal: boolean;
  toggleVersion: () => void;
}

const { ContextProvider, useContext } = createDynamicContext<VersionContext>();

export const uesVersionContext = useContext;

interface VersionContextProvider {
  children: JSX.Element;
}

const VersionProvider = ({ children }: VersionContextProvider) => {
  const [isGrandFinal, setToggle] = useState(true);

  const toggleVersion = () => setToggle((prev) => !prev);

  return (
    <ContextProvider isGrandFinal={isGrandFinal} toggleVersion={toggleVersion}>
      {children}
    </ContextProvider>
  );
};

export default VersionProvider;
