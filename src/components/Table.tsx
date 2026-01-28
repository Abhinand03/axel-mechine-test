import { useEffect, useState } from "react";
import { users } from "./common/Data";

function Table() {
  const [isDropdownOpen, setIsDropdownOpen] = useState<string>("");
  const [openDirection, setOpenDirection] = useState<string>("bottom");
  const [checkedItems, setCheckedItems] = useState<number[]>([]);

  const handleDropdown = (e: any, user: any) => {
    const dropdownHeight = 160;
    const rect = e.currentTarget.getBoundingClientRect();
    const spaceBelow = window.innerHeight - rect.bottom;
    const spaceAbove = rect.top;
    if (spaceBelow < dropdownHeight && spaceAbove > dropdownHeight) {
      setOpenDirection("top");
    } else {
      setOpenDirection("bottom");
    }

    setIsDropdownOpen(user.username);
  };

  const handleCheck = (id: number) => {
    setCheckedItems(
      (prev) =>
        prev.includes(id)
          ? prev.filter((item) => item !== id) 
          : [...prev, id],
    );
  };

  
useEffect(() => {
  const handleScroll = () => setIsDropdownOpen("");

  window.addEventListener("scroll", handleScroll);

  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  return (
    <div className="table-wrapper">
        {
            isDropdownOpen !== '' && <div className="backdrop" onClick={() => setIsDropdownOpen("")}></div>
        }
      <table>
        <thead>
          <tr>
            <th className="name-th">
              <div>
                <input
                  checked={checkedItems.length === users.length}
                  onChange={(e) =>
                    setCheckedItems(
                      e.target.checked ? users.map((u) => u.id) : [],
                    )
                  }
                  type="checkbox"
                  name=""
                  id=""
                />
                <span>Name</span>
              </div>
            </th>
            <th>Status</th>
            <th>Role</th>
            <th>Email address</th>
            <th>Teams</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className="name-col">
                <input
                  type="checkbox"
                  checked={checkedItems.includes(user.id)}
                  onChange={() => handleCheck(user.id)}
                />

                <img src={user?.image} alt="" />
                <div>
                  <span className="name">{user.name}</span>
                  <span>{user.username}</span>
                </div>
              </td>

              {/* Status */}
              <td>
                <div className="status-col">
                    
                  <div
                    className="status"
                    onClick={(e) => handleDropdown(e, user)}
                  >
                    {user.status.map((s) => (
                      <span
                        key={s}
                        className={`badge ${s.toLowerCase().replace(" ", "-")}`}
                      >
                       <i className={`fa-solid fa-circle-dot dot-class ${s.toLowerCase().replace(" ", "-")}`}></i>
                        {s}
                      </span>
                    ))}
                  </div>
                  {isDropdownOpen === user.username && (
                    <div>
                      <div className={`dropdown-arrow ${openDirection}`}></div>
                      <div className={`status-dropdown ${openDirection}`}>
                        <input type="text" placeholder="search.." name="" id="" />
                        <p onClick={() => setIsDropdownOpen("")}>Active</p>
                        <p onClick={() => setIsDropdownOpen("")}>Inactive</p>
                        <p onClick={() => setIsDropdownOpen("")}>Busy</p>
                        <p onClick={() => setIsDropdownOpen("")}>Away</p>
                        <p onClick={() => setIsDropdownOpen("")}>Terminated</p>
                        <hr />
                        <p>
                          {" "}
                          <i className="fa-solid fa-circle-plus"></i> Add New
                          Status
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </td>

              <td>{user.role}</td>

              <td>{user.email}</td>

              <td>
                <div className="teams">
                  {user.teams.map((team) => (
                    <span key={team} className={`team ${team.toLowerCase()}`}>
                      {team}
                    </span>
                  ))}
                  <span className="team more">+4</span>
                </div>
              </td>

              <td className="actions"><i className="fa-solid fa-pen"></i> <i className="fa-solid fa-trash"></i></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default Table;
