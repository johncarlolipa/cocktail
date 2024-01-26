import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footbar";

export default function Home() {
  const navigation = useNavigation();

  const isPageLoading = navigation.state === "loading";
  const value = "";

  return (
    <div>
      <Navbar />
      {isPageLoading ? (
        <div className="flex items-center justify-center h-screen">
          <div className="animate-spin rounded-full border-t-4 border-yellow-500 border-solid h-16 w-16"></div>
        </div>
      ) : (
        <h1>
          <Outlet context={value} />
        </h1>
      )}
      <Footer />
    </div>
  );
}
