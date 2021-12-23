import Link from "next/link";

const index = () => {
  return (
    <>
      <header className="header">
        <div className="brand_box">
        <nav>
      <ul className="menu-bar">
        <li>
          <Link href ="/">
            <a> Home</a>
          </Link>
        </li>
        <li>
          <Link href ="/about">
            <a> About</a>
          </Link>
        </li>
        <li>
          <Link href ="/contact">
            <a> Contact</a>
          </Link>
        </li>
        <li>
          <Link href ="/blog">
            <a> Blog</a>
          </Link>
        </li>
        <li>
          <Link href ="/product">
            <a> Product</a>
          </Link>
        </li>
      </ul>
    </nav>
        </div>
        <div className="text_box">
          <h1 className="heading_primary">
            <span className="heading_primary_main">
              Welcome to the world of ReactJs
            </span>
            <span>Love with JavaScript</span>
          </h1>
          <a href="#" className="btn btn_white btn_animated">
            MAckrizz.com
          </a>
        </div>
      </header>
    </>
  )
}

export default index;
