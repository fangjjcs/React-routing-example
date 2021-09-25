import React, { useReducer, useCallback } from "react";

import "./NewPlace.css";
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../shared/util/validators";

const formReducer = (state, action) => {
  switch (action.type) {
    case "INPUT_CHANGE":
      let formIsValid = true;
      for (const inputId in state.inputs) {
        if (inputId === action.inputId) {
          formIsValid = formIsValid && action.isValid;
        } else {
          formIsValid = formIsValid && state.inputs[inputId].isValid;
        }
      }
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.inputId]: { value: action.value, isValid: action.isValid },
        },
        isValid: formIsValid,
      };
    default:
      return state;
  }
};

const NewPlace = () => {
  const [formState, dispatch] = useReducer(formReducer, {
    inputs: {
      title: {
        value: "",
        isValid: false,
      },
      description: {
        value: "",
        isValid: false,
      },
      address: {
        value: "",
        isValid: false,
      }
    },
    isValid: false,
  });

  const inputHandler = useCallback((id, value, isValid) => {
    dispatch({
      type: "INPUT_CHANGE",
      value: value,
      isValid: isValid,
      inputId: id,
    });
  }, []);

  const placeSubmitHandler = (event) => {
    event.preventDefault();
    // send data to server !!!
    console.log(formState.inputs);
  };

  return (
    <div className="new-place-page">
      <h1>Add a new place !</h1>
      <form className="form" onSubmit={placeSubmitHandler}>
        <Input
          id="title"
          element="input"
          type="text"
          label="Title"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="please enter a valid title."
          onInput={inputHandler}
        />
        <Input
          id="description"
          element="textarea"
          type="text"
          label="Description"
          validators={[VALIDATOR_MINLENGTH(10)]}
          errorText="please enter description for at least 10 charactors."
          onInput={inputHandler}
        />
        <Input
          id="address"
          element="input"
          type="text"
          label="Address"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="please enter a valid address."
          onInput={inputHandler}
        />
        <div className="new-place-actions">
            <Button type="submit" disabled={!formState.isValid} >
                ADD PLACE
            </Button>
        </div>
      </form>
    </div>
  );
};

export default NewPlace;
