import React from "react";
import "./errorPage.css";

const NotFound = () => {
  return (
    <div className=" container not-found-page">
      <div className="row">
        <div className="col-12">
          <svg
            className="not-found-svg"
            viewBox="0 0 837 1045"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <path
                d="M353,9 L626.664028,170 L626.664028,487 L353,642 L79.3359724,487 L79.3359724,170 L353,9 Z"
                stroke="#007FB2"
                strokeWidth="6"
              />
              <path
                d="M78.5,529 L147,569.186414 L147,648.311216 L78.5,687 L10,648.311216 L10,569.186414 L78.5,529 Z"
                stroke="#EF4A5B"
                strokeWidth="6"
              />
              <path
                d="M773,186 L827,217.538705 L827,279.636651 L773,310 L719,279.636651 L719,217.538705 L773,186 Z"
                stroke="#795D9C"
                strokeWidth="6"
              />
              <path
                d="M639,529 L773,607.846761 L773,763.091627 L639,839 L505,763.091627 L505,607.846761 L639,529 Z"
                stroke="#F2773F"
                strokeWidth="6"
              />
              <path
                d="M281,801 L383,861.025276 L383,979.21169 L281,1037 L179,979.21169 L179,861.025276 L281,801 Z"
                stroke="#36B455"
                strokeWidth="6"
              />
            </g>
          </svg>
        </div>

        <div className=" col-12 message-box">
          <h1>404</h1>
          <p>Page not found</p>
          <div className="buttons-con">
            <div className="action-link-wrap">
              <button
                onClick={() => window.history.back()}
                className="link-button link-back-button"
              >
                Go Back
              </button>
              <a href="/" className="link-button">
                Go to Home Page
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
