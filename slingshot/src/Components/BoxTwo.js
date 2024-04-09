import React from "react";
import chatgptlogo from "./../Images/chatgptlogo.png";
import googleLogo from "./../Images/googleLogo.png";
import ClaudeAI from "./../Images/ClaudeAI.png";
import capitalOne from "./../Images/capitalOne.png";

function BoxTwo() {
  return (
    <>
      <div className="container px-4 py-5" id="custom-cards">
        <h2 className="pb-2 border-bottom">
          <b>SEE WHAT SLINGSHOT CAN DO</b>{" "}
          <img
            style={{
              height: "24px",
              marginLeft: "10px",
              marginBottom: "5px",
              marginTop: "5px",
            }}
            src={chatgptlogo}
            alt="chatgpt-logo"
          />
          <img
            style={{
              height: "24px",
              marginLeft: "10px",
              marginBottom: "5px",
              marginTop: "5px",
            }}
            src={googleLogo}
            alt="chatgpt-logo"
          />
          <img
            style={{
              height: "24px",
              marginLeft: "10px",
              marginBottom: "5px",
              marginTop: "5px",
            }}
            src={ClaudeAI}
            alt="chatgpt-logo"
          />
        </h2>
        <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
          <div className="col">
            <div
              className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg "
              style={{
                backgroundImage:
                  'url("https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
                backgroundSize: "cover",
              }}
            >
              <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                  Query Quality Control
                </h3>
                <p>
                  AI algorithms keep tabs on query performance, catching
                  inefficient ones in real-time. Instant alerts notify users or
                  admins for swift correction.
                </p>
                <ul className="d-flex list-unstyled mt-auto">
                  <li className="me-auto">
                    <img
                      src={capitalOne}
                      alt="Bootstrap"
                      width={200}
                      height={100}
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col">
            <div
              className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
              style={{
                backgroundImage:
                  'url("https://images.unsplash.com/photo-1671459922221-be8beec5c9fa?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
                backgroundSize: "cover",
              }}
            >
              <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                  Cloud Infrastructure Optimization
                </h3>
                <p>
                  AI tools analyze usage patterns to scale cloud resources
                  optimally, slashing costs by avoiding overprovisioning.
                </p>
                <ul className="d-flex list-unstyled mt-auto">
                  <li className="me-auto">
                    <img
                      src={capitalOne}
                      alt="Bootstrap"
                      width={200}
                      height={100}
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col">
            <div
              className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
              style={{
                backgroundImage:
                  'url("https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
                backgroundSize: "cover",
              }}
            >
              <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                  Conversational Querying
                </h3>
                <p>
                  AI-driven Natural language processing lets users interact with
                  Slingshot naturally, simplifying querying and reporting for a
                  seamless user experience.
                </p>
                <ul className="d-flex list-unstyled mt-auto">
                  <li className="me-auto">
                    <img
                      src={capitalOne}
                      alt="Bootstrap"
                      width={200}
                      height={100}
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col">
            <div
              className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
              style={{
                backgroundImage:
                  'url("https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
                backgroundSize: "cover",
              }}
            >
              <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                  Tailored Warehouse Configurations
                </h3>
                <p>
                  AI-driven recommendation engines suggest ideal data warehouse
                  setups tailored to specific needs, enhancing performance.
                </p>
                <ul className="d-flex list-unstyled mt-auto">
                  <li className="me-auto">
                    <img
                      src={capitalOne}
                      alt="Bootstrap"
                      width={200}
                      height={100}
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col">
            <div
              className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
              style={{
                backgroundImage:
                  'url("https://plus.unsplash.com/premium_photo-1677448831822-4251f31b9fd5?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
                backgroundSize: "cover",
              }}
            >
              <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                  Streamlined Approval Processes
                </h3>
                <p>
                  AI-powered workflow automation smoothens warehouse
                  provisioning approvals by routing requests and ensuring policy
                  compliance.
                </p>
                <ul className="d-flex list-unstyled mt-auto">
                  <li className="me-auto">
                    <img
                      src={capitalOne}
                      alt="Bootstrap"
                      width={200}
                      height={100}
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col">
            <div
              className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
              style={{
                backgroundImage:
                  'url("https://media.istockphoto.com/id/179241719/photo/capital-management-profit-and-investment.jpg?s=1024x1024&w=is&k=20&c=DAflrKDjg3_FkHdPfO_HeX29Wd2P48q9Ros7at3elk4=")',
                backgroundSize: "cover",
              }}
            >
              <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                  Performance Boosting Insights
                </h3>
                <p>
                  AI algorithms dive into query execution plans, spotting
                  performance optimization chances and automatically
                  implementing fixes.
                </p>
                <ul className="d-flex list-unstyled mt-auto">
                  <li className="me-auto">
                    <img
                      src={capitalOne}
                      alt="Bootstrap"
                      width={200}
                      height={100}
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <a
            className="download"
            href="https://ecm.capitalone.com/WCM/software/capital-one-slingshot-product-one-pager-2023.pdf"
          >
            Download one-pager &rarr;
          </a>
        </div>
      </div>
    </>
  );
}

export default BoxTwo;
