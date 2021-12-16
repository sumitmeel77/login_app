import React, { Component } from 'react'

export default class Cards extends Component {

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

    AddCookie = () => {

        window.alert("Item added to Cart")
        var json_str = this.getCookie(this.getCookie("email"));
        var arr = JSON.parse(json_str)
        arr.push(this.props.id)
        var newArr = JSON.stringify(arr);
        document.cookie = `${this.getCookie("email")} = ${newArr}`
    }
    arrayRemove = (arr, value) => {
        let index = arr.indexOf(value);
        if (index > -1) {
            arr.splice(index, 1);
        }
        return (arr)
    }
    RemoveCookie = () => {
        var json_str_remove = this.getCookie(this.getCookie("email"));
        var arr = JSON.parse(json_str_remove)
        this.arrayRemove(arr, this.props.id)
        // delete arr[this.props.id]
        console.log(arr)
        var newArr = JSON.stringify(arr);
        document.cookie = `${this.getCookie("email")} = ${newArr}`
        window.alert("Item removed from Cart")
    }
    CookieFunction = () => {
        if (this.props.type === "Add to Cart") { this.AddCookie() }
        else { this.RemoveCookie() }
    }

    render() {
        return (
            <div class="card mb-3 my-3" style={{ maxWidth: "300px" }}>
                <div class="row ">
                    <div class="col-md-4">
                        <img src={this.props.imageUrl} class="card-img" alt="..." />
                    </div>
                    <div class="col-md-8 align-self-center">
                        <div class="card-body">
                            <h5 class="card-title">{this.props.name}</h5>
                            <h5 class="card-title">${this.props.price}</h5>
                            <button type="button" class="btn btn-primary" onClick={this.CookieFunction}>{this.props.type}</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

