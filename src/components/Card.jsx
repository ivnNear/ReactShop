import { useState } from "react"

export function Card({product, addToCart}){

    
    
    const [heart, setHeart] = useState(false)
    const [plus, setPlus] = useState(false)

    const styleHeart = heart ? './heart-red.png' : './heart.png'
    const stylePlus = plus ? './check.png' : './plus.png'

    const onClickPlus =() => {
        addToCart(product)
        setPlus(!plus)
    }

    return(
        <div className="item">
                    <img onClick={() => setHeart(!heart)} height={20} src={styleHeart} alt="" />
                    <img height={200} src={product.img} alt="" />
                    <div>
                        <p>{product.title}</p>
                        <h5> {product.price} $ <img onClick={onClickPlus} height={25} src={stylePlus} alt="" /></h5>
                    </div>
                </div>
    )
}