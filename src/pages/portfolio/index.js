import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";
import { FaGithub, FaDoorOpen } from "react-icons/fa";
export const Portfolio = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Portfolio </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="mb-5 po_items_ho">
          {dataportfolio.map((data, i) => {
            return (
              <Row key={i} className="po_row">
                <Col>
                  <div className="po_item">
                    <img
                      src={`./images/${data.img}.jpg`}
                      alt=""
                      className="po_img"
                    />
                    <div className="content">
                      <a
                        href={data.link}
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        <FaDoorOpen size={70} />
                      </a>
                      <a
                        href={data.GHlink}
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        <FaGithub size={70} />
                      </a>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="po_desc">
                    <h2>{data.name}</h2>
                    <p>{data.desctiption}</p>
                    <a
                      href={data.link}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      view project
                    </a>
                    <a
                      href={data.GHlink}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      view Git
                    </a>
                  </div>
                </Col>
              </Row>
            );
          })}
        </div>
      </Container>
    </HelmetProvider>
  );
};
