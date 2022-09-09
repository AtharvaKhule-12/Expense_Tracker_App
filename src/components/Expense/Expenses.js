import React,{ useState } from "react";

import ExpensesList from "./ExpensesList";
import ExpenseFilter from "./ExpenseFilter"
import Card from "../UI/Card";
import './Expenses.css'
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {

    const [filteredYear,setFilteredYear] = useState('2020');

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });


    return (
        <Card className='container'>
            <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>

            {/* THIS IS DYNAMIC RENDERING */}
            {/* {filteredExpenses.map((expense) => (
            <ExpenseItem 
            key={expense.id}   //Always add key prop when mapping lists of items else it will display a key prop error in console
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            />
            ))} */}

            <ExpensesChart expenses={filteredExpenses}/>
            <ExpensesList items={filteredExpenses}/>

            {/* THIS IS HARD CODING */}
            {/* <ExpenseItem
                title={props.items[0].title}
                amount={props.items[0].amount}
                date={props.items[0].date}
            ></ExpenseItem>
            <ExpenseItem
                title={props.items[1].title}
                amount={props.items[1].amount}
                date={props.items[1].date}
            ></ExpenseItem>
            <ExpenseItem
                title={props.items[2].title}
                amount={props.items[2].amount}
                date={props.items[2].date}
            ></ExpenseItem>
            <ExpenseItem
                title={props.items[3].title}
                amount={props.items[3].amount}
                date={props.items[3].date}
            ></ExpenseItem> */}
        </Card>
    );
};

export default Expenses;