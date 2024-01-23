import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Home() {
  const navigation = useNavigation();

  const isPageLoading = navigation.state === "loading";
  const value = "some value";
  return (
    <div>
      <Navbar />
      <h1>{isPageLoading ? "Loading..." : <Outlet context={value} />}</h1>
    </div>
  );
}
