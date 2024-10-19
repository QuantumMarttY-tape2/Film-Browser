import React from 'react';
import Movies from './ui/Movies';

const Featured = () => {
    return (
        <section id="featured">
            <div className="container">
                <div className="row">
                    <h2 className="section__title">
                        Featured in <span className="blue">Wonderland</span> (ft. Batman)
                    </h2>
                    <div className="movies">
                        <Movies nameKey={"batman"}/>
                        {/* {books
                            .filter(book => book.rating === 5)
                            .slice(0,4)
                            .map((book) =>
                                (<Movies book={book} key={book.id} />
                        ))} */}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Featured;