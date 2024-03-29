/* eslint-disable react/prop-types */
import { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../config/firebase"
import {InputContainer, StyledInput, StyledButton} from "./styles"
import { showNotification } from '@mantine/notifications';

const Input = ({ uid }) => {
  const [value, setValue] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("adding to firestore- ", value, uid);

    if (!uid) {
      setValue("");
      showNotification({
        message: "Please login to create a todo",
        title: "Auth error",
        color: "red"
      })
    } else if (!value) {
        setValue("");
        showNotification({
          message: "Please enter a valid value",
          title: "Validation error",
          color: "red"
      })
    } else {
      // Add todo to database
      setValue("");
      const todosRef = collection(db, "users", uid, "todos");
      const todoRef = await addDoc(todosRef, {
        completed: false,
        title: value,
        createdAt: serverTimestamp()
      });
      
      console.log(`Todo created with id: ${todoRef.id}`);
    }

  };

  return (
    <InputContainer onSubmit={handleSubmit}>
      <StyledInput
        type="text"
        placeholder="add item"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <StyledButton type="submit" onClick={handleSubmit}>
        <span>Add</span>
      </StyledButton>
    </InputContainer>
  );
};

export default Input;