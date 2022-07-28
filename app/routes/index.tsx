import styled from "styled-components";

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Welcome to Remix</h1>
      <ul>
        <Greeting>Hey</Greeting>
      </ul>
    </div>
  );
}

const Greeting = styled.p`
  font-size: 20px;
  color: red;
`