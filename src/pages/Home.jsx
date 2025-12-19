import ProductList from "./ProductList";

const Home = ({ products, addToCart }) => {
  return (
    <>
      <section id="home">
        <h1>Welcome To Ed's Sales Site</h1>
        <p>
          Here we give you the best experience. Just sit back and enjoy shopping
        </p>
        <button className="intro__button" onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}>Let's Start</button>
      </section>
      <section id="services">
        <ProductList products={products} addToCart={addToCart} />
      </section>
    </>
  );
};

export default Home;
