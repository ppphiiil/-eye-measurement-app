import React from "react";
import { createUseContextHook } from "../../../utils/create-use-context-hook";

export interface Services {}

interface Props {
  children: React.ReactNode;
  services: Services;
}

const ServiceContext = React.createContext<Services | null>(null);
ServiceContext.displayName = "ServiceContext";

export const ServiceProvider = ({ children, services }: Props) => {
  return (
    <ServiceContext.Provider value={services}>
      {children}
    </ServiceContext.Provider>
  );
};

export const useServices = createUseContextHook(ServiceContext);
