import Header from "./components/Header";

const App = () => {
  return (
    <div className="max-h-screen max-w-screen h-screen w-screen">
      <Header />
      <div className="w-full h-5/6 flex justify-center items-center">
        <h1 className="text-2xl text-green-500 font-bold tracking-wider">
          personal space of val-h
        </h1>
      </div>
    </div>
  );
};

export default App;
