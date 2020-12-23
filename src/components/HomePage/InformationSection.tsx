import React from "react";
import { FaGraduationCap, FaSuitcase } from "react-icons/fa";
import styled from "styled-components";

import InformationTile from "./InformationTile";
import { InformationTileProps } from "./InformationTile";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

const SubSection = styled.div`
  display: flex;
  align-items: center;
  margin: 20px;

  @media (max-width: 768px) {
    margin: 10px;
  }
`;

const Icon = styled.div`
  font-size: 40px;
  color: #bbb;

  @media (max-width: 768px) {
    font-size: 25px;
  }
`;

const Seperator = styled.div`
  height: 75px;
  width: 5px;
  background-color: #bbb;
  border-radius: 10px;
  margin: 20px;

  @media (max-width: 768px) {
    height: 60px;
    width: 5px;
    margin: 10px;
  }
`;

const InformationTilesWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const InformationSection = () => {
  const husky: InformationTileProps = {
    logo:
      "https://seeklogo.com/images/H/Husky_Energy-logo-EF0DD70B09-seeklogo.com.png",
    title: "Husky Energy",
    subtitle: "Software Development Co-op Student",
    timeline: "September 2020 - Present",
  };

  const engineering: InformationTileProps = {
    logo:
      "https://images.squarespace-cdn.com/content/v1/581a2b266b8f5bc983100b1c/1571939569496-CUEN33JNXVNQZCD4PP9Q/ke17ZwdGBToddI8pDm48kDcgUI-c5XYPeqYcSJNpsP5Zw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVFdbalpPJqmSdPHfBSOTtp5a9CYdbb8_mmzVt50aZtsUFTL3NBKIiKtV-X3R_Kydsk/u+of+c+logo.jpg",
    title: "Schulich School of Engineering",
    subtitle: "Software Engineering",
    timeline: "2017 - Present",
  };

  const business: InformationTileProps = {
    logo:
      "https://images.squarespace-cdn.com/content/v1/581a2b266b8f5bc983100b1c/1571939569496-CUEN33JNXVNQZCD4PP9Q/ke17ZwdGBToddI8pDm48kDcgUI-c5XYPeqYcSJNpsP5Zw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVFdbalpPJqmSdPHfBSOTtp5a9CYdbb8_mmzVt50aZtsUFTL3NBKIiKtV-X3R_Kydsk/u+of+c+logo.jpg",
    title: "Haskayne School of Business",
    subtitle: "Commerce",
    timeline: "2017 - Present",
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Wrapper>
        {/* Experience Section */}
        <SubSection>
          <Icon>
            <FaSuitcase />
          </Icon>
          <Seperator />

          <InformationTilesWrapper>
            <InformationTile {...husky} />
          </InformationTilesWrapper>
        </SubSection>
        {/* Education Section */}
        <SubSection>
          <Icon>
            <FaGraduationCap />
          </Icon>
          <Seperator />

          <InformationTilesWrapper>
            <InformationTile {...engineering} />
            <InformationTile {...business} />
          </InformationTilesWrapper>
        </SubSection>
      </Wrapper>
    </div>
  );
};

export default InformationSection;
