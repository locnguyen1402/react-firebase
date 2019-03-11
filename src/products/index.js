import React from 'react';
import ReactDOM from 'react-dom';
import firebase from '../firebase'
import './index.css';

class Products extends React.Component {
    constructor(props) {
        super(props)
        this.ref = firebase.database().ref('products');
        this.state = {
            products : []
        }
    }
    handleClick() {
        this.ref.once('value').then((s)=>{
            this.setState({
                products: s.val()
            })
        });
    }
    render() {

        const trProduct = this.state.products.map(item => <tr>
            <td><img src={item.img} alt={item.name}/></td>
            <td>{item.name}</td>
            <td>{item.price}</td>
        </tr>)
        return (
            <div>
                <div>
                    <h1>products work</h1>
                    <button onClick={()=>this.handleClick()}>Test</button>
                </div>
                <div>
                    <table>

                        <tbody>
                        <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                        </tr>
                            {trProduct}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export  default Products;