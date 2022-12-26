import { Stack,Button } from "@mui/material";
import { Link } from "react-router-dom";

import { logo } from "../utils/constants";
import SearchBar from "./SearchBar";

const Navbar = () => (
  <Stack
  // add z-index to make it solid and not transparent 
    zIndex={100}
    direction="row"
    alignItems="center"
    opacity={1}
    fill="white"
    p={2}
    sx={{
      position: "Sticky",
      background: "white",
      top: 0,
      justifyContent: "space-between",
    }}
  >
    <div to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="logo" height={45} />
    </div>
    <Button variant="text"sx={{color: "black", fontSize:"28", FontWeight:"bold"}}>Credentials</Button>
    <Button variant="text"sx={{color: "black", fontSize:"28", FontWeight:"bold"}} >Department</Button>
    <Button variant="text"sx={{color: "black", fontSize:"28", FontWeight:"bold"}}>Research</Button>
    <Button variant="text"sx={{color: "black", fontSize:"28", FontWeight:"bold"}}>Activities</Button>
    <Button variant="text"sx={{color: "black", fontSize:"28", FontWeight:"bold"}}>About IIITm</Button>
    <SearchBar />
  </Stack>
);

export default Navbar;
