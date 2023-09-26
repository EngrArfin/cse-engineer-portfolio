import { AwesomeButtonProgress } from "react-awesome-button";
const Button = () => {
  return (
    <div>
      <div>
        <AwesomeButtonProgress
          type="secondary"
          size="medium"
          action={(element, next) => (next)}
        >
          Primary
        </AwesomeButtonProgress>
      </div>
    </div>
  );
};

export default Button;
