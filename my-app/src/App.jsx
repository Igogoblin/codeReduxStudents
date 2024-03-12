import { createBrowserRouter, RouterProvider, RouterProvideru } from "react-router-dom";
import Root from "./app/Root";

const router = createBrowserRouter([{
  path:"/",
  element:<Root />
}])

function App() {
  return <RouterProvider router={router} />;
}

export default App;
