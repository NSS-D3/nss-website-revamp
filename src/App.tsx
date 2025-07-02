import { TooltipProvider } from "@radix-ui/react-tooltip";
import { QueryClientProvider } from "@tanstack/react-query";
import { Route, Routes } from "react-router";
import { Toaster } from "./components/ui/toaster";
import Home from "./pages/home";
import { queryClient } from "./lib/queryClient";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
