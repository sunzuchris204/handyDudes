# Handy Dudes Architecture Documentation

A clean architecture explainer website built with Next.js (App Router) and ShadCN UI. This technical documentation site visualizes the "Handy Dudes Lead-to-Job Automation Platform" system architecture.

## Features

- **10 Documentation Pages**: Comprehensive coverage of all system components
- **Mermaid.js Diagrams**: Visual flow diagrams for each system component
- **Professional UI**: Minimal, clean design with neutral colors
- **Fixed Navigation**: Top navigation bar and sidebar for easy navigation
- **Responsive Design**: Works on desktop and mobile devices

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── page.tsx                    # Overview page
│   ├── lead-capture/               # Lead Capture page
│   ├── sales-dispatch/             # Sales & Dispatch Dashboard page
│   ├── jobber-integration/         # Jobber Integration page
│   ├── technician-workflow/        # Technician Workflow page
│   ├── automations-messaging/       # Automations & Messaging page
│   ├── manager-dashboard/           # Manager Dashboard page
│   ├── system-flows/                # System Flows page
│   ├── integrations/                # Integrations page
│   ├── key-decisions/               # Key Decisions page
│   ├── layout.tsx                   # Root layout with navigation
│   └── globals.css                  # Global styles
├── components/
│   ├── navigation.tsx               # Fixed top navigation
│   ├── sidebar.tsx                  # Sidebar navigation
│   ├── mermaid-diagram.tsx          # Mermaid diagram component
│   └── explanation-card.tsx         # Explanation card component
└── lib/
    └── utils.ts                     # Utility functions
```

## Pages

Each page follows a consistent structure:
1. **Summary Paragraph**: Brief overview of the system component
2. **Mermaid Diagram**: Visual flow diagram showing relationships
3. **Explanation Cards**: 3-5 cards describing system responsibilities

## Customization

- Edit page content in `app/[page-name]/page.tsx`
- Modify Mermaid diagrams by updating the `chart` prop in `MermaidDiagram` components
- Adjust styling in `app/globals.css` and Tailwind config
- Update navigation items in `components/sidebar.tsx`

## Build

```bash
npm run build
```

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **ShadCN UI** - UI components (utility-based)
- **Mermaid.js** - Diagram rendering
- **Lucide React** - Icons
