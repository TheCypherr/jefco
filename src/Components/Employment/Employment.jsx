import React, { useState } from "react";
import "./Employment.css";
import { FaTimes, FaMinus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useScroll } from "../../utils/ScrollContext";

const Employment = () => {
  const { scrollToSection } = useScroll();
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);
  const [loading, setLoading] = useState(false);

  const handlePdfScroll = (sectionKey) => {
    scrollToSection(sectionKey);
  };
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
      button: "Full Job Description and Requirement",
    },
    {
      head: "Experienced Line Operators - All shifts",
      details: "1st, 2nd, 3rd Shifts Available",
      button: "Full Job Description and Requirement",
    },
    {
      head: "Experienced Metal Finishers / Racker",
      details: "Contact us for more details",
      button: "Contact Us",
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
                <button
                  className="description"
                  onClick={() => {
                    handlePageLoading(item.link);
                    handlePdfScroll("pdfScroll");
                  }}
                >
                  {item.button}
                </button>
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
