# Quick_T - Transport Management System

🚚 A comprehensive fullstack transport management system built with React, TypeScript, Node.js, and MongoDB.

## 🌟 Features

- **Transport Management**: Track vehicles, routes, and maintenance
- **Trip Planning**: Schedule and monitor transport trips
- **User Management**: Role-based access control (Admin, Manager, Driver, Customer)
- **Real-time Tracking**: Monitor vehicle locations and trip progress
- **Route Optimization**: Plan efficient transport routes
- **Maintenance Scheduling**: Keep track of vehicle maintenance
- **Responsive Design**: Works on desktop and mobile devices

## 🏗️ Architecture

```plaintext
Quick_T/
├── client/          # React TypeScript frontend
├── server/          # Node.js Express backend
├── docs/           # Documentation
├── scripts/        # Build and deployment scripts
```

## 🛠️ Tech Stack

### Frontend

- **React 18** with TypeScript
- **Vite** for fast development and building
- **React Router** for navigation
- **Tailwind CSS** for styling
- **React Hook Form** for form handling
- **Axios** for API calls

### Backend

- **Node.js** with Express.js
- **TypeScript** for type safety
- **MongoDB** with Mongoose ODM
- **JWT** for authentication
- **Express Rate Limit** for API protection

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm
- MongoDB
- Git

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Igna73M/Quick_T.git
   cd Quick_T
   ```

2. **Run setup script**

   ```bash
   chmod +x scripts/setup.sh
   ./scripts/setup.sh
   ```

3. **Configure environment**

   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

4. **Start development servers**

   ```bash
   npm run dev
   ```

   This will start:

   - Client on <http://localhost:3000>
   - Server on <http://localhost:5000>

## 📜 Available Scripts

### Root Level

- `npm run dev` - Start both client and server in development
- `npm run build` - Build both client and server
- `npm run test` - Run all tests
- `npm run lint` - Lint all code
- `npm run install:all` - Install dependencies for all packages

### Client

- `npm run client:dev` - Start client development server
- `npm run client:build` - Build client for production
- `npm run client:test` - Run client tests

### Server

- `npm run server:dev` - Start server in development mode
- `npm run server:build` - Build server for production
- `npm run server:start` - Start production server

## 🗄️ Database Schema

### Users

- Roles: Admin, Manager, Driver, Customer
- Authentication with JWT
- Profile management

### Transports

- Vehicle information and specifications
- Status tracking (Active, Maintenance, etc.)
- Driver assignments

### Routes

- Origin and destination points
- Waypoints and route optimization
- Distance and duration calculations

### Trips

- Scheduled and actual departure/arrival times
- Trip status tracking
- Passenger information

## 🔐 Authentication

The system uses JWT-based authentication with the following endpoints:

- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/me` - Get current user
- `POST /api/auth/logout` - User logout

## 📚 API Documentation

See [API Documentation](docs/api.md) for detailed endpoint information.

## 🧪 Testing

```bash
# Run all tests
npm test

# Run client tests
npm run client:test

# Run server tests
npm run server:test

# Run tests in watch mode
npm run test:watch
```

## 🚢 Deployment

### Production Build

```bash
# Build all packages
npm run build

# Start production server
npm start
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

>
>### Igna73M
>
>- GitHub: [@Igna73M](https://github.com/Igna73M)
>
>### Epiphanie123
>
>- GitHub: [@Epiphanie123](https://github.com/Epiphanie123)
>
>### Julie-03
>
>- GitHub: [@Julie-03](https://github.com/Julie-03)
>
>### Rayhab4
>
>- GitHub: [@Rayhab4](https://github.com/Rayhab4)
>
>### venuste-niyodusaba
>
>- GitHub: [@venuste-niyodusaba](https://github.com/venuste-niyodusaba)
>

## 📞 Support

For support, please open an issue on GitHub or contact <support@quick-t.com>.

---

Built with ❤️ for efficient transport management
