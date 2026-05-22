const fs = require('fs');
const path = require('path');

const outputDir = path.join(__dirname, 'github_readmes');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const dataProjects = [
  {
    repo_name: "bank-loan-report",
    name: "Bank Loan Analysis Report",
    description: "End-to-end data analysis and visualization dashboard analyzing bank loan performance, default rates, and customer demographics.",
    tags: ["Power BI", "DAX", "Data Modeling", "Financial Analytics"],
    key_features: ["KPI Tracking for Total Funded Amount and Good/Bad Loan Ratios", "Dynamic time-intelligence DAX measures", "Interactive geographic and demographic loan segmentations"]
  },
  {
    repo_name: "coffee-sales-dashboard",
    name: "Coffee Shop Sales Dashboard",
    description: "Interactive data visualization dashboard tracking daily retail sales, product category performance, and peak hour traffic for a coffee shop.",
    tags: ["Power BI", "Data Cleaning", "Retail Analytics"],
    key_features: ["Sales trend analysis across different store locations", "Peak hour traffic identification", "Product category profitability metrics"]
  },
  {
    repo_name: "credit-card-transaction-report",
    name: "Credit Card Transaction Report",
    description: "Comprehensive financial dashboard analyzing credit card utilization, expenditure patterns, and customer segmentation.",
    tags: ["Power BI", "Financial Data", "Customer Segmentation"],
    key_features: ["Transaction volume and revenue analysis", "Customer demographic profiling (Age, Income, Education)", "Expenditure category breakdowns"]
  },
  {
    repo_name: "ev-data-analysis",
    name: "Electric Vehicle (EV) Data Analysis",
    description: "Tableau-based visual analytics exploring the adoption rates, geographical distribution, and technological trends of Electric Vehicles.",
    tags: ["Tableau", "Data Visualization", "Geospatial Analysis"],
    key_features: ["Geospatial mapping of EV adoption across regions", "Battery vs Plug-in Hybrid market share analysis", "Historical adoption trend forecasting"]
  },
  {
    repo_name: "ecommerce-sales-analysis",
    name: "E-Commerce Sales Analysis",
    description: "Deep dive into e-commerce transactional data to optimize inventory, track YTD sales, and understand seasonal purchasing behavior.",
    tags: ["Power BI", "E-Commerce", "KPI Tracking"],
    key_features: ["Year-To-Date (YTD) and Month-Over-Month (MoM) sales tracking", "Profit margin analysis by product category", "State/City level sales distribution"]
  },
  {
    repo_name: "hr-analytics-dashboard",
    name: "HR & Employee Retention Analytics",
    description: "Data-driven HR dashboard built to uncover factors leading to employee attrition, monitor workplace diversity, and track salary distributions.",
    tags: ["Tableau", "Power BI", "HR Analytics"],
    key_features: ["Employee attrition rate modeling", "Department-wise performance and salary distribution", "Gender and age demographic tracking"]
  },
  {
    repo_name: "ocd-patient-dataset-analysis",
    name: "OCD Patient Clinical Data Analysis",
    description: "Statistical analysis and visualization of clinical data regarding Obsessive-Compulsive Disorder (OCD) patient demographics and symptom severity.",
    tags: ["Power BI", "Healthcare Analytics", "Statistical Modeling"],
    key_features: ["Y-BOCS score distribution tracking", "Correlation analysis between patient demographics and compulsion types", "Medical data sanitization and structuring"]
  },
  {
    repo_name: "pizza-sales-analysis",
    name: "Pizza Retail Sales Analysis",
    description: "High-level visual reporting on pizza retail sales, isolating top-selling items, revenue generation by size, and operational bottlenecks.",
    tags: ["Power BI", "SQL", "Retail Operations"],
    key_features: ["Total Revenue, Average Order Value, and Total Pizzas Sold tracking", "Bestseller vs Worst-seller product identification", "Hourly and daily trend analysis for staffing optimization"]
  },
  {
    repo_name: "customer-trends-sql-python",
    name: "Customer Trends Analysis Pipeline",
    description: "A complete end-to-end data engineering pipeline using SQL for extraction, Python for transformation, and Power BI for final visualization of customer trends.",
    tags: ["SQL", "Python", "Power BI", "ETL"],
    key_features: ["Custom ETL pipeline built with Python (Pandas)", "Complex SQL queries for data aggregation", "Final business intelligence reporting via Power BI"]
  }
];

dataProjects.forEach(project => {
  const content = `# ${project.name}

> **Note:** This repository is currently set to Private to protect proprietary data models, DAX measures, and intellectual property. Read-access is granted on an individual basis to recruiters and hiring managers.

## Overview
${project.description}

## Tech Stack
${project.tags.map(tag => `- ${tag}`).join('\n')}

## Key Analytical Features
${project.key_features.map(feat => `- **${feat}**`).join('\n')}

## Request Source Code & Dashboard Access
To evaluate the underlying data models and interactive dashboards, please request access via my portfolio or email me directly at:
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

console.log("\n✅ All Data/PowerBI READMEs have been generated successfully in the 'github_readmes' directory!");
