import FilterSection from "../components/FilterSection";
import Header from "../components/Header";
import Table from "../components/Table";

function Home() {
  return (
    <div className="home-container">
      <Header />
      <hr />
      <FilterSection/>
      <Table/>
    </div>
  );
}

export default Home;
