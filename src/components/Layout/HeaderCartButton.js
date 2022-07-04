import { useContext } from 'react';
import { useEffect, useState } from 'react';
import CartContext from '../../store/cart-context';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css'

const HeaderCartButton = props => {
    const cartCtx = useContext(CartContext)
    const { items } = cartCtx;
    const nmbrOfCartItems = items.reduce((curr, item) => {
        return (curr + item.amount);
    }, 0);
    const [btnUpdateClasses, setBtnUpdateClasses] = useState(false);
    const btnClasses = `${classes.button} ${btnUpdateClasses ? classes.bump : ''}`;
    useEffect(() => {
        if (items.length === 0)
            return;
        setBtnUpdateClasses(true);
        const timer = setTimeout(() => {
            setBtnUpdateClasses(false);
        }, 300);

        return () => {
            clearTimeout(timer);
        }
    }, [items]);

    return (
        <button className={btnClasses} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon/>
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{nmbrOfCartItems}</span>
        </button>
    );
};

export default HeaderCartButton;