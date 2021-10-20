import { useState } from "react";
import { Card, Button, Modal } from "react-bootstrap";

export function Achieve() {
  const [show, setShow] = useState(false);

  return (
    <>
      <Button variant="success" onClick={() => setShow(true)}>
        See Achievements
      </Button>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header>
          <Button variant="danger" onClick={() => setShow(false)}>
            Close
          </Button>
        </Modal.Header>
        <Modal.Body>
          <Card>
            <Card.Header as="h5">Achievements</Card.Header>
            <Card.Body>
              <Card.Title>Build AI face recognition system</Card.Title>
              <img
                src="../images/buildAI.png"
                alt="load"
                style={{ height: "330px", width: "460px" }}
              />
              <hr />

              <Card.Title>Javascript Language</Card.Title>
              <img
                src="../images/certificate.png"
                alt="load"
                style={{ height: "330px", width: "460px" }}
              />
              <hr />
              <Card.Title>Certificate of paper publications</Card.Title>
              <img
                src="../images/paper.jpg"
                alt="load"
                style={{ height: "330px", width: "460px" }}
              />
            </Card.Body>
          </Card>
        </Modal.Body>
      </Modal>
    </>
  );
}
