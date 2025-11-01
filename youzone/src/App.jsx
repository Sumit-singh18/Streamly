import "./App.css";
import Body from "./Components/Body.jsx";
import Head from "./Components/Head.jsx";
import { Provider } from "react-redux";
import store from "./Utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./Components/MainContainer.jsx";
import WatchPage from "./Components/WatchPage.jsx";
import SearchResults from "./Components/SearchResults.jsx";
import useOnlineStatus from "./CustomHooks/useOnline";
import OfflinePage from "./Utils/OfflinePage";
import UserNameModal from "./Components/userNameModal";
import { useState } from "react";

function App() {
  const isOnline = useOnlineStatus();
  const [showNameModal, setShowNameModal] = useState(true);

  const apprRouter = createBrowserRouter([
    {
      path: "/",
      element: isOnline ? <Body /> : <OfflinePage />,
      children: [
        { path: "/", element: <MainContainer /> },
        { path: "watch", element: <WatchPage /> },
        { path: "results", element: <SearchResults /> },
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
