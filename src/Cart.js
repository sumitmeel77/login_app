import React, { Component } from 'react'
import Cards from './Cards';
import Navbar from './Navbar';

export default class Cart extends Component {
    array = [{ "_id": "61ba3cf00b373f0c88b6d38a", "imgUrl": "https://guesseu.scene7.com/is/image/GuessEU/M63H24W7JF0-L302-ALTGHOST?wid=1500", "name": "CHECK PRINT SHIRT", "price": "110.0" }]
    constructor() {
        super();
        this.state = {
            Products: []
        }
    }
    getCookie = (cname) => {
        let name = cname + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) === 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    getCookieData = (value) => {
        var json_str = this.getCookie(this.getCookie("email"));
        var CookieArr = JSON.parse(json_str)
        if (CookieArr.indexOf(value) !== -1) {
            return ("true")
        } else {
            return ("false")
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

                    <div className="container">
                        <div className="row row-cols-1 row-cols-md-3 g-4">
                            {this.state.Products.map((element) => {
                                if (this.getCookieData(element._id) === "true")
                                    return <div className="col d-flex align-self-center overflow-auto" key={element._id}>
                                        <Cards imageUrl={element.imgUrl} name={element.name} price={element.price} type="Remove from Cart" id={element._id} />
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