
import Nevbar from "../pages/component/Nevbar";

const index = () => {
  return (
    <>
      <header className="header">
        <div className="brand_box">
          <Nevbar />
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
  );
};

export default index;
