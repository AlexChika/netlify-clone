import styled from "styled-components";
import Banner from "./Banner";
import ChildrenProfile from "./ChildrenProfile";
import DownloadOffline from "./DownloadOffline";
import Footer from "./Footer";
import LandingPageFaqs from "./LandingPageFaqs";
import WatchEveryWhere from "./WatchEveryWhere";
import WatchOnTv from "./WatchOnTv";

const LandingPageOne = () => {
  return (
    <Wrapper>
      <Banner />
      <WatchOnTv />
      <DownloadOffline />
      <WatchEveryWhere />
      <ChildrenProfile />
      <LandingPageFaqs />
      <Footer />
    </Wrapper>
  );
};

export default LandingPageOne;

const Wrapper = styled.div`
  /* general styles */
  h2 {
    font-size: clamp(1.2rem, 8vw, 4.8rem);
    max-width: 600px;
    font-weight: 700;
  }

  h3 {
    font-size: clamp(1rem, 5vw, 2.5rem);
    margin-top: 20px;
    max-width: 600px;
  }
`;