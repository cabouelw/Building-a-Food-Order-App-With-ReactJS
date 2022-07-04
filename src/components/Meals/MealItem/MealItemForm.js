import { useRef } from 'react';
import { useState } from 'react';
import Input from '../../UI/Input';
import classes from './MealItemFrom.module.css'

const MealItemForm = props => {
	const [amountIsValid, setAmountIsValid] = useState(true);
	const amountIputRef = useRef();

	const submitHanler = event => {
		event.preventDefault();

		const enterAmount = amountIputRef.current.value;
		const enterAmountnumber = +enterAmount;
		if (enterAmountnumber < 1 || enterAmountnumber > 5 || enterAmount.trim().length === 0) {
			setAmountIsValid(false);
			return;
		}
		props.onAddToCart(enterAmountnumber);
	};

	return (
		<form className={classes.form} onSubmit={submitHanler}>
			<Input
			lable='Amount'
			ref={amountIputRef}
			input={{
				id: 'amount' + props.id,
				type: 'number',
				min: '1',
				max: '5',
				step: '1',
				defaultValue: '1'
			}}/>
			<button>+ Add</button>
			{!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
		</form>
	);
};

export default MealItemForm;