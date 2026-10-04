import { createRoot } from 'react-dom/client';
import { MaxUI } from '@maxhub/max-ui';
import '@maxhub/max-ui/dist/styles.css';
import './styles/index.css'
import App from './App.jsx';


const Root = () => (
    <MaxUI platform='ios' colorScheme='dark'>
        <App />
    </MaxUI>
)
createRoot(document.getElementById('root')).render(<Root />);


