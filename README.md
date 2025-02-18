# Tax Calculator Frontend

## Project Overview
This is a **React.js** frontend for a Tax Calculation Portal that allows users to input their income details and calculates their estimated tax liability as per **Indian Income Tax laws (FY 2024-25)**. The project follows best practices, including modular structure and a dark-themed UI using **Tailwind CSS**.

## Features
- User-friendly interface with a **dark theme**.
- Form to input **Annual Income, Investments, Other Deductions, and Other Income Sources**.
- "Calculate Tax" button to submit the form.
- Results page displaying:
  - **Taxable Income** after deductions
  - **Tax Payable** as per tax slabs
  - **Tax Savings Suggestions** (optional feature)
- **React Router** for navigation.

## Tech Stack
- **Frontend:** React.js, Tailwind CSS
- **State Management:** React Hooks
- **Routing:** React Router
- **API Requests:** Axios
- **Backend:** Node.js + Express.js (Separate Repository)

## Folder Structure
```
📂 tax-calculator-frontend
 ┣ 📂 src
 ┃ ┣ 📂 pages
 ┃ ┃ ┣ 📜 Home.js (Main form page)
 ┃ ┃ ┣ 📜 Results.js (Results page)
 ┃ ┣ 📂 components
 ┃ ┃ ┣ 📜 TaxForm.js (Form component)
 ┃ ┃ ┣ 📜 TaxResults.js (Results display component)
 ┃ ┣ 📂 routes
 ┃ ┃ ┣ 📜 AppRoutes.js (Handles all routes)
 ┃ ┣ 📜 App.js (Main app entry with Router)
 ┃ ┣ 📜 index.js (React entry point)
 ┣ 📜 package.json
 ┣ 📜 README.md
```

## Installation & Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo/tax-calculator-frontend.git
   cd tax-calculator-frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Run the development server:
   ```sh
   npm run dev
   ```
4. Ensure the backend is running at `http://localhost:5000`.

## API Integration
This frontend communicates with a **Node.js backend**. The API for tax calculation is expected at:
```sh
POST http://localhost:5000/calculate-tax
```
with the following request body:
```json
{
  "annualIncome": 500000,
  "investments": 100000,
  "deductions": 50000,
  "otherIncome": 20000
}
```
The response will contain:
```json
{
  "taxableIncome": 350000,
  "taxPayable": 5000,
  "suggestions": "Invest more in 80C for tax savings."
}
```
