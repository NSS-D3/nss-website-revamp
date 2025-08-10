import { createContext, useContext, ReactNode, RefObject } from "react";
import { ScrollSmoother } from "gsap/ScrollSmoother";

interface ScrollSmootherContextType {
  smootherRef: RefObject<ScrollSmoother | null>;
}

const ScrollSmootherContext = createContext<ScrollSmootherContextType | null>(null);

export function ScrollSmootherProvider({ 
  children, 
  smootherRef 
}: { 
  children: ReactNode;
  smootherRef: RefObject<ScrollSmoother | null>;
}) {
  return (
    <ScrollSmootherContext.Provider value={{ smootherRef }}>
      {children}
    </ScrollSmootherContext.Provider>
  );
}

export function useScrollSmoother() {
  const context = useContext(ScrollSmootherContext);
  if (!context) {
    return { smootherRef: { current: null } };
  }
  return context;
}
