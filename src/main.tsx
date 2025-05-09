import { createRoot } from 'react-dom/client';
import Providers from './Providers';
import '@/styles/globals.scss';
import '@/styles/theme.scss';
import '@radix-ui/themes/styles.css';

createRoot(document.getElementById('root')!).render(<Providers />);
