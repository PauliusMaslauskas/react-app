import Button from "./Button";
import { ACTIONS } from "../../pages/Calculator";

function OperationButton({dispatch, operation}) {
    return(
        <Button
        onClick={() => dispatch({ type: ACTIONS.OPERATION, payload: { operation } })}
      >
        {operation}
      </Button>
    );
}

export default OperationButton;