import empoconnectImg from '../assets/projects/empoconnect_thumbnail.png';
import joelfishImg from '../assets/projects/joelfishtranshipper_thumbnail.png';

const projects = [{
    id: 1,
    year: 2025,
    name: 'Empower Connect',
    description: 'Redesigned the hero, footer, and key content sections (Programs, Services, Testimonials) using Elementor. Restored email functionality by configuring Fluent SMTP, updating DNS records for Microsoft 365, and registering an Azure App for secure Outlook integration.',
    status: 'Completed',
    technologies: ['WordPress', 'Elementor', 'Fluent SMTP', 'DNS Management', 'HTML/CSS', 'Responsive Design'],
    link: 'https://empoconnect.com/',
    thumbnail: empoconnectImg
}, {
    id: 2,
    year: 2024,
    name: 'Joel Fish Transhipper',
    description: 'Completely redesigned an existing Shopify store from scratch, improving layout, product presentation, and overall UX. Configured payment gateways, implemented a chatbot, and set up customer email capture for newsletters, campaigns, and promotions.',
    status: 'Completed',
    technologies: ['Shopify', 'Shopify Apps', 'HTML/CSS', 'Responsive Design', 'Chatbot Integration', 'Email Marketing'],
    link: 'https://joelfishtranshipper.com/',
    thumbnail: joelfishImg
},
];

export default projects;
