# Admin Panel Next.js Master

A modern, scalable admin dashboard built with Next.js 15, TypeScript, Tailwind CSS, and Turborepo for optimal monorepo management. Master template for multi-tenant admin panel platform across various industries.

## 🚀 Features

- 🏗️ **Turborepo Monorepo** - Optimized build pipeline and workspace management
- 🚀 **Next.js 15** - Latest version with App Router
- 📱 **Responsive Design** - Mobile-first approach
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 📊 **Charts & Analytics** - ApexCharts integration
- 🔐 **Authentication** - Complete auth system
- 📧 **Email Templates** - Ready-to-use email components
- 🛒 **E-commerce** - Product management, invoices, billing
- 📈 **Analytics Dashboard** - Comprehensive analytics
- 🎯 **CRM System** - Customer relationship management
- 📦 **Logistics** - Delivery tracking and management
- 💰 **Stocks & Finance** - Financial dashboard
- 🎨 **UI Components** - 70+ reusable components
- 🌙 **Dark Mode** - Built-in theme switching
- 📱 **Mobile Optimized** - Perfect on all devices

## 🏗️ Monorepo Structure

```
tailadmin-turborepo/
├── apps/
│   └── web/                 # Next.js application
├── packages/
│   ├── ui/                  # Shared UI components
│   └── config/              # Shared configurations
├── turbo.json               # Turborepo configuration
└── package.json             # Root package.json with workspaces
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm 10+

### Installation

```bash
# Clone the repository
git clone https://github.com/tindevelopers/tailadmin-turborepo.git
cd tailadmin-turborepo

# Install all dependencies
npm install

# Start development server
npm run dev
```

### Development

```bash
# Start all apps in development mode
npm run dev

# Start only the web app
npm run dev --workspace=apps/web

# Build all apps
npm run build

# Build only the web app
npm run build --workspace=apps/web
```

## 📋 Available Scripts

- `npm run dev` - Start all apps in development mode
- `npm run build` - Build all apps
- `npm run lint` - Lint all workspaces
- `npm run type-check` - Type check all workspaces
- `npm run clean` - Clean all build artifacts
- `npm run format` - Format code with Prettier

### Workspace Commands

You can run commands in specific workspaces using:

```bash
# Run command in specific workspace
npm run <script> --workspace=<workspace-name>

# Examples:
npm run dev --workspace=apps/web
npm run build --workspace=packages/ui
```

## 📦 Packages

### @tailadmin/ui
Shared UI components and utilities that can be used across all apps.

### @tailadmin/config
Shared configuration files for TypeScript, Tailwind CSS, and other tools.

## 🎯 Pages & Features

### Dashboard Pages
- **Analytics** - Comprehensive analytics dashboard
- **CRM** - Customer relationship management
- **E-commerce** - Product and order management
- **Logistics** - Delivery and tracking system
- **Marketing** - Campaign and traffic analytics
- **SaaS** - Software as a service metrics
- **Stocks** - Financial and stock management

### UI Elements
- Alerts, Avatars, Badges
- Buttons, Cards, Carousels
- Dropdowns, Modals, Notifications
- Pagination, Progress Bars
- Tables, Tabs, Tooltips
- And many more...

### Forms & Tables
- Form elements and layouts
- Data tables with sorting/filtering
- File upload components
- Date pickers and selectors

### Other Features
- **AI Tools** - Text, image, video, and code generators
- **Email System** - Inbox and email management
- **File Manager** - File and folder management
- **Task Management** - Kanban boards and task lists
- **Support System** - Ticket management
- **Calendar** - Event scheduling
- **Chat System** - Real-time messaging

## 🔧 Benefits of Turborepo

1. **Faster Builds**: Intelligent caching and parallel execution
2. **Better Dependency Management**: Workspace-aware dependency resolution
3. **Code Sharing**: Easy sharing of components and utilities between apps
4. **Scalability**: Easy to add new apps and packages
5. **Developer Experience**: Unified commands and better tooling

## 🛠️ Adding New Apps

To add a new app:

1. Create a new directory in `apps/`
2. Add a `package.json` with the app configuration
3. Update the root `tsconfig.json` references
4. Update `turbo.json` if needed

## 📦 Adding New Packages

To add a new shared package:

1. Create a new directory in `packages/`
2. Add a `package.json` with the package configuration
3. Update the root `tsconfig.json` references
4. Add the package to apps that need it

## 🎨 Customization

### Theming
The project uses Tailwind CSS with a comprehensive design system. You can customize:
- Colors and typography
- Component styles
- Dark/light mode themes

### Adding New Pages
1. Create a new file in `apps/web/src/app/`
2. Follow the existing routing structure
3. Use the provided components and layouts

### Component Development
- All components are in `apps/web/src/components/`
- Follow the existing patterns and structure
- Use TypeScript for type safety

## 🛠️ Technologies Used

- **Monorepo**: Turborepo
- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Charts**: ApexCharts
- **Icons**: Custom SVG icons
- **Forms**: React Hook Form
- **State Management**: React Context
- **Build Tool**: Next.js built-in

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support and questions:
- 📧 Email: support@tailadmin.com
- 📖 Documentation: [docs.tailadmin.com](https://docs.tailadmin.com)
- 🐛 Issues: [GitHub Issues](https://github.com/tindevelopers/tailadmin-turborepo/issues)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 Changelog

### Version 2.2.0
- ✅ Converted to Turborepo monorepo
- ✅ Updated to Next.js 15
- ✅ Enhanced TypeScript support
- ✅ Improved performance with build caching
- ✅ New shared packages structure
- ✅ Better mobile responsiveness

---

**Made with ❤️ by [TailAdmin](https://tailadmin.com)**