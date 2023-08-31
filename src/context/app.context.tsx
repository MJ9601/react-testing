import { useState, useContext, createContext } from "react";

interface AppContextInterface {
  stage: number;
  setStage: (input: number) => void;
}

const appContext = createContext<AppContextInterface>({
  stage: 0,
  setStage: () => false,
});

export function AppProvider(props: any) {
  const [stage, setStage] = useState(0);

  return <appContext.Provider value={{ setStage, stage }} {...props} />;
}

export const useAppContext = () => useContext(appContext);
