import React from "react";
import { useForm } from "react-hook-form";

import "./form.css";

type FormData = {
  firstName: string;
  lastName: string;
  age: number;
  email: string;
}

export const Form = () => {
  const { register, handleSubmit, errors } = useForm<FormData>();

  const onSubmit = handleSubmit(({ firstName, lastName, age, email }) => {
    console.log(firstName, lastName, age);
    window.alert(`firstName: ${firstName}, lastName: ${lastName}, age: ${age}, email: ${email} `);
  })

  return (
    <form onSubmit={onSubmit}>

      <div>
        <label htmlFor="firstName">First Name</label>
        <input name="firstName" ref={register({})} /> {/* register an input */}
      </div>

      <div>
        <label htmlFor="lastName">Last Name</label>
        <input
          name="lastName"
          ref={register({
            required: "Last name is required.",
            maxLength: {
              value: 15,
              message: "Max length is 15"
            }
          })}
        />
      </div>

      <div>
        <label htmlFor="age">Age</label>
        <input name="age" ref={register({ pattern: /\d+/ })} />
        {errors.age && <p>Please enter number for age.</p>}
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input
          name="email"
          ref={register({
            pattern: {
              value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: "Invalid email addres"
            }
          })}
          placeholder="mailAddress1@somemail.com"
        />
      </div>

      <input type="submit" />
    </form>
  );
};
