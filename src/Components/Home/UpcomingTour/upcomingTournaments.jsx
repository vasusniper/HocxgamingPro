import React from "react";
function UpcomingTournaments() {
  const tournaments = [
    { name: "BGIS Qualifiers", date: "May 10, 2025", format: "BGIS Format" },
    { name: "BMPS Scrims", date: "May 18, 2025", format: "BMPS Format" },
    { name: "Weekend Rush", date: "May 25, 2025", format: "Custom Room" },
  ];
  return (
    <>
      <div id="tournaments" className="container py-5 text-center">
        <div className="row">
          <h2 className="mb-4">
            <i className="bi bi-trophy me-2"></i>Upcoming Tournaments
          </h2>
          <div className="row">
            {tournaments.map((tourney, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <div className="card h-100 shadow">
                  <div className="card-body">
                    <h5 className="card-title">{tourney.name}</h5>
                    <p className="card-text">Date: {tourney.date}</p>
                    <p className="card-text">Format: {tourney.format}</p>
                    <a href="#" className="btn btn-primary">
                      Register
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default UpcomingTournaments;
