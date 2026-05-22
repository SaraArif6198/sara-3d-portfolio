const fs = require('fs');
const path = require('path');

const outputDir = path.join(__dirname, 'github_readmes');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const projects = [
  {
    repo_name: "urdupy-compiler",
    name: "UrduPy — Compiler",
    description: "A full 5-phase compiler for Roman Urdu. Lexer → Parser → AST → IR → CodeGen. Built from scratch with a GUI IDE and type inference. For 230M Urdu speakers.",
    tags: ["Python", "Compiler Theory", "Tkinter IDE"],
    key_features: [
      "Custom Lexer & Parser built from scratch",
      "Abstract Syntax Tree (AST) Generation",
      "Intermediate Representation (IR)",
      "Target Code Generation",
      "Built-in GUI IDE using Tkinter"
    ]
  },
  {
    repo_name: "sql2pandas-transpiler",
    name: "SQL2Pandas — Query Compiler",
    description: "6-phase SQL to Pandas transpiler with 5 optimizer passes (predicate pushdown, projection pruning). Handles 20+ SQL constructs with full AST parsing.",
    tags: ["Python", "Pandas", "Query Optimizer"],
    key_features: [
      "Full SQL AST Parsing",
      "Predicate Pushdown optimization",
      "Projection Pruning optimization",
      "Supports over 20+ complex SQL constructs",
      "Generates optimized Pandas execution code"
    ]
  },
  {
    repo_name: "loan-risk-classifier-model",
    name: "Loan Risk Classifier",
    description: "Cost-sensitive credit risk model on 307K apps. Threshold sweep minimizes real business loss. Live deployed Streamlit dashboard with CatBoost.",
    tags: ["CatBoost", "Streamlit", "scikit-learn"],
    key_features: [
      "Trained on 307K+ real-world loan applications",
      "Cost-sensitive threshold optimization",
      "Gradient Boosting via CatBoost",
      "Live interactive Streamlit Dashboard"
    ]
  },
  {
    repo_name: "aura-ai-agent",
    name: "AURA Chat Model",
    description: "LangGraph StateGraph AI chatbot with cross-session memory via SQLite checkpointing. Thread isolation, HuggingFace 120B model, streaming responses.",
    tags: ["LangGraph", "HuggingFace", "SQLite"],
    key_features: [
      "StateGraph architecture with LangGraph",
      "Cross-session memory and thread isolation",
      "Integration with 120B parameter HuggingFace models",
      "SQLite Checkpointing for robust state management"
    ]
  },
  {
    repo_name: "dg-cement-work-tracker",
    name: "DG Cement Work Tracker",
    description: "Production payroll system for a real construction company. 28 REST API endpoints. Offline-first PWA. Live since 2025. NOT A DEMO.",
    tags: ["PHP/MySQL", "PWA", "REST API"],
    key_features: [
      "Offline-first Progressive Web App (PWA) architecture",
      "28 Custom REST API Endpoints",
      "Production-grade financial & payroll tracking",
      "Deployed live for active construction sites"
    ]
  },
  {
    repo_name: "lalr1-compiler-simulator",
    name: "LALR(1) Compiler Simulator",
    description: "Implemented LALR(1) from scratch — canonical item construction, lookahead propagation, conflict resolution. Combined with a React visualizer.",
    tags: ["React", "Compiler Theory", "Tailwind"],
    key_features: [
      "Canonical Item Set Construction",
      "Lookahead Propagation Algorithm",
      "Shift-Reduce / Reduce-Reduce Conflict Resolution",
      "Interactive React/Tailwind Visualizer UI"
    ]
  },
  {
    repo_name: "electricity-forecasting-model",
    name: "Electricity Forecasting",
    description: "Model comparison: ARIMA vs Prophet vs XGBoost. Live deployed dashboard with 24h/3d/7d forecast horizons on UCI dataset.",
    tags: ["XGBoost", "ARIMA", "Prophet"],
    key_features: [
      "Comparative analysis of ARIMA, Prophet, and XGBoost",
      "Trained on standard UCI Electricity datasets",
      "24h, 3d, and 7d forecast horizons",
      "Interactive Dashboard"
    ]
  },
  {
    repo_name: "inventory-management-system",
    name: "Inventory Management",
    description: "C# .NET WinForms production desktop application with SQL Server. Features POS, role-based access, audit logging, and PDF exports.",
    tags: ["C#", ".NET", "SQL Server"],
    key_features: [
      "Point of Sale (POS) Integration",
      "Role-based access control (RBAC)",
      "Audit Logging and Historical Tracking",
      "Automated PDF Report Generation"
    ]
  },
  {
    repo_name: "os-memory-simulator",
    name: "OS Memory Simulator",
    description: "C++ memory allocation simulator with First Fit, Best Fit, and Worst Fit strategies. Full systems programming knowledge demonstration.",
    tags: ["C++", "STL", "OS Concepts"],
    key_features: [
      "Implementation of First Fit, Best Fit, Worst Fit",
      "Memory fragmentation analysis",
      "Deep usage of C++ Standard Template Library (STL)",
      "System-level resource management simulation"
    ]
  },
  {
    repo_name: "customer-clustering-pipeline",
    name: "Customer Clustering",
    description: "K-Means + PCA + t-SNE visualization pipeline for customer segmentation. Translated cluster insights into marketing strategies.",
    tags: ["scikit-learn", "K-Means", "PCA"],
    key_features: [
      "Principal Component Analysis (PCA) for dimensionality reduction",
      "K-Means Clustering optimization",
      "t-SNE for high-dimensional data visualization",
      "Actionable marketing insight generation"
    ]
  },
  {
    repo_name: "global-sales-dashboard",
    name: "Global Tech Sales Dashboard",
    description: "Full-stack web dashboard with Firebase authentication. Built with React and Python server.",
    tags: ["React", "Firebase", "Python"],
    key_features: [
      "Secure Firebase Authentication",
      "React Frontend",
      "Python Backend API Integration",
      "Real-time sales metrics"
    ]
  },
  {
    repo_name: "mobile-expense-tracker",
    name: "Mobile Expense Tracker",
    description: "Cross-platform mobile expense tracking application built using React Native.",
    tags: ["React Native", "Mobile", "API"],
    key_features: [
      "Cross-platform support (iOS & Android)",
      "REST API Integration",
      "Financial tracking workflows",
      "Responsive mobile UI"
    ]
  },
  {
    repo_name: "powerbi-data-gallery",
    name: "Power BI Data Gallery",
    description: "Collection of 10+ Power BI projects including HR Analytics, E-Commerce Sales, Credit Card Transactions, and Customer Trends.",
    tags: ["Power BI", "DAX", "Data Viz"],
    key_features: [
      "Advanced DAX querying and modeling",
      "HR Analytics Dashboards",
      "E-Commerce Sales Dashboards",
      "Credit Card Transaction tracking"
    ]
  }
];

projects.forEach(project => {
  const content = `# ${project.name}

> **Note:** This repository is currently set to Private to protect proprietary algorithms, architecture, and intellectual property. Read-access is granted on an individual basis to recruiters and hiring managers.

## Overview
${project.description}

## Tech Stack
${project.tags.map(tag => `- ${tag}`).join('\n')}

## Key Engineering Features
${project.key_features.map(feat => `- **${feat}**`).join('\n')}

## Request Source Code Access
To evaluate the codebase, please request access via my portfolio or email me directly at:
**saraarif6198@gmail.com**

Please include:
1. Your Name & Company
2. Your GitHub Username

---
*Developed by [Sara Arif](https://github.com/SaraArif6198)*
`;

  const filepath = path.join(outputDir, `${project.repo_name}-README.md`);
  fs.writeFileSync(filepath, content);
  console.log(`Generated: ${project.repo_name}-README.md`);
});

console.log("\n✅ All 13 READMEs have been generated successfully in the 'github_readmes' directory!");
