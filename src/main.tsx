// Order matters here
import 'react-toastify/dist/ReactToastify.css';
import '@/styles/theme.scss';
import '@radix-ui/themes/styles.css';
import '@/styles/index.scss';
import '@/styles/globals.scss';

import { createRoot } from 'react-dom/client';
import Providers from './Providers';
import Config from './Config';

createRoot(document.getElementById(Config.meta.appTag)!).render(<Providers />);
