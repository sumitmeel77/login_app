
import React, { Component } from 'react'
import Navbar from './Navbar';
import Cards from './Cards';

export default class Home extends Component {
    array = [{ "_id": "61ba3cf00b373f0c88b6d38a", "imgUrl": "https://guesseu.scene7.com/is/image/GuessEU/M63H24W7JF0-L302-ALTGHOST?wid=1500", "name": "CHECK PRINT SHIRT", "price": "110.0" }]
    constructor() {
        super();
        this.state = {
            Products: []
        }
    }
    async componentDidMount() {
        let data = await fetch('http://localhost:5000/data')
        let parsedData = await data.json()
        // console.log(parsedData)
        this.setState({ Products: parsedData })
    }

    render() {
        return (
            <div>
                <Navbar />
                <div>

                    <div className="container ">
                        <div className="row row-cols-1 row-cols-md-3 g-4">
                            {this.state.Products.map((element) => {
                                return <div className="col d-flex align-self-center overflow-auto" key={element._id}>
                                    <Cards id={element._id} imageUrl={element.imgUrl} name={element.name} price={element.price} type="Add to Cart" />
                                </div>
                            }
                            )}
                        </div>

                    </div>

                </div>
            </div>
        )
    }
}

