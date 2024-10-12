import React, { useRef } from "react";
import "./PdfDownload.css";
import { useScroll } from "../../utils/ScrollContext";
import { useEffect } from "react";

const PdfDownload = () => {
  const { registerRef } = useScroll();
  const targetRef = useRef(null);

  useEffect(() => {
    registerRef("pdfScroll", targetRef.current);
  }, [registerRef]);

  return (
    <section className="pdf-wrapper" ref={targetRef}>
      <div className="inner-pdf">
        <h3>
          DOWNLOAD PRINTABLE APPLICATION or FILL OUT EDITABLE APPLICATION BELOW
        </h3>
        <div className="two-btn">
          <a href="/JEFCO-APPLICATION-FORM-Editable.pdf" download>
            <button>Adobe Printable Application</button>
          </a>
          <a href="/JEFCO-APPLICATION-FORM-Editable.pdf" download>
            <button>Adobe Editable Application</button>
          </a>
        </div>
        <h3>
          Having trouble downloading the PDF? Click below to download Acrobat
          Reader:
        </h3>
        <div className="two-btn">
          <a href="/JEFCO-APPLICATION-FORM.pdf" download>
            <button>Download Acrobat Reader</button>
          </a>
        </div>
        <h3>
          Once the application is filled out you can either email it, fax it to
          904-792-4181 or feel free to stop by our facilities and drop it off in
          person.
        </h3>
        <h3>Resume Submission E-mail Address: applications@jefco.com</h3>
      </div>
    </section>
  );
};

export default PdfDownload;
