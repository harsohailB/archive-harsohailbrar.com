import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background-image: url("https://lh3.googleusercontent.com/fLgAzXaPAWHy__Pq78vCbr7HDWihupewEhWHjqoqH_KwaouM8CAVxdFGVY3iUah_CMnJKJnVgjpqjVbVnXNTWqmN85v6A3r7NktRHuQHVX3bvTeyVIn7YMTVEjiXXI90e1ww_q8sUvHH9kq641sS4asagwZ6LiE0d40Duz4FC7IB1zBYQYy18USXFh5Qec7mrHr0AmlC_KRFIPyPV-DsBKkW61FzbD8x2n9BQQYrqmN4pa3sQ0RfH9sdlVGWaczMzab88TMtQtFb0iSzXAum1FBC90Ml1eyZ4CfF4YDp8rDpK1mXwzIMCOfjy7DlKhxYfPqQIWSvxXu6L5LtBrPZWqqNkvL5vd-VbDZArOMt13to1hOD9UKPDJ696acBDQnRGdrqrd3duK2N9YQnubw9qws5F-6kDfnmMNI8t85g9Qrk5owyFyPWfNyEune0JovhSlx6cQiCONWRgbwGGXNCyZZE0dF_c-h9AWSJ8YOR6cZjg3Of2YkQaPKvJV-lGHjD7mkfBB0cXnJzSxmERdRk8vBAEEnkrqubPSQvO62ijCk3NG8UEVRcOF3AWp-DKod1CFz4tKPK_xJqVj-qHtkNh3LqZUSUNaoRN4zUGUbF-G7yaUdLA3KhESRI1x1lGUQlFqypPSW6qaZwStf7qA5EAz1Aci65K59SAyuIzjr5oaZZ0gwbaTwc9I4JQQYzmA=w1639-h922-no?authuser=0");
  min-height: 100vh;
  height: 100vh;
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
`;

const Title = styled.h1`
  font-size: 40px;
  color: #000000;
  margin: 0px !important;
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
