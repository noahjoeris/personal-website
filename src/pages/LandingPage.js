import LandingImage from "../components/LandingImage";
import LandingText from "../components/LandingText";
import "./LandingPageStyles.css";

const LandingPage = () => {
  return (
    // TODO: Try replacing div with MUI container
    <div className="Landing-page">
      <LandingText />
      <LandingImage />
    </div>
  );
};

export default LandingPage;
