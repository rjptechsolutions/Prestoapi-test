import "./App.css";
import Axios from "axios";
import React, { useState, useEffect } from "react";

function App() {
  const [events, setEvents] = useState([]);
  const PrestoAPI_URL = "URL";

  const fetchEvents = async () => {
    try {
      const { data } = await Axios.get(PrestoAPI_URL);

      setEvents(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchEvents();
  }, []);

  if (!events) {
    return (
      <>
        <div className="alert alert-danger text-center">
          <div className="display-4">Opp's No Data Dear</div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="alert alert-info text-center">
          <div className="display-3">Dev Fests</div>
        </div>
        <div className="container">
          <div className="row">
            {events.map((evt, i) => (
              <div className="col-lg-4 col-sm-12" key={i}>
                <div className="card mb-4">
                  <img src={evt.imgURL} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{evt.title}</h5>
                    <p className="card-text">{evt.description}</p>
                  </div>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">Price: ${evt.price}</li>
                  </ul>
                  <div className="card-body">
                    <a className="card-link btn btn-primary btn-block">
                      Checkout
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
}
export default App;
