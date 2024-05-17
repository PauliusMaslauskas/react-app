import Button from "./Button";
import { ACTIONS } from "../pages/Calculator";

function DigitButton({ dispatch, digit }) {
  return (
    <Button
      onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })}
    >
      {digit}
    </Button>
  );
}

export default DigitButton;
