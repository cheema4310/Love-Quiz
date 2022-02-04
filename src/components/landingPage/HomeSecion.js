import { Link } from "react-router-dom";

import homeImg from "../../assests/undraw_quick_chat_re_bit5.svg";
import "./HomeSection.css";

const HomeSection = () => {
  return (
    <section className="homeSection">
      <div className="home-textWrapper">
        <h2>Love Language Quiz</h2>
        <div className="home-textInner">
          <h5>
            To find your type, read the given statements and choose the ones
            that deeply resonate with you. Both Statements may sound like they
            fit your situation but please select the statement that captures the
            essence of what is most meaningful to you in your relationship.
          </h5>
          <div className="home-imgWrapper">
            <img src={homeImg} alt="quiz" />
          </div>
        </div>
        <p>
          The concept of love languages was developed by{" "}
          <strong>Gary Chapman Ph.D.</strong>,<br /> in his book The 5 Love
          Languages
        </p>

        <Link to="/quiz">Take a Quiz</Link>
      </div>
    </section>
  );
};
export default HomeSection;
