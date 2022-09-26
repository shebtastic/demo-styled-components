import Logo from "../Logo";
import Menu from "../Menu";
import MenuItem from "../MenuItem";

function Navigation() {

  function onClick() {
    console.log("Click!")
  }
  return (
    <nav>
      <Logo />
      <Menu>
        <MenuItem active={true}>Home</MenuItem>
        <MenuItem>About</MenuItem>
        <MenuItem onClick={onClick}>Contact</MenuItem>
      </Menu>
    </nav>
  )
}

export default Navigation
