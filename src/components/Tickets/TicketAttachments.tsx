import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { RoundedButton, RoundedInputFile, SectionText } from "../common";
import { IAttachment } from "../../utils/interfaces";

interface ITicketAttachmentsProps {
  files?: IAttachment[];
}

interface IAttachmentProps {
  id: number;
  index: number;
  name?: string;
  download?: string;
}

const Attachment = ({ id, index, name, download }: IAttachmentProps) => {
  return (
    <Row key={id} className="mb-2">
      <Col md={4}>{`File #${index}`}</Col>
      <Col md={8}>
        { !name ? (
          <RoundedInputFile name={`file_${index}`} value={""} />
        ) : (
          <a target='_blank' href={download}>{download}</a>
        )}
      </Col>
    </Row>
  );
};

const TicketAttachments = ({ files }: ITicketAttachmentsProps) => {
  const [attachmentsCount, setAttachmentCount] = useState(1);

  const addAttachmentHandle = () => {
    setAttachmentCount(attachmentsCount + 1);
  };

  return (
    <div>
      <Row className="mb-4">
        <SectionText title="Archivos adjuntos" />
        {!files ? (
          <RoundedButton color="primary" onClick={addAttachmentHandle}>
            +
          </RoundedButton>
        ) : null}
      </Row>
      {!files
        ? [...Array(attachmentsCount)].map((_, index) => (
            <Attachment id={index} index={index} />
          ))
        : files.map((file) => <Attachment {...file} index={file.id} />)}
    </div>
  );
};

export default TicketAttachments;
