import GifLoader from 'react-gif-loader';
import styles from './styles.scss';
import Header from './components/Header';
import { Modal } from './components/Modal';
import { useEffect, useState } from 'react';
import { Card } from './components/Card';
import axios from 'axios';


// imageSrc="https://media.giphy.com/media/l378zKVk7Eh3yHoJi/source.gif"
// const arr = [
//   { title: 'New Balance version 0.5', price: 299, img: './imgItems/1.jpg' },
//   { title: 'New Balance GOAT Y', price: 499, img: './imgItems/2.jpg' },
//   { title: 'Adidas Ozweego EE6462', price: 149, img: './imgItems/3.jpg' },
//   {
//     title: 'Adidas Eastrail 2 GZ3016 Focus Olive',
//     price: 220,
//     img: './imgItems/4.jpg',
//   },
// ];

function App() {
  const [modal, setModal] = useState(false);
  const [inp, setInp] = useState('');
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [load, setLoad] = useState(true);
  const [error, setError] = useState(false);
 


  useEffect(() => {
    axios.get('https://6410743545a5f98532470365.mockapi.io/items').then((res) => setItems(res.data))
    axios.get('https://6410743545a5f98532470365.mockapi.io/cart').then((res) => setCartItems(res.data))
    .finally(() => setLoad(false))

    


   
    

  },[])


  const addToCart = (p) => {
    axios.post('https://6410743545a5f98532470365.mockapi.io/cart', p)
    setCartItems(prev => [...prev, p])
  }

  const removeFromCart = (id) => {
    axios.delete(`https://6410743545a5f98532470365.mockapi.io/cart/${id}`)
    setCartItems((prev) => prev.filter(item => item.id !== id))
    
  }



  return (
    <div className='wrapper'>
      
      
      {load ? <GifLoader
                loading={true}
                imageSrc="./load.gif"
                // imageStyle={imageStyle}
                overlayBackground="rgba(0,0,0,0.0)"
            />  : <div className='container'>
        {modal && <Modal x={setModal} items={cartItems} removeFromCart={removeFromCart}/>}
        <Header x={setModal} />

        <main>
          <div className='search'>
            {inp ? <h2>Search for: {inp} </h2> : <h2>All products</h2>}
            <input
              type='text'
              placeholder='Search ...'
              // value={inp}
              onChange={(e) => setInp(e.target.value)}
            />
          </div>

          <div className='cards'>
            {items.filter((word) => word.title.toLowerCase().includes(inp)).map((el, index) => {
              return (
                <Card
                  product={el}
                  key={index}
                  addToCart={addToCart}
                  
                />
              );
            })}
          </div>
        </main>
      </div> }
      
    </div>
  );
}

export default App;
