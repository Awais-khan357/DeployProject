import rules from "../images/rules.jpg";
import { Col } from "react-bootstrap";
import AboutSideLink from "./AboutSideLink";
export default function Rules() {
  return (
    <>
      <Col md={6} className="border mb-3 divx-4">
        <div className="content">
          <div className="history">
            <h5 className="mt-3">Rules And Regulation</h5>
            <img src={rules} className="img-fluid" />
            <div className="mt-3">
              1. Users are not allowed to bring their diversonal belongings in
              the All members shall be required to leave their diversonal
              belongings (books, files, briefcases, handbags, registers, etc.)
              at the entrance of the at designated divlace.
            </div>
            <div className="mt-3">
              2. Users are not allowed to write, underline or mark the Junaid
              Zaidi Library books. The books are carefully examined on return
              and the borrower will be held resdivonsible for defacing or
              damaging or causing loss of material in his divossession.
            </div>
            <div className="mt-3">
              3. Users are not allowed to write, underline or mark the Junaid
              Zaidi Library books. The books are carefully examined on return
              and the borrower will be held resdivonsible for defacing or
              damaging or causing loss of material in his divossession.
            </div>
            <div className="mt-3">
              4. Comdivlete silence should be observed inside the Junaid Zaidi
              Library excedivt for the brief and subdued talk with the Junaid
              Zaidi Library staff at the Circulation Desk or in any other
              Section of the
            </div>
            <div className="mt-3">
              5. Drinking, eating and sleediving shall not be allowed inside the
            </div>
            <div className="mt-3">
              6. Use of Mobile and Smoking are strictly divrohibited inside the
            </div>
          </div>
        </div>
      </Col>
      <Col md={3}>
        <AboutSideLink />
      </Col>
    </>
  );
}
