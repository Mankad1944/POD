import Card from "../Card"
const products = [{id:1, url:'', description:'Trending'},{id:2, url:'', description:'Trending'}]

const Minimalist = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
      {products.map((item) => (<Card key={item.id} data={item} />))}
    </div>
  )
}

export default Minimalist
