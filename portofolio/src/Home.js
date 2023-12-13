import coding  from "./image/coding.png";
function Home() {
  return (
    <div className="home text-white">
      <div className="container d-flex justify-content-center align-items-center h-100">
        <div className="text-center">
          <img src={coding} alt="image1" width={200} className="rounded-circle my-3" />
          <h4 className="text-center">
            Front end Developer 
          </h4>
          <h4 className="text-center">
          Programming instructor for kids
          </h4>
        </div>
      </div>
    </div>
  );
}
export default Home;
