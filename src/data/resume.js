export const profile = {
  name: 'Arun Kumar R',
  firstName: 'Arun',
  lastName: 'Kumar R',
  title: 'Full Stack Developer',
  roleLine: 'Backend Developer (Node.js) · Full Stack Developer',
  experienceYears: '2.6+',
  location: 'Coimbatore, India',
  status: 'Open to opportunities',
  phone: '+91 95787 77764',
  email: 'arunkumar957877@gmail.com',
  linkedin: 'https://linkedin.com/in/arun-kumar-47909930a',
  linkedinLabel: 'linkedin.com/in/arun-kumar-47909930a',
  github: 'https://github.com/Arunkumar262004',
  githubLabel: 'github.com/Arunkumar262004',
  resumeFile: '/Arun_Kumar_R_Resume.pdf',
  heroIntro:
    'I build scalable backend systems and full-stack web apps. With 2.6+ years of experience, I enjoy turning ideas into reliable, production-ready products.',
  summary:
    'Full Stack Developer with 2.6 years of professional experience across 3 organizations, with a strong focus on backend development using Node.js and Express.js. Skilled in designing and building RESTful APIs, working with MongoDB, PostgreSQL and MySQL, and implementing authentication, error handling and third-party API integrations for reliable backend services. Also experienced with React.js for frontend-backend integration. Hands-on with AWS (EC2, S3), Docker and CI/CD pipelines for deployment; currently building foundational knowledge of Microsoft Azure.',
  tagline: 'Always learning, always building.',
  introScript:
    "Hi, I'm Arun Kumar R, a backend-focused full stack developer with two point six years of experience across three companies. "
    + "I build REST APIs and backend systems with Node.js and Express, working with MongoDB, PostgreSQL, and MySQL, and I'm comfortable owning a feature end to end, from database design through deployment on AWS with Docker and CI/CD pipelines. "
    + "I've built a multi-tier dealer management system, ERP backend modules, and full-stack apps like Privora, a personal finance tracker, and a food ordering platform. "
    + "I'm currently exploring Microsoft Azure and platform engineering. If you're hiring for a backend or full stack role, I'd love to talk.",
}

export const featureCards = [
  {
    key: 'problem-solver',
    title: 'Problem Solver',
    text: 'I enjoy breaking down complex requirements into clean, working backend logic.',
  },
  {
    key: 'team-player',
    title: 'Team Player',
    text: 'Comfortable working across admin, mobile and technician-facing teams to ship features end to end.',
  },
  {
    key: 'continuous-learner',
    title: 'Continuous Learner',
    text: 'Currently building hands-on knowledge of Microsoft Azure and platform engineering.',
  },
]

export const skillGroups = [
  {
    key: 'frontend',
    label: 'Frontend',
    items: ['React.js', 'React Native', 'Next.js', 'HTML5', 'CSS3', 'Bootstrap', 'Tailwind CSS'],
  },
  {
    key: 'backend',
    label: 'Backend',
    items: ['Node.js', 'Express.js', 'Laravel', 'PHP', 'REST APIs', 'JWT Auth', 'JavaScript (ES6+)', 'TypeScript'],
  },
  {
    key: 'database',
    label: 'Database',
    items: ['MongoDB', 'MySQL', 'PostgreSQL'],
  },
  {
    key: 'mobile',
    label: 'Mobile Development',
    items: ['React Native', 'Kotlin', 'Java (Android)', 'Gradle', 'Android App Bundle (AAB)', 'Play Store Release'],
  },
  {
    key: 'devops',
    label: 'Tools & DevOps',
    items: ['Git', 'GitHub', 'Docker', 'AWS EC2/S3', 'CI/CD Pipelines', 'Linux'],
  },
  {
    key: 'other',
    label: 'Other',
    items: ['Redux', 'Socket.IO', 'Firebase', 'Supabase', 'Zod', 'Microsoft Azure (learning)'],
  },
]

export const experience = [
  {
    company: 'Conceps',
    role: 'Full Stack Developer',
    location: 'Coimbatore',
    start: 'Apr 2026',
    end: 'Present',
    current: true,
    points: [
      'Designed and implemented a multi-tier dealer management system (National down to Sub-District level) with Node.js and Express.js backend APIs, providing role-based access control for admins to manage customers, assets and service workflows.',
      'Developed backend services for technician allocation and service-ticket workflows, integrating real-time GPS-based geolocation tracking through a technician mobile application.',
      'Built automated tracking logic that triggers on service-ticket acceptance and terminates on task completion, improving service visibility and operational reliability.',
      'Integrated frontend and backend components to ensure seamless data flow across admin and technician-facing interfaces.',
    ],
  },
  {
    company: 'CloudZoo India Softwares Pvt Ltd',
    role: 'Full Stack Developer',
    location: 'Coimbatore',
    start: 'Oct 2024',
    end: 'Feb 2026',
    current: false,
    points: [
      'Developed and maintained core ERP backend modules using Node.js and Express.js, handling data storage, form processing and business logic integration.',
      'Built a Mill Software module for daily production data entry and automated, date-based report generation using the TCPDF library.',
      'Implemented and maintained backend features for database-driven business applications, improving data accuracy and workflow efficiency.',
      'Troubleshot and resolved backend issues to improve application reliability and support ongoing feature development.',
    ],
  },
  {
    company: 'SuperLabs',
    role: 'Software Developer',
    location: 'Bangalore',
    start: 'May 2024',
    end: 'Oct 2024',
    current: false,
    points: [
      'Developed and deployed a steel industry web application using the MERN stack (Node.js, Express.js, React.js, MongoDB), including company profile, industry details and demo booking modules.',
      'Built backend API integration for lead management by connecting the application with Google Forms.',
      'Customized and optimized Shopify eCommerce websites using Liquid, improving UI/UX and responsive design.',
    ],
  },
]

export const projectCategories = [
  { key: 'all', label: 'All' },
  { key: 'mobile', label: 'Mobile App' },
  { key: 'ecommerce', label: 'Food & Ordering' },
  { key: 'business', label: 'Business Tools' },
]

export const projects = [
  {
    key: 'garment-erp',
    name: 'Garment ERP',
    category: 'business',
    tagline: 'Full-stack manufacturing ERP with AI assistant',
    description:
      'A full-stack ERP for garment manufacturing that connects the whole business — leads and quotations, production tracking across every stage, inventory and procurement, and an AI assistant for querying live data — with automated WhatsApp, email and PDF reporting.',
    contribution: [
      'Built the lead-to-order pipeline: web-form and webhook lead capture, automatic sales-rep assignment, and WhatsApp/email notifications via n8n.',
      'Built the end-to-end production workflow across Knitting, Dyeing, Cutting, Stitching, Packing and Quality Check, with stage-based employee assignment and automated notifications.',
      'Integrated an AI assistant (Groq, via n8n and Laravel APIs) that answers natural-language questions about live orders, leads and invoices.',
      'Implemented automated email (Resend) and WhatsApp communication, PDF process-sheet and report generation, and daily deadline checks for upcoming due dates.',
    ],
    features: [
      'CRM: leads, quotations, invoices and customer/employee management',
      'Production tracking across every manufacturing stage with live stage counts',
      'AI assistant that answers questions about orders, leads and invoices in natural language',
      'Automated WhatsApp and email notifications, plus PDF process sheets and business reports',
      'Inventory, raw materials, suppliers and purchase-order management',
      'Role-based user management and daily deadline checks',
    ],
    stack: ['Laravel', 'React.js', 'n8n', 'Groq AI', 'Resend', 'WhatsApp API'],
    galleries: [
      {
        label: 'Dashboard & AI Assistant',
        frame: 'browser',
        images: [
          { src: 'ERP/01-dashboard.png', caption: 'Dashboard' },
          { src: 'ERP/02-dashboard.png', caption: 'Dashboard — alerts & notifications' },
          { src: 'ERP/03-Groq-llm.png', caption: 'AI assistant — natural-language queries' },
          { src: 'ERP/04-llm-model.png', caption: 'AI assistant — model response' },
        ],
      },
      {
        label: 'CRM & Contacts',
        frame: 'browser',
        images: [
          { src: 'ERP/05-customer.png', caption: 'B2B customers' },
          { src: 'ERP/06-customer-edit.png', caption: 'Edit customer' },
          { src: 'ERP/07-employees.png', caption: 'Employees' },
          { src: 'ERP/08-edit-emp.png', caption: 'Edit employee' },
          { src: 'ERP/09-leads.png', caption: 'Leads' },
          { src: 'ERP/10-leads.png', caption: 'Leads — pipeline view' },
          { src: 'ERP/11-quick-convert.png', caption: 'Convert lead to customer' },
          { src: 'ERP/12-task.png', caption: 'Tasks' },
          { src: 'ERP/13-edit-task.png', caption: 'Edit task' },
        ],
      },
      {
        label: 'Sales — Quotations & Invoices',
        frame: 'browser',
        images: [
          { src: 'ERP/14-quotation.png', caption: 'Quotations' },
          { src: 'ERP/15-quotation.png', caption: 'New quotation' },
          { src: 'ERP/16-quotation-pdf.png', caption: 'Generated quotation PDF' },
          { src: 'ERP/17-quick-options.png', caption: 'Quotation quick options' },
          { src: 'ERP/18-inv.png', caption: 'Invoices' },
          { src: 'ERP/19-inv.png', caption: 'Invoice detail' },
          { src: 'ERP/20-inv.png', caption: 'Invoice — line items' },
          { src: 'ERP/21-payments.png', caption: 'Payments' },
        ],
      },
      {
        label: 'Production',
        frame: 'browser',
        images: [
          { src: 'ERP/22-prod.png', caption: 'Production pipeline' },
          { src: 'ERP/23-orders.png', caption: 'Orders' },
          { src: 'ERP/24-prod-sheet.png', caption: 'Production process sheet (PDF)' },
          { src: 'ERP/25-order-edit.png', caption: 'Edit order' },
          { src: 'ERP/26-convert-order.png', caption: 'Convert quotation to order' },
          { src: 'ERP/27-order-to-stitching.png', caption: 'Move order to stitching' },
          { src: 'ERP/28-order-to-stitching-proc.png', caption: 'Stitching process detail' },
          { src: 'ERP/29-dye-process.png', caption: 'Dyeing process detail' },
        ],
      },
      {
        label: 'Inventory & Procurement',
        frame: 'browser',
        images: [
          { src: 'ERP/30-raw.png', caption: 'Raw materials' },
          { src: 'ERP/31-raw-met-edit.png', caption: 'Edit raw material' },
          { src: 'ERP/32-suppliers.png', caption: 'Suppliers' },
          { src: 'ERP/33-siup-edit.png', caption: 'Edit supplier' },
          { src: 'ERP/34-po.png', caption: 'Purchase orders' },
          { src: 'ERP/35-del.png', caption: 'Deliveries' },
          { src: 'ERP/36-inventory.png', caption: 'Finished-goods inventory' },
          { src: 'ERP/37-inventory-edit.png', caption: 'Edit inventory item' },
        ],
      },
      {
        label: 'Reports',
        frame: 'browser',
        images: [
          { src: 'ERP/38-order-report.png', caption: 'Order report' },
          { src: 'ERP/39-order-report.png', caption: 'Order report — filtered' },
          { src: 'ERP/40-order-excel.png', caption: 'Exported order report (Excel)' },
          { src: 'ERP/41-pur-rep.png', caption: 'Purchase report' },
        ],
      },
      {
        label: 'Masters & Settings',
        frame: 'browser',
        images: [
          { src: 'ERP/42-size-mas.png', caption: 'Size master' },
          { src: 'ERP/43-mast-edit.png', caption: 'Edit master data' },
          { src: 'ERP/44-brand.png', caption: 'Brands' },
          { src: 'ERP/45-user-mgt.png', caption: 'User management' },
          { src: 'ERP/46-edit-user.png', caption: 'Edit user' },
          { src: 'ERP/47-roles.png', caption: 'Roles' },
          { src: 'ERP/48-roles-acc.png', caption: 'Role permissions' },
          { src: 'ERP/49-pass.png', caption: 'Change password' },
        ],
      },
      {
        label: 'Notifications & Automation',
        frame: 'browser',
        images: [
          { src: 'ERP/50-notifi.png', caption: 'In-app notifications' },
          { src: 'ERP/51-wp.png', caption: 'Automated WhatsApp notifications' },
          { src: 'ERP/52-mail.png', caption: 'Automated email notifications' },
        ],
      },
    ],
  },
  {
    key: 'privora',
    name: 'Privora',
    category: 'mobile',
    tagline: 'Personal finance & document vault',
    description:
      'A personal finance and document management app for Android, built with React Native. Tracks daily expenses, keeps a monthly passbook, generates downloadable PDF statements, and securely stores important documents — with an admin-only account creation model for security.',
    contribution: [
      'Built the mobile app end to end with React Native, plus native Android integration using Java and Kotlin.',
      'Developed the Express.js + MongoDB REST API backend and an admin web panel for user management.',
      'Tested and debugged on a physical Android device over USB debugging, and produced signed release builds with android/gradlew assembleRelease.',
    ],
    features: [
      'Admin-created accounts only — self sign-up is disabled for security and data integrity',
      'Daily debit/credit transaction tracking with categories and notes',
      'Monthly passbook and calendar ledger of every transaction',
      'Downloadable monthly account statements as PDF',
      'Album section to organize and securely upload important documents',
      'Secure sign-in and in-app password change',
    ],
    stack: ['React Native', 'Java/Kotlin (Android)', 'Express.js', 'MongoDB', 'REST APIs'],
    galleries: [
      {
        label: 'App Screens',
        frame: 'phone',
        images: [
          { src: 'privora-app/01-splash.jpg', caption: 'Splash screen' },
          { src: 'privora-app/02-signin.jpg', caption: 'Sign in' },
          { src: 'privora-app/03-dashboard.jpg', caption: 'Dashboard' },
          { src: 'privora-app/04-side-nav.jpg', caption: 'Navigation menu' },
          { src: 'privora-app/05-add-transaction-credit.jpg', caption: 'Add transaction — credit' },
          { src: 'privora-app/06-add-transaction-debit.jpg', caption: 'Add transaction — debit' },
          { src: 'privora-app/07-passbook.jpg', caption: 'Monthly passbook' },
          { src: 'privora-app/08-calendar-ledger.jpg', caption: 'Calendar ledger' },
          { src: 'privora-app/09-calendar-notation.jpg', caption: 'Calendar notes' },
          { src: 'privora-app/10-photo-album.jpg', caption: 'Photo album' },
          { src: 'privora-app/11-document-sharing.jpg', caption: 'Document sharing' },
          { src: 'privora-app/12-account-info.jpg', caption: 'Account info & security' },
          { src: 'privora-app/13-reset-password.jpg', caption: 'Reset password' },
        ],
      },
    ],
  },
  {
    key: 'ridex',
    name: 'Ridex',
    category: 'mobile',
    tagline: 'Taxi booking platform',
    description:
      'A taxi booking platform similar to Rapido, connecting riders with nearby drivers for on-demand rides. Full case study write-up coming soon.',
    contribution: ['Full contribution details coming soon.'],
    features: ['Full feature list coming soon.'],
    stack: [],
    galleries: [],
  },
  {
    key: 'food-ordering',
    name: 'Arsha Food Ordering',
    category: 'ecommerce',
    tagline: 'Full-stack MERN ordering platform',
    description:
      'A complete food ordering web app built with the MERN stack — JWT authentication with 7-day token expiry, a Stripe sandbox checkout, real-time order tracking, and a full admin panel to manage the menu and order pipeline.',
    contribution: [
      'Built the customer storefront: category-based menu browsing, cart and buy-now flows, custom quantities, and mandatory delivery-address checkout.',
      'Implemented JWT-based authentication for both users and admins, with role-based access control between the two.',
      'Integrated the Stripe sandbox payment gateway for realistic order simulation.',
      'Built the admin panel: full CRUD on food items, a centralized order dashboard, and dynamic order-status updates.',
    ],
    features: [
      'Secure signup/login with JWT (7-day expiry)',
      'Browse food by category, add to cart or buy now, choose custom quantity',
      'Stripe sandbox checkout with delivery-address capture',
      'Real-time order tracking and a personal orders dashboard',
      'Admin: full CRUD on food items, centralized order dashboard, live status updates (Processing → Out for Delivery → Delivered)',
    ],
    stack: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JWT', 'Stripe'],
    galleries: [
      {
        label: 'Customer App',
        frame: 'browser',
        images: [
          { src: 'food-app/food-web/01-hero.jpg', caption: 'Home' },
          { src: 'food-app/food-web/02-menu-categories.jpg', caption: 'Menu categories' },
          { src: 'food-app/food-web/03-dish-grid.jpg', caption: 'Browse dishes' },
          { src: 'food-app/food-web/04-cart.jpg', caption: 'Cart' },
          { src: 'food-app/food-web/05-stripe-checkout.jpg', caption: 'Stripe checkout' },
        ],
      },
      {
        label: 'Admin Panel',
        frame: 'browser',
        images: [
          { src: 'food-app/admin/01-login.jpg', caption: 'Admin login' },
          { src: 'food-app/admin/02-add-item.jpg', caption: 'Add menu item' },
          { src: 'food-app/admin/03-live-on-storefront.jpg', caption: 'Item live on storefront' },
          { src: 'food-app/admin/04-manage-menu.jpg', caption: 'Manage menu' },
          { src: 'food-app/admin/05-live-orders.jpg', caption: 'Live orders' },
        ],
      },
    ],
  },
]

export const education = [
  {
    degree: 'MCA (Master of Computer Applications)',
    school: 'Bharathiyar University, Coimbatore',
    period: '',
  },
  {
    degree: 'B.Com (Computer Applications)',
    school: 'K.S.R College Of Arts And Science, Tiruchengode',
    period: 'Jun 2021 – May 2024',
  },
]
