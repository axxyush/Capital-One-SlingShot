import React from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

function About() {
  const pricing = () => {
    alert("Thank you for your interest :)");
  };
  return (
    <>
      <Navbar />

      <div className="container py-3">
        <header>
          <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
            <h1 className="display-4 fw-normal text-body-emphasis">
              About Our Pricing
            </h1>
            <p className="fs-5 text-body-secondary">
              At SlingShot, we believe in transparent and flexible pricing that
              fits the unique needs of our customers. Our goal is to provide
              exceptional value and service at competitive rates. Whether you're
              a small startup or a large enterprise, we have pricing plans
              designed to scale with your business.
            </p>
          </div>
        </header>
        <main>
          <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
            <div className="col">
              <div className="card mb-4 rounded-3 shadow-sm">
                <div className="card-header py-3">
                  <h4 className="my-0 fw-normal">Starter Plan</h4>
                </div>
                <div className="card-body ">
                  <h1 className="card-title pricing-card-title">
                    $5
                    <small className="text-body-secondary fw-light">/mo</small>
                  </h1>
                  <ul className="list-unstyled  mt-3 mb-4">
                    <li>Basic query monitoring and alerting</li>
                    <li>Management of essential cloud infrastructure</li>
                    <li>Cost insights and forecasting</li>
                    <br />
                    <li>
                      <p>
                        <b>Ideal For:</b> Small businesses and startups looking
                        for essential data management and optimization tools.
                      </p>
                    </li>
                  </ul>
                  <button
                    type="button"
                    className="w-100 btn btn-lg btn-outline-primary"
                    onClick={pricing}
                  >
                    Sign up for free
                  </button>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card mb-4 rounded-3 shadow-sm">
                <div className="card-header py-3">
                  <h4 className="my-0 fw-normal">Pro Plan</h4>
                </div>
                <div className="card-body">
                  <h1 className="card-title pricing-card-title">
                    $15
                    <small className="text-body-secondary fw-light">/mo</small>
                  </h1>
                  <ul className="list-unstyled  mt-3 mb-4">
                    <li>Advanced query quality control</li>
                    <li>Recommendations for warehouse configurations</li>
                    <li>Automated approval workflows</li>
                    <br />
                    <li>
                      <p>
                        <b>Ideal For:</b> Medium-sized businesses seeking
                        comprehensive data management solutions.
                      </p>
                    </li>
                  </ul>
                  <button
                    type="button"
                    className="w-100 btn btn-lg btn-outline-primary"
                    onClick={pricing}
                  >
                    Sign up for free
                  </button>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card mb-4 rounded-3 shadow-sm border-primary">
                <div className="card-header py-3 text-bg-primary border-primary">
                  <h4 className="my-0 fw-normal">Enterprise Plan</h4>
                </div>
                <div className="card-body">
                  <h1 className="card-title pricing-card-title">
                    $29
                    <small className="text-body-secondary fw-light">/mo</small>
                  </h1>
                  <ul className="list-unstyled  mt-3 mb-4">
                    <li>Premium and dedicated account management</li>
                    <li>Customized AI solutions tailored to specific needs</li>
                    <li>
                      Unlimited access to all features and functionalities
                    </li>
                    <br />
                    <li>
                      <p>
                        <b>Ideal For:</b> Large enterprises with complex data
                        management requirements and high workloads.
                      </p>
                    </li>
                  </ul>
                  <button
                    type="button"
                    className="w-100 btn btn-lg btn-outline-primary"
                    onClick={pricing}
                  >
                    Sign up for free
                  </button>
                </div>
              </div>
            </div>
          </div>
          <h2 className="display-6 text-center mb-4">Compare plans</h2>
          <div className="table-responsive">
            <table className="table text-center">
              <thead>
                <tr>
                  <th style={{ width: "34%" }} />
                  <th style={{ width: "22%" }}>Starter</th>
                  <th style={{ width: "22%" }}>Pro</th>
                  <th style={{ width: "22%" }}>Enterprise</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className="text-start">
                    Public
                  </th>
                  <td>&#10003;</td>
                  <td>&#10003;</td>
                  <td>&#10003;</td>
                </tr>
                <tr>
                  <th scope="row" className="text-start">
                    Private
                  </th>
                  <td></td>
                  <td>&#10003;</td>
                  <td>&#10003;</td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <th scope="row" className="text-start">
                    Permissions
                  </th>
                  <td></td>
                  <td>&#10003;</td>
                  <td>&#10003;</td>
                </tr>
                <tr>
                  <th scope="row" className="text-start">
                    Sharing
                  </th>
                  <td>&#10003;</td>
                  <td>&#10003;</td>
                  <td>&#10003;</td>
                </tr>
                <tr>
                  <th scope="row" className="text-start">
                    Unlimited members
                  </th>
                  <td></td>
                  <td>&#10003;</td>
                  <td>&#10003;</td>
                </tr>
                <tr>
                  <th scope="row" className="text-start">
                    Extra security
                  </th>
                  <td />
                  <td />
                  <td>&#10003;</td>
                  <td>
                    <svg className="bi" width={24} height={24}>
                      <use xlinkHref="#check" />
                    </svg>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </main>
      </div>

      <Footer />
    </>
  );
}

export default About;
