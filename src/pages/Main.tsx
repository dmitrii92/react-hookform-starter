import React from "react";
import { useForm } from "react-hook-form";
import { register } from '../serviceWorker';

type FormData = {
  firstName: string;
  lastName: string;
  age: number;
  email: string;
}

export const Main = () => {
  const { register, handleSubmit, errors } = useForm<FormData>();

  const onSubmit = handleSubmit(({ firstName, lastName, age, email }) => {
    console.log(firstName, lastName, age);
    window.alert(`firstName: ${firstName}, lastName: ${lastName}, age: ${age}, email: ${email} `);
  })

  return (
    <form onSubmit={onSubmit}>

      <input name="firstName" ref={register({})} /> {/* register an input */}

      <input name="lastName" ref={register({ required: true, maxLength: 15 })} />
      {errors.lastName && "Last name is required."}

      <input name="age" ref={register({ pattern: /\d+/ })} />
      {errors.age && "Please enter number for age."}

      <input name="email" ref={register({ pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })} />
      {errors.email && "Please enter correct email address"}

      <input type="submit" />
    </form>
  );
};
