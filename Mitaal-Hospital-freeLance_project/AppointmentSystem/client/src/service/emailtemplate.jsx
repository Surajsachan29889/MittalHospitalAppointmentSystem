import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview, 
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";



export default function AppointmentEmail({
  name,
  phone,
  address,
  date,
  time,
}) {
  return (
    <Html>
      <Head />
      <Preview>New Appointment Request</Preview>
      <Tailwind>
        <Body className="bg-gray-100 text-black">
          <Container>
            <Section className="bg-white border border-gray-300 my-10 px-10 py-6 rounded-md">
              <Heading className="leading-tight text-xl font-bold">
                New Appointment Request
              </Heading>
              <Hr className="my-4" />
              <Text className="mb-2">
                <span className="font-bold">Patient Name:</span> {name}
              </Text>
              <Text className="mb-2">
                <span className="font-bold">Phone:</span> {phone}
              </Text>
              <Text className="mb-2">
                <span className="font-bold">Address:</span> {address}
              </Text>
              <Text className="mb-2">
                <span className="font-bold">Preferred Appointment Date:</span> {date}
              </Text>
              <Text className="mb-2">
                <span className="font-bold">Preferred Appointment Time:</span> {time}
              </Text>
              <Hr className="my-4" />
              <Text className="text-sm text-gray-600">
                Please contact the patient to confirm the appointment details.
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
