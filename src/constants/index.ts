// Sara Arif Portfolio — All Data

import {
  python, pandas, csharp, php, sql, cpp,
  powerbi, scikit, firebase, streamlit, r_lang, tensorflow, snowflake,
  web, mobile, backend, creator,
  javascript, typescript, html, css, reactjs,
  tailwind, git,
  uet, freelance, intern, college,
  project1, project2, project3, project4, project5,
  project6, project7, project8, project9, project10,
  project11,
  project12,
  project13,
  aura_chat,
  loan_risk,
  electricity_forecast,
  customer_clustering,
  bank_marketing,
  urdupy,
  sql2pandas,
  lalr1,
  powerbi_dashboard,
  tableau_dashboard,
  mobile_app,
  csharp_desktop,
  cpp_terminal,
  global_tech,
  ecommerce_sales,
  pizza_sales,
  credit_card,
  bank_loan_pasted,
  customer_trends_pasted,
  ecommerce_sales_pasted,
  coffee_sales_pasted,
  ocd_patient_pasted,
  superstore_sales_pasted,
  lalr1_pasted,
  bank_network_pasted,
  vizbot_pasted,
  expense_tracker_pasted,
  user1, user2, user3,
  github, linkedin, kaggle,
  cert_chatgpt, cert_powerbi, cert_r, cert_deeplearning, cert_excel, cert_aiagents, cert_genai_career, cert_fabric, cert_google_prompting, cert_icsc, cert_python, cert_sql, cert_snowflake, cert_cursor
} from "../assets";

export const NAV_LINKS = [
  { id: "about", title: "About", link: null },
  { id: "work", title: "Work", link: null },
  { id: "contact", title: "Contact", link: null },
  { id: "source-code", title: "GitHub", link: "https://github.com/SaraArif6198" },
] as const;

export const SERVICES = [
  { title: "AI & ML Engineer", icon: creator },
  { title: "Data Systems Architect", icon: mobile },
  { title: "Full-Stack Developer", icon: backend },
  { title: "BI & Data Analyst", icon: web },
] as const;

export const TECHNOLOGIES = [
  { name: "Python", icon: python, category: "Languages" },
  { name: "C++", icon: cpp, category: "Languages" },
  { name: "C#", icon: csharp, category: "Languages" },
  { name: "PHP", icon: php, category: "Languages" },
  { name: "R", icon: r_lang, category: "Languages" },
  { name: "SQL", icon: sql, category: "Data & Analytics" },
  { name: "Pandas", icon: pandas, category: "Data & Analytics" },
  { name: "Power BI", icon: powerbi, category: "Data & Analytics" },
  { name: "Snowflake", icon: snowflake, category: "Data & Analytics" },
  { name: "Scikit-learn", icon: scikit, category: "Frameworks & AI" },
  { name: "TensorFlow", icon: tensorflow, category: "Frameworks & AI" },
  { name: "React JS", icon: reactjs, category: "Frameworks & AI" },
  { name: "Tailwind CSS", icon: tailwind, category: "Frameworks & AI" },
  { name: "Streamlit", icon: streamlit, category: "Tools & Cloud" },
  { name: "Firebase", icon: firebase, category: "Tools & Cloud" },
  { name: "Git", icon: git, category: "Tools & Cloud" },
] as const;

export const EXPERIENCES = [
  {
    title: "BS Computer Science",
    company_name: "University of Chakwal",
    icon: uet,
    iconBg: "#FFFFFF",
    date: "Sep 2023 — Sep 2027",
    points: [
      "Specializing in compiler construction, machine learning, and systems programming.",
      "CGPA: 3.85 / 4.0 (Grade A). Top 2% Globally in ICSC 2025.",
      "Built 20+ projects ranging from full compilers to production payroll systems.",
      "Maintaining strong academic record while delivering real-world software to clients.",
    ],
  },
  {
    title: "22+ Professional Certifications",
    company_name: "IBM, Google, Microsoft, Snowflake",
    icon: college,
    iconBg: "#E6DEDD",
    date: "2024 — 2026",
    points: [
      "IBM Deep Learning, RAG, GenAI, Google Prompting.",
      "Microsoft Power BI, UC Davis SQL, Macquarie Excel.",
      "Snowflake (cloud data warehouse) and Microsoft Fabric.",
      "Forage simulations (Tata, Deloitte) — real-world business analytics contexts.",
    ],
  },
  {
    title: "Freelance Software Developer",
    company_name: "DG Cement Project",
    icon: freelance,
    iconBg: "#383E56",
    date: "2024 — 2025",
    points: [
      "Designed and shipped a complete production payroll management system from scratch.",
      "Built 28 REST API endpoints covering attendance, overtime, loans, and salary finalization.",
      "System is live and actively used by 100+ workers at a real construction site.",
      "Implemented offline-first PWA with service worker for on-site use without internet.",
    ],
  },
  {
    title: "Data Science Intern",
    company_name: "DevelopersHub Corporation",
    icon: intern,
    iconBg: "#000000",
    date: "Jun 2025 — Jul 2025",
    points: [
      "Built end-to-end ML pipelines: EDA → feature engineering → model training → deployment.",
      "Delivered Streamlit dashboards for business stakeholders to consume model outputs.",
      "Benchmarked multiple models (CatBoost, XGBoost, Logistic Regression) on real datasets.",
      "Applied cost-sensitive learning for imbalanced classification problems.",
    ],
  },
] as const;

export const CERTIFICATIONS = [
  {
    title: "International Computer Science Competition 2025 — Silver Honour",
    issuer: "ICSC",
    date: "Nov 2025",
    category: "Awards & Honors",
    link: "https://icscompetition.org/verify",
    image: cert_icsc
  },
  {
    title: "Vibe Coding with Cursor AI",
    issuer: "United Latino Students Association",
    date: "Dec 2025",
    category: "Artificial Intelligence",
    link: "https://www.coursera.org/account/accomplishments/verify/JXCVLW6GKDLV",
    image: cert_cursor
  },
  {
    title: "ChatGPT Advanced Data Analysis",
    issuer: "Vanderbilt University",
    date: "Dec 2025",
    category: "Artificial Intelligence",
    link: "https://www.coursera.org/account/accomplishments/verify/08QM2BHET6EV",
    image: cert_chatgpt
  },
  {
    title: "Getting Started with Microsoft Fabric",
    issuer: "Whizlabs",
    date: "Nov 2025",
    category: "Data Engineering",
    link: "https://www.coursera.org/account/accomplishments/verify/0RY0FCE08WNF",
    image: cert_fabric
  },
  {
    title: "Snowflake Generative AI Professional",
    issuer: "Snowflake",
    date: "Nov 2025",
    category: "Artificial Intelligence",
    link: "https://www.coursera.org/account/accomplishments/specialization/3E5O3OKZNFOK",
    image: cert_snowflake
  },
  {
    title: "Generative AI: Elevate Your Data Science Career",
    issuer: "IBM",
    date: "Oct 2025",
    category: "Artificial Intelligence",
    link: "https://www.coursera.org/account/accomplishments/verify/J8IW0OWMUEB6",
    image: cert_genai_career
  },
  {
    title: "Fundamentals of AI Agents Using RAG and LangChain",
    issuer: "IBM",
    date: "Oct 2025",
    category: "Artificial Intelligence",
    link: "https://www.coursera.org/account/accomplishments/verify/GOXG6UNMVI39",
    image: cert_aiagents
  },
  {
    title: "Deep Learning with Keras and TensorFlow",
    issuer: "IBM",
    date: "Sep 2025",
    category: "Machine Learning",
    link: "https://www.coursera.org/account/accomplishments/verify/OST1KBZHJJ9Y",
    image: cert_deeplearning
  },
  {
    title: "Data Visualization with R",
    issuer: "IBM",
    date: "Sep 2025",
    category: "Data Analytics",
    link: "https://www.coursera.org/account/accomplishments/verify/1TCJ0QO1LFWJ",
    image: cert_r
  },
  {
    title: "Python for Data Analytics",
    issuer: "DeepLearning.AI",
    date: "Sep 2025",
    category: "Data Analytics",
    link: "https://www.coursera.org/account/accomplishments/verify/LWIZLHVZBIUI",
    image: cert_python
  },
  {
    title: "Google Prompting Essentials Specialization",
    issuer: "Google",
    date: "Sep 2025",
    category: "Artificial Intelligence",
    link: "https://www.coursera.org/account/accomplishments/specialization/certificate/1TGJ1KA0HPJD",
    image: cert_google_prompting
  },
  {
    title: "Data Analysis and Visualization with Power BI",
    issuer: "Microsoft",
    date: "Sep 2025",
    category: "Data Analytics",
    link: "https://www.coursera.org/account/accomplishments/verify/F8S360WUEAX7",
    image: cert_powerbi
  },
  {
    title: "SQL for Data Science",
    issuer: "University of California, Davis",
    date: "Aug 2025",
    category: "Data Engineering",
    link: "https://www.coursera.org/account/accomplishments/verify/BVAUWYXS13CQ",
    image: cert_sql
  },
  {
    title: "Excel Skills for Business: Advanced",
    issuer: "Macquarie University",
    date: "Aug 2025",
    category: "Data Analytics",
    link: "https://www.coursera.org/account/accomplishments/verify/EBNSX5D0NHR3",
    image: cert_excel
  }
];


export const TESTIMONIALS = [
  {
    testimonial: "Sara built us a complete payroll system in weeks. It replaced our manual Excel tracking and now runs our entire workforce management. Exceptional work.",
    name: "Site Manager",
    designation: "Operations Lead",
    company: "DG Cement Project",
    image: user1,
  },
  {
    testimonial: "UrduPy is a genuinely innovative idea. Sara didn't just learn compiler theory — she applied it to solve a real cultural and educational problem for Urdu speakers.",
    name: "CS Reviewer",
    designation: "Technical Evaluator",
    company: "University of Chakwal",
    image: user2,
  },
  {
    testimonial: "Her ML work is thoughtful. The loan risk classifier goes beyond accuracy — she optimizes for real business cost, which shows mature engineering judgment.",
    name: "Data Science Mentor",
    designation: "Senior Data Scientist",
    company: "Industry",
    image: user3,
  },
] as const;

export const PROJECTS = [
  // 🧠 Artificial Intelligence & ML
  {
    name: "VizBot Analytics (DataSage)",
    description: "AI-powered Exploratory Data Analysis platform. Automates statistical profiling, data visualization, and narrative generation using LangGraph and Groq Llama 3.1.",
    tags: [{ name: "LangGraph", color: "blue-text-gradient" }, { name: "FastAPI", color: "green-text-gradient" }, { name: "Streamlit", color: "pink-text-gradient" }],
    image: vizbot_pasted,
    source_code_link: "https://github.com/SaraArif6198/VizBot",
    live_site_link: "https://github.com/SaraArif6198/VizBot",
    category: "Artificial Intelligence & ML"
  },
  {
    name: "AURA Chat Model",
    description: "LangGraph StateGraph AI chatbot with cross-session memory via SQLite checkpointing. Thread isolation, HuggingFace 120B model, streaming responses.",
    tags: [{ name: "LangGraph", color: "blue-text-gradient" }, { name: "HuggingFace", color: "green-text-gradient" }, { name: "SQLite", color: "pink-text-gradient" }],
    image: aura_chat,
    source_code_link: "https://github.com/SaraArif6198/aura-ai-agent",
    live_site_link: "https://github.com/SaraArif6198/aura-ai-agent",
    category: "Artificial Intelligence & ML"
  },
  {
    name: "Loan Risk Classifier",
    description: "Cost-sensitive credit risk model on 307K apps. Threshold sweep minimizes real business loss. Live deployed Streamlit dashboard with CatBoost.",
    tags: [{ name: "CatBoost", color: "blue-text-gradient" }, { name: "Streamlit", color: "green-text-gradient" }, { name: "scikit-learn", color: "pink-text-gradient" }],
    image: loan_risk,
    source_code_link: "https://github.com/SaraArif6198/-loan-risk-classifier-dashboard",
    live_site_link: "https://loan-risk-predict-dashboard.streamlit.app/",
    category: "Artificial Intelligence & ML"
  },
  {
    name: "Electricity Forecasting",
    description: "Model comparison: ARIMA vs Prophet vs XGBoost. Live deployed dashboard with 24h/3d/7d forecast horizons on UCI dataset.",
    tags: [{ name: "XGBoost", color: "blue-text-gradient" }, { name: "ARIMA", color: "green-text-gradient" }, { name: "Prophet", color: "pink-text-gradient" }],
    image: electricity_forecast,
    source_code_link: "https://github.com/SaraArif6198/electricity-consumption-forecasting-dashboard",
    live_site_link: "https://electricity-consumption-forecasting-dashboard.streamlit.app/",
    category: "Artificial Intelligence & ML"
  },
  {
    name: "Customer Clustering",
    description: "K-Means + PCA + t-SNE visualization pipeline for customer segmentation. Translated cluster insights into marketing strategies.",
    tags: [{ name: "scikit-learn", color: "blue-text-gradient" }, { name: "K-Means", color: "green-text-gradient" }, { name: "PCA", color: "pink-text-gradient" }],
    image: customer_clustering,
    source_code_link: "https://github.com/SaraArif6198/unsupervised-customer-clustering",
    live_site_link: "https://github.com/SaraArif6198/unsupervised-customer-clustering",
    category: "Artificial Intelligence & ML"
  },
  {
    name: "Bank Marketing ML",
    description: "Machine Learning explainer dashboard analyzing bank marketing campaign success rates using demographic classification models.",
    tags: [{ name: "scikit-learn", color: "blue-text-gradient" }, { name: "Jupyter", color: "green-text-gradient" }, { name: "EDA", color: "pink-text-gradient" }],
    image: bank_marketing,
    source_code_link: "https://github.com/SaraArif6198/bank-marketing-ml-explainer",
    live_site_link: "https://github.com/SaraArif6198/bank-marketing-ml-explainer",
    category: "Artificial Intelligence & ML"
  },

  // ⚙️ Compiler Engineering
  {
    name: "UrduPy — Compiler",
    description: "A full 5-phase compiler for Roman Urdu. Lexer → Parser → AST → IR → CodeGen. Built from scratch with a GUI IDE and type inference. For 230M Urdu speakers.",
    tags: [{ name: "Python", color: "blue-text-gradient" }, { name: "Compiler Theory", color: "green-text-gradient" }, { name: "Tkinter IDE", color: "pink-text-gradient" }],
    image: urdupy,
    source_code_link: "https://github.com/SaraArif6198/urdupy-compiler",
    live_site_link: "https://github.com/SaraArif6198/urdupy-compiler",
    category: "Compiler Engineering"
  },
  {
    name: "SQL2Pandas — Query Compiler",
    description: "6-phase SQL to Pandas transpiler with 5 optimizer passes (predicate pushdown, projection pruning). Handles 20+ SQL constructs with full AST parsing.",
    tags: [{ name: "Python", color: "blue-text-gradient" }, { name: "Pandas", color: "green-text-gradient" }, { name: "Query Optimizer", color: "pink-text-gradient" }],
    image: sql2pandas,
    source_code_link: "https://github.com/SaraArif6198/sql2pandas-transpiler",
    live_site_link: "https://github.com/SaraArif6198/sql2pandas-transpiler",
    category: "Compiler Engineering"
  },
  {
    name: "LALR(1) Compiler Simulator",
    description: "Implemented LALR(1) from scratch — canonical item construction, lookahead propagation, conflict resolution. Combined with a React visualizer.",
    tags: [{ name: "React", color: "blue-text-gradient" }, { name: "Compiler Theory", color: "green-text-gradient" }, { name: "Tailwind", color: "pink-text-gradient" }],
    image: lalr1_pasted,
    source_code_link: "https://github.com/SaraArif6198/lalr_simulator",
    live_site_link: "https://github.com/SaraArif6198/lalr_simulator",
    category: "Compiler Engineering"
  },

  // 📊 Data & Business Intelligence
  {
    name: "Customer Trends ETL",
    description: "Complete end-to-end data engineering pipeline using SQL for extraction, Python for transformation, and Power BI for final visualization.",
    tags: [{ name: "SQL", color: "blue-text-gradient" }, { name: "Python", color: "green-text-gradient" }, { name: "Power BI", color: "pink-text-gradient" }],
    image: customer_trends_pasted,
    source_code_link: "https://github.com/SaraArif6198/customer-trends-sql-python",
    live_site_link: "https://github.com/SaraArif6198/customer-trends-sql-python",
    category: "Data & Business Intelligence"
  },
  {
    name: "E-Commerce Sales Analysis",
    description: "Deep dive into e-commerce transactional data to optimize inventory, track YTD sales, and understand seasonal purchasing behavior.",
    tags: [{ name: "Power BI", color: "blue-text-gradient" }, { name: "KPI Tracking", color: "green-text-gradient" }, { name: "DAX", color: "pink-text-gradient" }],
    image: ecommerce_sales_pasted,
    source_code_link: "https://github.com/SaraArif6198/ecommerce-sales-analysis",
    live_site_link: "https://github.com/SaraArif6198/ecommerce-sales-analysis",
    category: "Data & Business Intelligence"
  },
  {
    name: "HR Analytics Dashboard",
    description: "Data-driven HR dashboard built to uncover factors leading to employee attrition, monitor workplace diversity, and track salary distributions.",
    tags: [{ name: "Tableau", color: "blue-text-gradient" }, { name: "Power BI", color: "green-text-gradient" }, { name: "HR Analytics", color: "pink-text-gradient" }],
    image: project12,
    source_code_link: "https://github.com/SaraArif6198/hr-analytics-dashboard",
    live_site_link: "https://github.com/SaraArif6198/hr-analytics-dashboard",
    category: "Data & Business Intelligence"
  },
  {
    name: "Pizza Retail Sales Analysis",
    description: "High-level visual reporting on pizza retail sales, isolating top-selling items, revenue generation by size, and operational bottlenecks.",
    tags: [{ name: "Power BI", color: "blue-text-gradient" }, { name: "Retail Operations", color: "green-text-gradient" }, { name: "SQL", color: "pink-text-gradient" }],
    image: pizza_sales,
    source_code_link: "https://github.com/SaraArif6198/pizza-sales-analysis",
    live_site_link: "https://github.com/SaraArif6198/pizza-sales-analysis",
    category: "Data & Business Intelligence"
  },
  {
    name: "Credit Card Transactions",
    description: "Comprehensive financial dashboard analyzing credit card utilization, expenditure patterns, and customer demographic segmentation.",
    tags: [{ name: "Power BI", color: "blue-text-gradient" }, { name: "Finance", color: "green-text-gradient" }, { name: "DAX", color: "pink-text-gradient" }],
    image: credit_card,
    source_code_link: "https://github.com/SaraArif6198/credit-card-transaction-report",
    live_site_link: "https://github.com/SaraArif6198/credit-card-transaction-report",
    category: "Data & Business Intelligence"
  },
  {
    name: "Bank Loan Report",
    description: "End-to-end data analysis and visualization dashboard analyzing bank loan performance, default rates, and customer demographics.",
    tags: [{ name: "Power BI", color: "blue-text-gradient" }, { name: "Finance", color: "green-text-gradient" }, { name: "DAX", color: "pink-text-gradient" }],
    image: bank_loan_pasted,
    source_code_link: "https://github.com/SaraArif6198/Bank-Loan-Report",
    live_site_link: "https://github.com/SaraArif6198/Bank-Loan-Report",
    category: "Data & Business Intelligence"
  },
  {
    name: "EV Data Analysis",
    description: "Tableau-based visual analytics exploring the adoption rates, geographical distribution, and technological trends of Electric Vehicles.",
    tags: [{ name: "Tableau", color: "blue-text-gradient" }, { name: "Geospatial", color: "green-text-gradient" }, { name: "Forecasting", color: "pink-text-gradient" }],
    image: project10,
    source_code_link: "https://github.com/SaraArif6198/ev-data-analysis",
    live_site_link: "https://github.com/SaraArif6198/ev-data-analysis",
    category: "Data & Business Intelligence"
  },
  {
    name: "Coffee Shop Sales",
    description: "Interactive data visualization dashboard tracking daily retail sales, product category performance, and peak hour traffic.",
    tags: [{ name: "Power BI", color: "blue-text-gradient" }, { name: "Retail Analytics", color: "green-text-gradient" }, { name: "Data Cleaning", color: "pink-text-gradient" }],
    image: coffee_sales_pasted,
    source_code_link: "https://github.com/SaraArif6198/coffee-sales-dashboard",
    live_site_link: "https://github.com/SaraArif6198/coffee-sales-dashboard",
    category: "Data & Business Intelligence"
  },
  {
    name: "OCD Patient Clinical Data",
    description: "Statistical analysis and visualization of clinical data regarding Obsessive-Compulsive Disorder patient demographics and symptom severity.",
    tags: [{ name: "Power BI", color: "blue-text-gradient" }, { name: "Healthcare", color: "green-text-gradient" }, { name: "Statistics", color: "pink-text-gradient" }],
    image: ocd_patient_pasted,
    source_code_link: "https://github.com/SaraArif6198/ocd-patient-dataset-analysis",
    live_site_link: "https://github.com/SaraArif6198/ocd-patient-dataset-analysis",
    category: "Data & Business Intelligence"
  },
  {
    name: "Superstore Sales Analysis",
    description: "Live deployed Streamlit dashboard for large-scale superstore sales performance across multiple regions.",
    tags: [{ name: "Streamlit", color: "blue-text-gradient" }, { name: "Python", color: "green-text-gradient" }, { name: "EDA", color: "pink-text-gradient" }],
    image: superstore_sales_pasted,
    source_code_link: "https://github.com/SaraArif6198/Superstore-Sales-Analysis-Dashboard",
    live_site_link: "https://sales-forecast-dashboard.streamlit.app/",
    category: "Data & Business Intelligence"
  },

  // 💻 Software Architecture
  {
    name: "Enterprise Networking Simulation",
    description: "Professional, scalable, and secure hierarchical network simulation for a banking firm with 240+ employees. Built with Cisco Packet Tracer.",
    tags: [{ name: "Cisco Packet Tracer", color: "blue-text-gradient" }, { name: "VLAN / OSPF", color: "green-text-gradient" }, { name: "Network Security", color: "pink-text-gradient" }],
    image: bank_network_pasted,
    source_code_link: "https://github.com/SaraArif6198/Bank-Network-Project",
    live_site_link: "https://github.com/SaraArif6198/Bank-Network-Project",
    category: "Software Architecture"
  },
  {
    name: "DG Cement Work Tracker",
    description: "Production payroll system for a real construction company. 28 REST API endpoints. Offline-first PWA. Live since 2025. NOT A DEMO.",
    tags: [{ name: "PHP/MySQL", color: "blue-text-gradient" }, { name: "PWA", color: "green-text-gradient" }, { name: "REST API", color: "pink-text-gradient" }],
    image: project5,
    source_code_link: "https://github.com/SaraArif6198/GSC-tracker",
    live_site_link: "https://github.com/SaraArif6198/GSC-tracker",
    category: "Software Architecture"
  },
  {
    name: "OS Memory Simulator",
    description: "C++ memory allocation simulator with First Fit, Best Fit, and Worst Fit strategies. Full systems programming knowledge demonstration.",
    tags: [{ name: "C++", color: "blue-text-gradient" }, { name: "STL", color: "green-text-gradient" }, { name: "OS Concepts", color: "pink-text-gradient" }],
    image: cpp_terminal,
    source_code_link: "https://github.com/SaraArif6198/OS-Memory_simulator",
    live_site_link: "https://github.com/SaraArif6198/OS-Memory_simulator",
    category: "Software Architecture"
  },
  {
    name: "Inventory Management System",
    description: "C# .NET WinForms production desktop application with SQL Server. Features POS, role-based access, audit logging, and PDF exports.",
    tags: [{ name: "C#", color: "blue-text-gradient" }, { name: ".NET", color: "green-text-gradient" }, { name: "SQL Server", color: "pink-text-gradient" }],
    image: csharp_desktop,
    source_code_link: "https://github.com/SaraArif6198/Inventory-Management-Sys",
    live_site_link: "https://github.com/SaraArif6198/Inventory-Management-Sys",
    category: "Software Architecture"
  },
  {
    name: "Global Tech Sales Dashboard",
    description: "Full-stack web dashboard with Firebase authentication. Built with React and Python server.",
    tags: [{ name: "React", color: "blue-text-gradient" }, { name: "Firebase", color: "green-text-gradient" }, { name: "Python", color: "pink-text-gradient" }],
    image: global_tech,
    source_code_link: "https://github.com/SaraArif6198/Global-Sales_Dashboard",
    live_site_link: "https://github.com/SaraArif6198/Global-Sales_Dashboard",
    category: "Software Architecture"
  },
  {
    name: "Mobile Expense Tracker",
    description: "Cross-platform mobile expense tracking application built using React Native and TypeScript.",
    tags: [{ name: "React Native", color: "blue-text-gradient" }, { name: "TypeScript", color: "green-text-gradient" }, { name: "Mobile API", color: "pink-text-gradient" }],
    image: expense_tracker_pasted,
    source_code_link: "https://github.com/SaraArif6198/Mobile-Expense-Tracker",
    live_site_link: "https://github.com/SaraArif6198/Mobile-Expense-Tracker",
    category: "Software Architecture"
  }
] as const;

export const SOCIALS = [
  { name: "GitHub", icon: github, link: "https://github.com/SaraArif6198" },
  { name: "LinkedIn", icon: linkedin, link: "https://linkedin.com/in/sara-arif-792p" },
  { name: "Kaggle", icon: kaggle, link: "https://www.kaggle.com/sarahashmi" },
  { name: "Streamlit", icon: streamlit, link: "https://share.streamlit.io/user/saraarif6198" },
] as const;
