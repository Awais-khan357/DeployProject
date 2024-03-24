import { Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import styles from "./FooterSection.module.css";

export default function FooterSection({ footer }) {
  const firstItem = footer[0];
  const otherItems = footer.slice(1);

  return (
    <Col md={3} sm={12} xs={12} lg={3}>
      <div className={styles["footer-top"]}>
        <div className={styles["footer-ps"]}>
          <h4 className="mx-3">{firstItem}</h4>
          <hr />
          <ul>
            {otherItems.map((link, index) => (
              <li key={index}>
                <FontAwesomeIcon icon={faChevronRight} />{" "}
                <Link to="/newsEvents">{link}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Col>
  );
}
