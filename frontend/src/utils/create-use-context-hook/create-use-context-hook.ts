import { Context, useContext } from "react";

export function createUseContextHook<T>(
  theContext: Context<T | null>
): () => T {
  return () => {
    const context = useContext(theContext);
    if (context === null) {
      throw new Error(
        `${theContext.displayName} is null, wrap your component with a matching Provider`
      );
    }
    return context;
  };
}
