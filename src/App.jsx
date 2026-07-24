import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import AppLayout from './components/AppLayout';
import Skeleton from './components/Skeleton';

const Landing = lazy(() => import('./pages/Landing'));
const Login = lazy(() => import('./pages/Login'));
const Signup = lazy(() => import('./pages/Signup'));
const Workspace = lazy(() => import('./pages/Workspace'));
const Market = lazy(() => import('./pages/Market'));
const Portfolio = lazy(() => import('./pages/Portfolio'));
const Behavior = lazy(() => import('./pages/Behavior'));
const Insights = lazy(() => import('./pages/Insights'));
const Journey = lazy(() => import('./pages/Journey'));
const Achievements = lazy(() => import('./pages/Achievements'));
const Settings = lazy(() => import('./pages/Settings'));

function PageFallback() {
  return (
    <div className="flex flex-col gap-4 p-6">
      <Skeleton className="h-24 w-full" />
      <Skeleton className="h-64 w-full" />
      <Skeleton className="h-40 w-full" />
    </div>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Suspense fallback={<PageFallback />}>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />

            <Route element={<AppLayout />}>
              <Route path="/workspace" element={<Workspace />} />
              <Route path="/workspace/market" element={<Market />} />
              <Route path="/workspace/portfolio" element={<Portfolio />} />
              <Route path="/behavior" element={<Behavior />} />
              <Route path="/insights" element={<Insights />} />
              <Route path="/journey" element={<Journey />} />
              <Route path="/achievements" element={<Achievements />} />
              <Route path="/settings" element={<Settings />} />
            </Route>

            <Route path="*" element={<Landing />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ErrorBoundary>
  );
}
