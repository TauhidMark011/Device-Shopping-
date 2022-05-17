import React, { Component } from "react";
import Product from "./Product";
import Title from "./Title";
import { storeProducts } from "../data";
import styled from "styled-components";
import { ProductConsumer } from "../context";
export default class ProductList extends Component {
  state = {
    products: storeProducts
  };
  constructor(props) {
    super(props) 
    this.state = {
         articleList:[] ,
         isOffline:false
    }
} 
async componentDidMount(){  
      var url = '';
      axios.get(url)
      .then(response=>{
          this.setState({
             articleList:response.data  
          }) 
          localStorage.setItem('articles',JSON.stringify(response.data ))
          
          
      })
      .catch(error=>{
          let apiData = localStorage.getItem('P')
          console.log(apiData,'============')
          this.setState({
            articleList: JSON.parse(apiData),
            isOffline:true  
         })  
      })   
 } 
  render() {
    return (
      <React.Fragment>
        <ProductWrapper className="py-5">
          <div className="container">
            <Title name="our" title="products" />
            <div className="row">
              <ProductConsumer>
                {value => {
                  return value.products.map(product => {
                    return <Product key={product.id} product={product} />;
                  });
                }}
              </ProductConsumer>
            </div>
          </div>
        </ProductWrapper>
      </React.Fragment>
    );
  }
}

const ProductWrapper = styled.section``;
