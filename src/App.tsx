import React from 'react';
import { 
  createRootRoute, 
  createRoute, 
  createRouter, 
  RouterProvider, 
  Outlet 
} from '@tanstack/react-router';
import HomePage from './pages/HomePage';
import HackILusion from './pages/HackILusion';
import { Toaster } from 'react-hot-toast';
import Preloader from './components/Preloader';
import { useState } from 'react';

// --- Route Definitions ---

const rootRoute = createRootRoute({
  component: () => (
    <>
      <Outlet />
      <Toaster position="top-right" />
    </>
  ),
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
});

const hackILusionRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/events/hack-i-lusion',
  component: HackILusion,
});

const routeTree = rootRoute.addChildren([indexRoute, hackILusionRoute]);

const router = createRouter({ routeTree });

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

// --- App Component ---

export default function App() {
  const [showPreloader, setShowPreloader] = useState(true);
  const videoUrl = "https://firebasestorage.googleapis.com/v0/b/blink-451505.firebasestorage.app/o/user-uploads%2Fu98cR31agqSVgWycwUt8UgyrYSA2%2Faurum__ecd9a9ca.mp4?alt=media&token=693d0f78-effe-42aa-a4df-275ff60a26f9";

  return (
    <>
      {showPreloader && (
        <Preloader videoUrl={videoUrl} onComplete={() => setShowPreloader(false)} />
      )}
      <RouterProvider router={router} />
    </>
  );
}