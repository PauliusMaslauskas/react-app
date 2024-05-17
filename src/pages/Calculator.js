import { useReducer } from "react";
import Button from "../components/Button";
import DigitButton from "../components/DigitButton";
import OperationButton from "../components/OperationButton";
import { type } from "@testing-library/user-event/dist/type";
import { prettyDOM } from "@testing-library/react";

export const ACTIONS = {
  ADD_DIGIT: "add-digit",
  OPERATION: "operation",
  DELETE_DIGIT: "delete-digit",
  CLEAR: "clear-all",
  EVALUATE: "evaluate",
};

function reducer(state, { type, payload }) {
  switch (type) {
    case ACTIONS.ADD_DIGIT:
      if (state.overwrite) {
        return {
          ...state,
          current: payload.digit,
          overwrite: false,
        };
      }
      if (payload.digit === "0" && state.current === "0") {
        return state;
      }
      if (payload.digit === "." && state.current.includes(".")) {
        return state;
      }
      return {
        ...state,
        current: `${state.current || ""}${payload.digit}`,
      };
    case ACTIONS.OPERATION:
      if (state.current == null && state.previous == null) {
        return state;
      }

      if (state.current == null) {
        return {
          ...state,
          operation: payload.operation,
        };
      }

      if (state.previous == null) {
        return {
          ...state,
          operation: payload.operation,
          previous: state.current,
          current: null,
        };
      }
      return {
        ...state,
        previous: evaluate(state),
        operation: payload.operation,
        current: null,
      };

    case ACTIONS.CLEAR:
      return {};

    case ACTIONS.DELETE_DIGIT:
      if (state.overwrite) {
        return {
          ...state,
          overwrite: false,
          current: null,
        };
      }
      if (state.current == null) return state;
      if (state.current.length === 1) {
        return { ...state, current: null };
      }

      return {
        ...state,
        current: state.current.slice(0, -1),
      };

    case ACTIONS.EVALUATE:
      if (
        state.operation == null ||
        state.current == null ||
        state.previous == null
      ) {
        return state;
      }

      return {
        ...state,
        overwrite: true,
        previous: null,
        operation: null,
        current: evaluate(state),
      };
  }
}
function evaluate({ current, previous, operation }) {
  const prev = parseFloat(previous);
  const curr = parseFloat(current);
  if (isNaN(prev) || isNaN(curr)) return "";
  let computation = "";
  switch (operation) {
    case "+":
      computation = prev + curr;
      break;
    case "-":
      computation = prev - curr;
      break;
    case "*":
      computation = prev * curr;
      break;
    case "÷":
      computation = prev / curr;
      break;
  }
  return computation.toString();
}

function Calculator() {
  const [{ current, previous, operation }, dispatch] = useReducer(reducer, {});

  return (
    <div className="max-w-md mx-auto p-2">
      <div className="grid grid-cols-4 grid-rows-7 gap-4 mt-10 mr-20 ml-20">
        <div className="break-all break-words col-span-full bg-sky-300/25 mt-0.2 items-end flex justify-around justify-end flex-col text-right">
          <div className="text-xs">
            {previous} {operation}
          </div>
          <div>{current}</div>
        </div>
        <Button
          className="col-span-2"
          onClick={() => dispatch({ type: ACTIONS.CLEAR })}
        >
          AC
        </Button>
        <Button onClick={() => dispatch({ type: ACTIONS.DELETE_DIGIT })}>
          DEL
        </Button>
        <OperationButton operation="÷" dispatch={dispatch} />
        <DigitButton digit="1" dispatch={dispatch} />
        <DigitButton digit="2" dispatch={dispatch} />
        <DigitButton digit="3" dispatch={dispatch} />
        <OperationButton operation="*" dispatch={dispatch} />
        <DigitButton digit="4" dispatch={dispatch} />
        <DigitButton digit="5" dispatch={dispatch} />
        <DigitButton digit="6" dispatch={dispatch} />
        <OperationButton operation="+" dispatch={dispatch} />
        <DigitButton digit="7" dispatch={dispatch} />
        <DigitButton digit="8" dispatch={dispatch} />
        <DigitButton digit="9" dispatch={dispatch} />
        <OperationButton operation="-" dispatch={dispatch} />
        <DigitButton digit="." dispatch={dispatch} />
        <DigitButton digit="0" dispatch={dispatch} />
        <Button
          className="col-span-2"
          onClick={() => dispatch({ type: ACTIONS.EVALUATE })}
        >
          =
        </Button>
      </div>
    </div>
  );
}

export default Calculator;
