import React, { useState } from "react";
import "./Employment.css";
import { FaTimes, FaMinus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Employment = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Toggle active index content
  const toggleContent = (index) => {
    if (activeIndex === index) {
      setActiveIndex(-1); // close opened section on click
    } else {
      setActiveIndex(index); // open new section
    }
  };

  const handlePageLoading = (targetPage) => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      navigate(targetPage);
    }, 1500);
  };

  const toggleItem = [
    {
      head: "Office Manager",
      details:
        "Summary: The Office Manager is responsible for the organization and coordination of office operations, procedures and resources to facilitate organizational effectiveness and efficiency. Support all accounts payable and receivable functions. Watch over and sets up all customer accounts. Submit payment for all invoices due. Help resolve any issues with customers and vendors.",
      text: "Full Job Description and Requirement",
      doc: "/19-Office-Manager.pdf",
      download: true,
    },
    {
      head: "Experienced Line Operators - All shifts",
      details: "1st, 2nd, 3rd Shifts Available",
      text: "Full Job Description and Requirement",
      doc: "/6-Line Operator (eff 12_2016).pdf",
      download: true,
    },
    {
      head: "Experienced Metal Finishers / Racker",
      details: "Contact us for more details",
      text: "Contact Us",
      link: "/",
    },
  ];

  return (
    <section className="employment-wrapper">
      <div className="inner-employment">
        <h1>EMPLOYMENT</h1>
        <h2>Current Opportunities</h2>
        {toggleItem.map((item, index) => (
          <div key={index} className="container-one">
            <button onClick={() => toggleContent(index)} className="head">
              <p>{item.head}</p>
              {activeIndex === index ? <FaTimes /> : <FaMinus />}
            </button>

            {activeIndex === index && (
              <div className="container-two">
                <p>{item.details}</p>
                <a
                  className="description"
                  download={item.download ? item.doc.split("/").pop() : ""}
                  onClick={() => handlePageLoading(item.link)}
                  href={item.doc}
                >
                  {item.text}
                </a>
              </div>
            )}
          </div>
        ))}
      </div>

      {loading && (
        <div className="load-slide">
          <div className="load-bar"></div>
        </div>
      )}
    </section>
  );
};

export default Employment;
