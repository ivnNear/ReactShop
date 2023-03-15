export function Modal({ x, items=[], removeFromCart}) {

    

  return (
    <div className='overlay'>
      <div className='drawer'>
        <div className='drawer-top'>
          <h4>
            Your orders:{' '}
            <img
              onClick={() => x(false)}
              height={30}
              src='./close.png'
              alt=''
            />
          </h4>
          <div className='cart-wrapper'>
            
                {items.map((el) => {
                    
                    return (
                        
                        <div className="cart-item">
                            <img height={100} src={el.img} alt="" />
                    <div className="cart-text">
                        <p>{el.title}</p>
                        <h4>{el.price} $</h4>
                    </div>
                    <img onClick={() => removeFromCart(el.id)} height={25} src="./delete.png" alt="" />
                        </div >
                    )
                })}
                
            
          </div>
        </div>
        <div className="drawer-bottom">
            <h5>Price: <span>999 $</span></h5>
            <button>Order now</button>
        </div>
        
      </div>
    </div>
  );
}
