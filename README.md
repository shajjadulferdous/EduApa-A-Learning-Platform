# EduApa - Online Learning Platform

## Project Overview

EduApa is a modern online learning platform where users can explore courses, watch lessons, and enroll in skill-based programs like Web Development, Design, Marketing, and more.

It focuses on a clean UI, smooth user experience, and secure authentication.

## Live URL

https://edu-apa-a-learning-platform-sthv.vercel.app

## Features

### Authentication

- Email and password login/register
- Google social login
- Protected routes for course details pages
- Redirect after login

### Courses

- All courses page using fake JSON data
- Search functionality by title
- Protected course details page
- Static curriculum display

### User Features

- My Profile page
- Update user name and photo
- Persistent login session

### UI/UX

- Fully responsive for mobile, tablet, and desktop
- Unique modern design
- Smooth hover and animation effects
- Loading spinner while fetching data
- Toast notifications for success and error states

## Tech Stack

- Framework: Next.js (App Router)
- Styling: Tailwind CSS + DaisyUI
- Authentication: BetterAuth
- Database: MongoDB
- Deployment: Vercel and Render
- State Management: React Hooks

## Environment Variables

Create a .env.local file in the root directory and add:

```env
BETTER_AUTH_SECRET=your_auth_secret
BETTER_AUTH_URL=your_auth_url
MONGO_URI=your_mongo_url
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_secret
```

## NPM Packages Used

- next
- react
- tailwindcss
- daisyui
- better-auth
- react-icons
- react-toastify
- react-hook-form
- mongodb
- mongodb-adapter

## Installation & Setup

```bash
# Clone the project
git clone https://github.com/shajjadulferdous/EduApa-A-Learning-Platform

# Go to project directory
cd EduApa-A-Learning-Platform

# Install dependencies
npm install

# Run development server
npm run dev
```
