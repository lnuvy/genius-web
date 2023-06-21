import { createDynamicContext } from "@/helper/create-dynamic-context";
import { useState } from "react";

interface VersionContext {}

const { ContextProvider, useContext } = createDynamicContext<VersionContext>();

export const useSearchWordContext = useContext;

interface PriceComparisonSearchContextProvider {
  children: JSX.Element;
}

export interface TrackingSearchWordProps {}

const PriceComparisonSearchProvider = ({
  children,
}: PriceComparisonSearchContextProvider) => {
  const [searchWord, setSearchWord] = useState("");

  return <ContextProvider>{children}</ContextProvider>;
};

export default PriceComparisonSearchProvider;
