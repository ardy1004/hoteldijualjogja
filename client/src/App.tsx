import { Switch, Route } from "wouter";
import { useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import { useEffect } from "react";
import { trackPageView, initMetaPixel } from "./lib/metaPixel";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function MetaPixelTracker() {
  const [location] = useLocation();
  
  useEffect(() => {
    // Initialize Meta Pixel on app mount
    initMetaPixel();
  }, []);
  
  useEffect(() => {
    // Track page view on route changes
    trackPageView();
  }, [location]);
  
  return null;
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <MetaPixelTracker />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
