import "./home.scss";
import { Link } from "react-router-dom";
import CustomHookFetchData from "../hooksDemo/CustomHookFetchData";

const Home = () => {
  const [data] = CustomHookFetchData(
    "https://hub.dummyapis.com/employee?noofRecords=2&idStarts=1001",
    2
  );

  return (
    <div className="demo">
      {/* <h2>Demo Employee List [Showing {state}]</h2> */}
      <div className="data" style={{ color: "yellow" }}>
        <h4>First Name</h4>
        <h4>Last Name</h4>
        <h4>Email</h4>
      </div>
      {data.map((element, index) => {
        return (
          <Link to={`/${element.id}`}>
            <div key={index} className="data">
              <h4>{element.firstName}</h4>
              <h4>{element.lastName}</h4>
              <h4>{element.email}</h4>
            </div>
          </Link>
        );
      })}
      {/* <button onClick={() => setState(state + 2)} className="btn-fetch">
        Fetch 2 more entries
      </button> */}
    </div>
  );
};

export default Home;
