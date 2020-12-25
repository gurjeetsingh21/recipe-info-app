import React, { useState } from "react";
import { Navbar, NavItem, Nav, NavbarBrand } from "reactstrap";
import SingletonService from "../sevices/Singleton";
import { useHistory } from "react-router-dom";

const Topbar = () => {
  const [searchString, setSearchString] = useState("");
  const Singleton = SingletonService.getInstance();
  const history = useHistory();

  const handleSearch = () => {
    Singleton.setSearch(searchString);
    history.push("/recipe/search");
    console.log(searchString);
  };
  return (
    <div style={{marginBottom: 60}}>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Home</NavbarBrand>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <input
              placeholder="Search Recipe"
              value={searchString}
              onChange={(e) => setSearchString(e.target.value)}
            />
          </NavItem>
          <NavItem>
            <button type="submit" onClick={handleSearch}>
              Search
            </button>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
};

export default Topbar;
