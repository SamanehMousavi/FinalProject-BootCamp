import { styled } from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout, isAuthenticated, user } = useAuth0();

  return (
    isAuthenticated && (
      <LogOutContainer>
        <UserName> {user.name}</UserName>
        <Signoutbutton
          onClick={() => {
            window.localStorage.clear();
            logout();
          }}
        >
          Sign Out
        </Signoutbutton>{" "}
      </LogOutContainer>
    )
  );
};
export default LogoutButton;
const LogOutContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  gap: 5%;
  align-items: center;
  margin: 5%;
`;

const Signoutbutton = styled.button`
  opacity: 1;
  color: #00c4cc;
  background-color: transparent;
  border: none;
  font-size: 2rem;
  &:hover {
    color: #cb6ce6;
  }
  &:active {
    scale: 0.9;
  }
`;

const UserName = styled.div`
  opacity: 1;
  color: #00c4cc;
  background-color: transparent;
  border: none;
  font-size: 2rem;
`;
