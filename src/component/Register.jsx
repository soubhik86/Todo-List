import React from 'react';
import { useForm } from 'react-hook-form';
import './style.css';
import { useDispatch } from 'react-redux';
import { addTodo } from '../Redux/TodoSlice';
import {useNavigate} from "react-router-dom"

export const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const onSubmit = (data) => {
   dispatch(addTodo(data));
   navigate("/list")
    console.log(data); 


  };

  return (
    <div className="form-container">
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Create Todo</h1>
      <div>
        <label>Title:</label>
        <input type="text" name="title" {...register('title', { required: true })} />
        {errors.title && <span>Title is required</span>}
      </div>

      <div>
        <label>Description:</label>
        <textarea name="description" {...register('description', { required: true })} />
        {errors.description && <span>Description is required</span>}
      </div>

      <div>
        <label>End Date:</label>
        <input type="date" name="endDate" {...register('endDate', { required: true })} />
        {errors.endDate && <span>End Date is required</span>}
      </div>

      <div>
        <label>
          Completed:
          <input type="checkbox" name="isCompleted" {...register('isCompleted')} />
        </label>
      </div>

      <button type="submit">Submit</button>
    </form>
  </div>
  );
};
