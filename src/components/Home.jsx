import Logo from "../assets/google-logo.png";
import HomeHeader from "./HomeHeader";
import SearchInput from "./SearchInput";
import Footer from "./Footer";
const Home = () => {
  return (
    <div className="flex flex-col h-[100vh]">
      <HomeHeader />
      <main className="grow flex justify-center">
        <div className="w-full px-5 flex flex-col items-center mt-40">
          <img src={Logo} />
          <SearchInput />
          <div className="flex gap-2 text-[#3c4043] mt-8">
            <button className="h-9 px-4 bg-[#f8f9fa] text-sm rounded-md border border-[#f8f9fa] hover:border-[#dadce0] hover:-shadow-c2">
              Google Search
            </button>
            <button className="h-9 px-4 bg-[#f8f9fa] text-sm rounded-md border border-[#f8f9fa] hover:border-[#dadce0] hover:-shadow-c2">
              I'm Feeling Lucky
            </button>
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  );
};

export default Home;
