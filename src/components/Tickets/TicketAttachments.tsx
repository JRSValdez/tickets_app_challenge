import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { RoundedButton, RoundedInputFile, SectionText } from "../common";

interface IAttachment {
  title: string;
  name: SVGStringList;
  value: string;
}

const TicketAttachments = () => {
  const [attachmentsCount, setAttachmentCount] = useState(1);

  const addAttachmentHandle = () => {
    setAttachmentCount(attachmentsCount + 1);
  };

  return (
    <div>
      <Row className='mb-4'>
        <SectionText title="Archivos adjuntos" />
        <RoundedButton color="primary" onClick={addAttachmentHandle}>
          {" "}
          +{" "}
        </RoundedButton>
      </Row>
      {[...Array(attachmentsCount)].map((_, index) => (
        <Row key={index} className='mb-2'>
          <Col md={4}>{`File #${index+1}`}</Col>
          <Col md={8}>
            <RoundedInputFile name={`file_${index}`} value={""} />
          </Col>
        </Row>
      ))}
    </div>
  );
};

export default TicketAttachments;
