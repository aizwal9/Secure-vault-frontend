# Secure File Hub

A React-based file management system for uploading, listing, downloading, and deleting files. Built with TypeScript, Tailwind CSS, and React Query.

![](https://github.com/aizwal9/Secure-vault-frontend/blob/main/image.png?raw=true)

## Features

- Upload files (up to 10MB)
- List uploaded files with pagination and search
- Download files
- Delete files
- Responsive UI with Tailwind CSS
- API integration via Axios and Fetch


## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm

### Installation

1. Clone the repository:

   ```sh
   git clone <repo-url>
   cd frontend
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Start the development server:

   ```sh
   npm start
   ```

   The app will run at [http://localhost:3000](http://localhost:3000).

### Build for Production

```sh
npm run build
```

### Docker

To build and run with Docker:

```sh
docker build -t file-hub-frontend .
docker run -p 3000:3000 file-hub-frontend
```

## Configuration

- API endpoint is set via `REACT_APP_API_URL` environment variable. Defaults to `http://localhost:8000/api`.

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- React Query
- Axios
