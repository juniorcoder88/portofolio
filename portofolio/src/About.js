import html from "./image/html.png";
import css from "./image/css.png";
import js from "./image/js.jpg";
import react from "./image/react.png";
import bootstrap from "./image/bootstrap.png";
import scratch from "./image/scratch.jpg";

function About() {
  return (
    <div className="about d-flex justify-content-center align-items-center ">
      <div>
        <h2 className="text-center my-3 text-white">About Us</h2>
        <h5 className="text-center my-3 text-light">
          If you want to know anything about these topics, contact us.
        </h5>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12 my-2">
              <img src={html} alt="" className="img-fluid rounded-2" />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 my-2">
              <img src={css} alt="" className="img-fluid rounded-2" />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 my-2">
              <img src={js} alt="" className="img-fluid rounded-2" />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 my-2">
              <img src={bootstrap} alt="" className="img-fluid rounded-2" />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 my-2">
              <img src={react} alt="" className="img-fluid rounded-2" />
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12 my-2">
              <img src={scratch} alt="" className="img-fluid rounded-2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
