import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {
  const [enteredTitle, setTitle] = useState('');
  const [enteredAmt, setAmt] = useState('');
  const [enteredDate, setDate] = useState('');

  //ONLY ONE STATE FOR MULTIPLE CHANGES(ALTERNATIVE TO CREATING 3 STATES)
  // const [enteredInput, setInput] = useState({
  //   enteredTitle:'',
  //   enteredAmt:'',
  //   enteredDate:''
  // });

  const titleChangeHandler = (event) => {  //here event is an object which created automatically after an event occurs.....so we can access it without oing anything

    // console.log(event);  Printing event object

    // console.log(event.target);  Printing event object's target object

    // console.log(event.target.value);  //Accessing target obeject's value attribute

    //------------------------------------------------------------------------------------------------------------------------------------------
    //THE BELOW APPROACH WOULD FAIL IN SOME CASES BECAUSE REACT SCHEDULES STATE UPDATE AND WHEN WE UPDATE MULTIPLE STATES IT MAY RETURN AN OUTDATED STATE

    // setInput({
    //   ...enteredInput,
    //   enteredTitle: event.target.value
    // });

    //INSTEAD USE THIS
    // setInput((prevState) => {
    //   return {...prevState, enteredTitle: event.target.value};
    // });
    //------------------------------------------------------------------------------------------------------------------------------------------

    setTitle(event.target.value);
  };

  const amtChangeHandler = (event) => {
    //BELOW APPROACH WHEN ONE STATE 

    // setInput({
    //   ...enteredInput,
    //   enteredAmt: event.target.value
    // });


    setAmt(event.target.value);
  };
  const dateChangeHandler = (event) => {
    //BELOW APPROACH WHEN ONE STATE 
    // setInput({
    //   ...enteredInput,
    //   enteredDate: event.target.value
    // });

    setDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();  //prevents the submit event from sending request to reload the page

    const expenseData = {
      Title: enteredTitle,
      Amount: enteredAmt,
      Date: new Date(enteredDate)
    };

    props.onSaveExpenseData(expenseData);

    //Nowsetting the fields back to their deault values i.e none
    setTitle('');
    setAmt('');
    setDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' value={enteredTitle} onChange={titleChangeHandler} />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input type='number' min='0.01' step='0.01' value={enteredAmt} onChange={amtChangeHandler} />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input type='date' min='2019-01-01' max='2022-12-31' value={enteredDate} onChange={dateChangeHandler} />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;