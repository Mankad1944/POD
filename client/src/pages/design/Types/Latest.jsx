// import { useState, useEffect } from "react";
import Card from "../Card";

const Latest = () => {
  // const [products, setProducts] = useState([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   // Replace with your actual API URL
  //   fetch('https://jsonplaceholder.typicode.com/posts?_limit=8')
  //     .then(res => res.json())
  //     .then(data => {
  //       setProducts(data);
  //       setLoading(false);
  //     })
  //     .catch(err => console.error(err));
  // }, []);

  // if (loading) return <div className="text-white">Loading Latest Designs...</div>;

  let description = 'Latest'
  const products = [
    {id:1, url:'https://i.pinimg.com/236x/7d/90/c1/7d90c17c01b14c1a9cae31aad749c9c8.jpg', description},{id:2, url:'https://files.cdn.printful.com/o/upload/bfl-image/c2/w258/10340_l_coffee%20served%20here-min_11zon__600.jpg', description},
    {id:3, url:'https://img.magnific.com/free-psd/men-t-shirt-mockup-front-view_1332-60600.jpg?semt=ais_hybrid&w=740&q=80', description}, {id:4, url:'https://imeagescreations.com/wp-content/uploads/2023/04/men-t-shirt-banner.png', description},
    {id:5, url:'https://i.pinimg.com/736x/2d/aa/e0/2daae037e8100de649e2256160ce87c3.jpg', description}, {id:6, url:'https://i.pinimg.com/236x/af/b5/a2/afb5a2a116463f0df214f907dd25a507.jpg', description},
    {id:7, url:'https://i.pinimg.com/236x/a1/7e/23/a17e23192907c8bfed8d6cb6923107e0.jpg', description},{id:8, url:'https://i.pinimg.com/236x/b8/fc/c4/b8fcc44876291b40b8e2759ea010bb7b.jpg', description},
    {id:9, url:'https://files.cdn.printful.com/o/upload/bfl-image/f5/10333_l_collage%20vintage%20design%20.jpg', description},{id:10, url:'https://5.imimg.com/data5/WM/LN/KA/ANDROID-72875165/product-jpeg-500x500.jpg', description}
  ]

  return (
    /* The Grid layout must be here to wrap the mapped cards */
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
      {products.map((item) => (
        <Card key={item.id} data={item} />
      ))}
    </div>
  )
}

export default Latest