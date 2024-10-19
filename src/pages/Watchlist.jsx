import React from "react";

const Watchlist = () => {
    return (
        <div id="catalog__body">
            <main id="catalog__main">
                <div className="catalog__container">
                    <div className="row">
                        <div className="movie__selected--top">

                            {/* Watchlist title. */}
                            <h2 className="cart__title">
                                <span className="blue">Your Watchlist</span>
                            </h2>
                        </div>

                        <div className="watchlist">

                            {/* Header. */}
                            <div className="watchlist__header">
                                <span className="watchlist__poster">Movie</span>
                                <span className="watchlist__type">Movie Type</span>
                                <span className="watchlist__complete">Completion</span>
                            </div>

                            {/* Body. */}
                            <div className="watchlist__body">
                                <div className="watchlist__item">

                                    {/* Poster. */}
                                    <div className="watchlist__poster">
                                        <img src="https://m.media-amazon.com/images/M/MV5BODIyMDdhNTgtNDlmOC00MjUxLWE2NDItODA5MTdkNzY3ZTdhXkEyXkFqcGc@._V1_SX300.jpg"
                                        className="watchlist__poster--img"/>
                                    </div>
                                    
                                    {/* Movie type and removal. */}
                                    <div className="watchlist__poster--info">
                                        <span className="watchlist__poster--title">
                                            Batman
                                        </span>
                                        <button className="watchlist__poster--remove" >{/* onClick={() => removeItem(book)} */}
                                            Remove
                                        </button>
                                    </div>

                                    {/* Play button and complete button. */}
                                    <div className="watchlist__buttons">
                                        Button
                                    </div>
                                </div>
                                {/* {
                                    cart.map(book => {
                                        return (
                                            <div className="cart__item">
                                                <div className="cart__book">
                                                    <img src={book.url} className="cart__book--img" alt="" />
                                                    <div className="cart__book--info">
                                                        <span className="cart__book--title">
                                                            {book.title}
                                                        </span>
                                                        <span className="cart__book--price">
                                                            ${(book.salePrice || book.originalPrice).toFixed(2)}
                                                        </span>
                                                        <button className="cart__book--remove" onClick={() => removeItem(book)}>
                                                            Remove
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="cart__quantity">
                                                    <input
                                                        type="number"
                                                        min={0}
                                                        max={99}
                                                        className="cart__input"
                                                        value={book.quantity}
                                                        onChange={(event) => changeQuantity(book, event.target.value)} />
                                                </div>
                                                <div className="cart__total">
                                                    ${(book.quantity * (book.salePrice || book.originalPrice)).toFixed(2)}
                                                </div>
                                            </div>
                                        )
                                    })
                                } */}
                                
                            </div>

                            {/* Only render this section if there are no product in cart. */}
                            {/* {cart.length === 0 && <div className="cart__empty">
                                <img src={EmptyCart} alt="" className="cart__empty--img" />
                                <h2>You do not have any books in your cart.</h2>
                                <Link to="/books">
                                    <button className="btn">Browse in Wonderland</button>
                                </Link>
                            </div>} */}
                        </div>
                        
                        {/* Only render this total section if there are products in cart. */}
                        {/* {cart.length > 0 && <div className="total">
                            <div className="total__item total__sub-total">
                                <span>Subtotal</span>
                                <span>${(total() * 0.9).toFixed(2)}</span>
                            </div>
                            <div className="total__item total__sub-tax">
                                <span>Tax</span>
                                <span>${(total() * 0.1).toFixed(2)}</span>
                            </div>
                            <div className="total__item total__sub-price">
                                <span>Total</span>
                                <span>${total()}</span>
                            </div>
                            <button className="btn btn__checkout no-cursor" onClick={() => alert(`Have not got around to doing this.`)}>
                                Proceed to checkout
                            </button>
                        </div>} */}
                    </div>
                </div>
            </main>
        </div>
    );
}
export default Watchlist;