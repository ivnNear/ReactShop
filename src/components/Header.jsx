function Header({x}) {
    return (
        <header>
            <div className="header-left">
                <a href=""> <img height={125} src="./logo.png" alt="" /></a>
                <div className="header-title">
                    <h1>React Good Shop</h1>
                    <h4>Bad quality of bad shoes</h4>
                    <h2>zcszvv</h2>
                </div>
            </div>
            <div className="header-right">
                <ul onClick={() => x(true) }>
                    <li><img height={30} src="./cart.png" alt="" /></li>
                    <li>999 $</li>
                </ul>
                <img height={30} src="./user.png" alt="" />
            </div>
        </header>
    )
}




export default Header