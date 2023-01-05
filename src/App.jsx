import { Challenges, Footer, Header, Hero, TestSection } from "./components";

function App() {
  return (
    <div className="flex w-full max-w-[1300px] justify-center items-center flex-col">
      <Header />
      <Hero />
      <TestSection />
      <Challenges />
      <Footer />
    </div>
  );
}

export default App;
