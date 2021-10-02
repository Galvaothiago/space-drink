import styled from "styled-components";
import { Header } from "./components/Header";

function App() {
  return (
   <Container>
     <Dashboard>
       <Header />
     </Dashboard>
   </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;

  background: #f8f9fa;
  padding: 1rem;
`

const Dashboard = styled.div`
  width: 100%;
  height: 100%;

  background: #dee2e6;
`

export default App;
