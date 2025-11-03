import "./App.css";
import Body from "./Components/Body.jsx";
import Head from "./Components/Head.jsx";
import { Provider } from "react-redux";
import store from "./Utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import useOnlineStatus from "./CustomHooks/useOnline";
import OfflinePage from "./Utils/OfflinePage";
import UserNameModal from "./Components/userNameModal";
import { useState, Suspense, lazy } from "react";
import NotFound from "./Utils/NotFound";
import LoadingSkeleton from "./Utils/LoadingSkelton.jsx";
// 💤 Lazy load heavy pages
const MainContainer = lazy(() => import("./Components/MainContainer.jsx"));
const WatchPage = lazy(() => import("./Components/WatchPage.jsx"));
const SearchResults = lazy(() => import("./Components/SearchResults.jsx"));

function App() {
  const isOnline = useOnlineStatus();
  const [showNameModal, setShowNameModal] = useState(true);

  const apprRouter = createBrowserRouter([
    {
      path: "/",
      element: isOnline ? <Body /> : <OfflinePage />,
      children: [
        {
          path: "/",
          element: (
            <Suspense fallback={<LoadingSkeleton />}>
              <MainContainer />
            </Suspense>
          ),
        },
        {
          path: "watch",
          element: (
            <Suspense fallback={<LoadingSkeleton />}>
              <WatchPage />
            </Suspense>
          ),
        },
        {
          path: "results",
          element: (
            <Suspense fallback={<LoadingSkeleton />}>
              <SearchResults />
            </Suspense>
          ),
        },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);

  return (
    <Provider store={store}>
      <div className="relative">
        <RouterProvider router={apprRouter} />
        {showNameModal && <UserNameModal setShowNameModal={setShowNameModal} />}
      </div>
    </Provider>
  );
}

export default App;
