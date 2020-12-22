import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background-image: url("https://lh3.googleusercontent.com/h2WXBqMNYaYsCAewO-sEasefhtBqDQuVdOMfhH5Q9JgztTyFnR45UnOENFUhEgCrKdouE8XlY4fzDL8UX_tt2X1AtWdLNjn1C4uoHPDyuwqX3t35XMQA-qZae4NsZmqZp0jI-3pG_LcIDZUhA7AbF_IgzvMnmuXr0fucaXYqsus1rRN25xEspsiphwAPpoj9q74sfaBgK_6cOIYhnYD7F0UKWQpA5ptBRTEH8KJqK2hSSPj93akQI9O8h21bCLd6HRo_0zFQN_VgWUC2OY_AjDG7o3JfjeiTk87_d7k1CKlewMmJ24kMWTMUJQqXcDyf27nFLSCGUJ-FiZShg8bpHcjKtQ2vnEf84z36St0_GSf7A2mPBmZHW6ZtWb1-vZv71KDQawyuwQHkOGitZn3dfdQwmG8CwR2eiwGoro2zgyLjG4CyzB1Kkc_zRd5la9eJKhRuWZbyoSH6P30Op9uDEHxJFg7aw9QrdfeGbRuIt2164_fbFF7F7mOm5aywX-FCfvJVBGQGtfhdKSmFlypzoG51n_dAn3xjfXnc0zetPFNOwAh8q9uY8NdAphW00fdPdfzLWPKGOoeYVcztI6AY09HNSLRDbaRh3OzXqbmhG3RR0Do2Z1IVHVaQ3Hdj5_75TWdUfgss_n1EM-b84gV-9Z_VJ81KN6PUoAZu20z1sgsma6B5eq_AN7ad8M4Fdg=w1639-h922-no?authuser=0");
  min-height: 100vh;
  height: 100vh;
  min-width: 100vw;
  width: 100vw;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  justify-content: flex-end;
  align-items: center;
  display: flex;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 10%;
  width: 40%;
`;

const Title = styled.h1`
  font-size: 40px;
  color: #000000;
  margin: 0px !important;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const Description = styled.p`
  font-size: 14px;
  color: #000000;
`;

function HomePage() {
  return (
    <Wrapper>
      <InfoWrapper>
        <Title>Hi, I am Harsohail Brar 👋</Title>
        <Description>Passionate about Software Development</Description>
      </InfoWrapper>
    </Wrapper>
  );
}

export default HomePage;
