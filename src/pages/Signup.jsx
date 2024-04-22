import Templates from "../Components/Templates";
import signupImg from "../assets/signup.png";

function Signup({ setIsLoggedIn }) {
  return (
    <Templates
      title="Join the millions learning to code with StudyNotion for free"
      description1="Build skills for today, tomorrow, and beyond."
      description2="Education to future-proof your career."
      image={signupImg}
      formType="signup"
      setIsLoggedIn={setIsLoggedIn}
    />
  );
}

export default Signup;
