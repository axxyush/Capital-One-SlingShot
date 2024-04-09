import React from "react";

function BoxThree() {
  return (
    <>
      <div style={{ backgroundColor: "#F5F5F5" }}>
        <div className="container px-4 py-5" id="featured-3">
          <h2 className="pb-2 border-bottom">Key Features</h2>
          <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
            <div className="feature col">
              <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3"></div>
              <img
                style={{ height: "48px" }}
                _ngcontent-web-shell-c1031453233=""
                sharedlazyload=""
                src="https://ecm.capitalone.com/WCM/software/icons/slingshot-feature-icons/icon-primary-investing-charcoal-126.svg"
                alt="pie chart icon"
                loading="lazy"
              />

              <h3 className="fs-2 text-body-emphasis">Data visibility</h3>
              <p>
                Closely monitor cost, performance and Snowflake usage with
                dashboards and insights.
              </p>
            </div>
            <div className="feature col">
              <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3"></div>
              <img
                style={{ height: "48px" }}
                _ngcontent-web-shell-c1031453233=""
                sharedlazyload=""
                src="https://ecm.capitalone.com/WCM/software/icons/slingshot-feature-icons/icon-primary-alert-notification-charcoal-126.svg"
                alt="notifications icon"
                loading="lazy"
              />
              <h3 className="fs-2 text-body-emphasis">Proactive alerts</h3>
              <p>
                Stay up-to-date on credit usage or cost spike anomalies within
                your Snowflake data.
              </p>
            </div>
            <div className="feature col">
              <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3"></div>
              <img
                style={{ height: "48px" }}
                _ngcontent-web-shell-c1031453233=""
                sharedlazyload=""
                src="https://ecm.capitalone.com/WCM/software/icons/slingshot-feature-icons/icon-primary-settings-charcoal-126.svg"
                alt="gears icon"
                loading="lazy"
              />

              <h3 className="fs-2 text-body-emphasis">Custom tagging</h3>
              <p>
                Break down warehouse costs by custom categories you define for
                deeper insights.
              </p>
            </div>
            <div className="feature col">
              <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3"></div>
              <img
                style={{ height: "48px" }}
                _ngcontent-web-shell-c1031453233=""
                sharedlazyload=""
                src="https://ecm.capitalone.com/WCM/software/icons/slingshot-feature-icons/icon-primary-simulator-charcoal-126.svg"
                alt="sliders icon"
                loading="lazy"
              />

              <h3 className="fs-2 text-body-emphasis">Warehouse scheduling</h3>
              <p>
                Set dynamic schedules using templates to automatically provision
                warehouses.
              </p>
            </div>
            <div className="feature col">
              <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3"></div>
              <img
                style={{ height: "48px" }}
                _ngcontent-web-shell-c1031453233=""
                sharedlazyload=""
                src="https://ecm.capitalone.com/WCM/software/icons/slingshot-feature-icons/icon-primary-idea-charcoal-126.svg"
                alt="lightbulb icon"
                loading="lazy"
              />

              <h3 className="fs-2 text-body-emphasis">Recommendations</h3>
              <p>
                Right-size warehouses with recommendations to meet your cost and
                performance needs.
              </p>
            </div>
            <div className="feature col">
              <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3"></div>
              <img
                style={{ height: "48px" }}
                _ngcontent-web-shell-c1031453233=""
                sharedlazyload=""
                src="https://ecm.capitalone.com/WCM/software/icons/slingshot-feature-icons/icon-primary-search-charcoal-126.svg"
                alt="magnifying glass icon"
                loading="lazy"
              />

              <h3 className="fs-2 text-body-emphasis">Query advisor</h3>
              <p>
                Identify inefficiencies and apply suggestions to optimize query
                text.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BoxThree;
