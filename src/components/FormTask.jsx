import React, { Component } from "react";

import styled from "styled-components";

import allColors from "../styles/colors";
import ColorBox from "./ColorBox";
import { generate as id } from "shortid";

const Input = styled.input`
  border: none;
  border-bottom: 1px solid ${allColors.mainColor};
  background: none;
  outline: none;
  color: ${allColors.mainColor};
`;

const ColorsContainer = styled.div`
  width: 150px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 150px;
  margin: 0 auto 0.5rem;
`;

const Button = styled.button`
  background-color: transparent;
  border: 1px solid ${allColors.mainColor};
  color: ${allColors.mainColor};
  border-radius: 5px;
  padding: 0.3rem 0.5rem;
  cursor: pointer;

  &:hover {
    background-color: ${allColors.colors[0]};
    color: #fff;
  }
`;

//!Por cada color me dibujas un cuadrado y me lo pintas por cada color del array
const FormTask = ({ handleChangeColor, handleSubmit, colorSelected }) => (
  <form onSubmit={handleSubmit}>
    <Input name="title" type="text" />
    <ColorsContainer>
      {allColors.colors.map((color) => (
        <ColorBox
          handleChangeColor={handleChangeColor}
          color={color}
          key={id()}
          isChecked={colorSelected === color}
        ></ColorBox>
      ))}
    </ColorsContainer>

    <Button>Add Task</Button>
  </form>
);

export default FormTask;
