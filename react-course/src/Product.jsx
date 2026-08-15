function Product({name,price,category}){
    
    return(
        <div>
            <span>-----------------------</span>
            <p>Product Name: {name}</p>
            <p>Product Price: {price}</p>
            <p>Category: {category}</p>
        </div>
    );
}
export default Product;