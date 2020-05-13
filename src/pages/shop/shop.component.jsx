import React from 'react';

import SHOP_DATA from './shop.data.js';
import CollectionPeview from '../../components/preview-collection/collection-preview.component';

class ShopPage extends React.Component {
    constructor(props){
        super(props);
        this.state= {
            
         Collections: SHOP_DATA
   
        
    };
}
render(){
    const {  Collections } = this.state;
    return ( <div className= 'shop-page'>
        {
            Collections.map(({ id , ...otherCollectionProps})  => (
                < CollectionPeview key= {id} {...otherCollectionProps} /> ))
            
        }
          </div> );
}

}
export default ShopPage;
