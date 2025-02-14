import React, { useState } from "react";
import "./TicketSelection.css";
import ProgressbarIcon from "./assets/progressbar.svg";
import ProgressLineIcon from "./assets/progressline.svg";
import { Link } from "react-router-dom";
import HeadingIcon from "./assets/heading.svg";

function TicketSelection() {
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [ticketCount, setTicketCount] = useState(1);

  return (
    <div className="ticket-container" style={{ marginTop: "60px" }}>
      <div className="ticket-header">
        <h1>Ticket Selection</h1>
        <span>Step 1/3</span>
      </div>
      <img
        src={ProgressbarIcon}
        alt="Ticket Icon"
        className="progress-svg-icon"
      />

      <div
        className=""
        style={{
          border: "1px solid #152c39",
          borderRadius: "10px",
          padding: "18px",
        }}
      >
        <div className="event-info">
          {/* <h2>Techember Fest '25</h2> */}
          <img
            src={HeadingIcon}
            alt="Ticket Icon"
            className="progress-svg-icon"
            style={{ fontSize: "10px" }}
          />
          <p>Join us for an unforgettable experience! Secure your spot now.</p>
          <p>
            <span role="img" aria-label="location">
              📍
            </span>{" "}
            [Event Location] || March 15, 2025 | 7:00 PM
          </p>
        </div>
        <div>
          <img
            src={ProgressLineIcon}
            alt="Ticket Icon"
            className="progress-svg-icon"
            style={{ color: "#07373F" }}
          />

          <h3 className="select-ticket">Select Ticket Type:</h3>
          <div className="ticket-options">
            {[
              { type: "REGULAR ACCESS", price: "Free", availability: "20/52" },
              { type: "VIP ACCESS", price: "$50", availability: "20/52" },
              { type: "VVIP ACCESS", price: "$150", availability: "20/52" },
            ].map((ticket) => (
              <button
                key={ticket.type}
                onClick={() => setSelectedTicket(ticket.type)}
                className={`ticket-button ${
                  selectedTicket === ticket.type ? "selected" : ""
                }`}
              >
                <div className="ticket-info">
                  <span className="ticket-price">{ticket.price}</span>
                  <span className="ticket-type">{ticket.type}</span>
                  <span className="ticket-availability">
                    {ticket.availability}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
        <div className="ticket-quantity">
          <h3 className="number-ticket">Number of Tickets</h3>
          <select
            value={ticketCount}
            onChange={(e) => setTicketCount(e.target.value)}
          >
            {[1, 2, 3, 4, 5].map((count) => (
              <option key={count} value={count}>
                {count}
              </option>
            ))}
          </select>
        </div>
        <div className="action-buttons">
          <button className="cancel-button">Cancel</button>
          <button className="next-button">
            <Link to="/attendee">Next</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default TicketSelection;
