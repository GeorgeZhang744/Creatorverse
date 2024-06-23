import { Outlet, useNavigate } from "react-router-dom";


const Header = () => {
  const navigate = useNavigate();

  const goToShowCreatorsPage = () => {
    navigate("/");
    window.scrollTo(0, window.innerHeight);
  }

  const goToAddCreatorPage =  () => {
    navigate("/add");
    window.scrollTo(0, window.innerHeight);
  }

  return (
    <>
      <div
        className="hero"
        style={{
          backgroundImage: "url(https://istindia.com/wp-content/themes/isttheme/assets/images/banner3.jpg)",
          height: "100vh",
        }}
      >
        <div className="hero-content text-center text-neutral-content">
          <div>
            <h1 className="mb-20 text-8xl font-bold">CREATORVERSE</h1>
            <div className="flex justify-center space-x-20">
              <button className="btn btn-info btn-lg w-64 text-white text-lg" onClick={goToShowCreatorsPage}>
                VIEW ALL CREATORS
              </button>
              <button className="btn btn-info btn-lg w-64 text-white text-lg" onClick={goToAddCreatorPage}>
                ADD A CREATOR
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black">
        <Outlet />
      </div>
    </>
  );
};

export default Header;
