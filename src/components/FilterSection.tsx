import sort from "../assets/icons/sortIcon.svg";
import importIcon from "../assets/icons/import.svg";
import exportIcon from "../assets/icons/export.svg";
import filter from "../assets/icons/filter.svg"

function FilterSection() {
  return (
    <div className="filter-section">
      <div>
        <div className="filter-items">
          <div className="filter-search">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder="Search..." className="filter-inp-search" name="" id="" />
          </div>
          <div className="filter-select-container">
            <img src={filter} alt="" />
            <select className="filter-select" name="" id="">
              <option value="">Filter</option>
            </select>
          </div>
          <button className="filter-button">
            <img src={sort} alt="Sort" />Sort
          </button>
          <button className="filter-button">
            <img src={importIcon} alt="Import" />Import
          </button>
          <button className="filter-button">
            <img src={exportIcon} alt="Export" />Export
          </button>
        </div>
      </div>
    </div>
  );
}

export default FilterSection;
