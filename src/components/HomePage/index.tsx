import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background-image: url("https://lh3.googleusercontent.com/gPMYXR4SUZE2sk9-eWPx95sTuVVW2mgxJx2H_yO1Adp3eN11HDF8xgsdr1XdaezkNmldh2VUP5cpdiDNSuokhbcJtCf96P9M4Ow8qY-jJJo0su8okPf0az5rUqNbFnoglKAGILT_aDPgygVnClZVVx7FhSObwFdkBdDjGct3pZd0wnfI-gw0DMHgwrten2dMnjetiYOhrfNwfx7TXhGBsslx50_rgE7ZDERWB5v8PII1pDmQZLNdH9NOcGvRk_ja6aRy1LyzhU1_17qDL6gPCIAjreCIeETUyY7SIhNoD-GkRG3NaIWJ5wQfv0BnaeUri4XGTzrSZjrZBq0oK_zKZsMjqZ9qb7rLx5NVOohqr4PPKJnWbrNHathrbrLggumWd8lw-SSii2j4XB1HFXYhGfHzzXrTbBUQUjer-ms0DWxlE1x4rEyWn9YpuQC-80LgT19fKVMWpL6dxm0L5qzmwCAUgCc8kfa1ncC8ynFZabH93iwf-TWav_fLRnIpp6-jg6A41Y6B2NnixQb1yHqFVsVSpT0Q3yt1ExsDrFIcJAtpI_cCXlqP_rBegGzhtlOt8NXKKRQKUP9YyW0NSr0JE4d4D1A3MwiDsmrWX5uZHHTDsV19X-WtUx-GVU_ncVYI2S8q6z1gvO1X4zFYlQuGpGgV0QJKDhCWod7EtUw1bixIKnJJY86aFkoFvl9qRA=w1639-h922-no?authuser=0");
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
