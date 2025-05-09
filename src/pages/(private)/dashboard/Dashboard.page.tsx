import { Heading } from '@radix-ui/themes';
import DashboardLayout from './Dashboard.layout';

export default function Dashboard() {
  return (
    <DashboardLayout>
      <Heading as="h1"> Dashboard Page</Heading>
    </DashboardLayout>
  );
}
