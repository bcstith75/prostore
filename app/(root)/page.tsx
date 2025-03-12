
import ProductList from "@/components/shared/product/product-list";
import { getLatestProducts } from "@/lib/actions/product.actions";



// const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))


// To implement the delay make the Hompage function async
const Homepage = async () => {

  const latestProducts = await  getLatestProducts();

  //await delay(2000);

   // 
  return ( <>
  <ProductList data={latestProducts} title='Newest Arrivals' limit={4} />
  
  </> );
}
 
export default Homepage;