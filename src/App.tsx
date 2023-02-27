import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Main from "./components/layout/Main";

const App = () => {
  return (
    <div className="relative h-screen w-screen">
      <Header />
      {/* Outlet to be in Main */}
      <Main />
      {/* Possibly a sidebar */}
      {/* <Footer /> */}
    </div>
  );
};

export default App;
