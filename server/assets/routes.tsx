import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

interface RouteElementOptions {
  allowAnonymous?: boolean;
}

// Next.js pages/ styleにdefault exportされたコンポーネント群をcode splittingのためにlazy importする
function routeElement(module: Parameters<typeof lazy>[0], options?: RouteElementOptions) {
  const Component = lazy(module);
  return <Component />;
}

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: routeElement(() => import('./routes/index')),
    },
  ],
  {
    basename: '/hello',
  },
);
