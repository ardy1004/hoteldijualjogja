import { Switch, Route } from "wouter";
import { useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import { useEffect, useRef } from "react";
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
  const isFirstRender = useRef(true);
  const hasInitialized = useRef(false);
  
  useEffect(() => {
    // Initialize Meta Pixel only once on app mount
    if (!hasInitialized.current) {
      hasInitialized.current = true;
      initMetaPixel();
    }
  }, []);
  
  useEffect(() => {
    // Track page view on mount and route changes
    // Skip the very first render's automatic tracking - let init handle it
    // or track explicitly after init completes
    if (isFirstRender.current) {
      isFirstRender.current = false;
      // Track initial PageView after init
      trackPageView();
      return;
    }
    
    // Track on subsequent route changes
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
