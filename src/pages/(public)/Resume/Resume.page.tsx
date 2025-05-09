import { Heading } from '@radix-ui/themes';
import ResumeLayout from './Resume.layout';
import { QRCodeSVG } from 'qrcode.react';

export default function Resume() {
  return (
    <ResumeLayout>
      <QRCodeSVG value={'Aiman Al Eryany'} />
      <Heading as="h1"> Resume Page </Heading>
    </ResumeLayout>
  );
}
