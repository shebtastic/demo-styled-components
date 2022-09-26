import styled from "styled-components";

// function MenuItem({children, ...props}) {
//   return (
//     <ListItem className="menu-item" {...props}>
//       <SpecialUeberschrift>Hallo</SpecialUeberschrift>
//       <a href="#" >{children}</a>  
//     </ListItem>
//   )
// }

const MenuItem = styled.li`
  flex-grow: 1;
  border-bottom: 1px solid ${({active}) => active ? "red" : "black"};
  padding: 15px;
  transition: 0.4s;

  &:hover {
    background-color: darkseagreen;
    color: white;
  }
`

const SpecialUeberschrift = styled.h1``

export default MenuItem