# Student Management System API

This repository contains the backend API for a Student Management System built with TypeScript and Node.js using the Express framework.

## Aim

The aim of this project is to create a basic student management system API with features for both the admin panel and student interface.

## Required Features

1. **Endpoints for Admin and Student:**
   - The API should provide endpoints for both the Admin panel and the Student interface.

2. **Admin Panel:**
   - Admin authentication to log in.
   - Ability for the admin to add students with their name, email ID, department, and password.
   - Assignment of tasks to students with due times.

3. **Student Interface:**
   - Student authentication using email ID and password.
   - View tasks assigned to them.
   - Check the status of each task (pending, overdue, completed).
   - Option to change task status to completed.

## Additional Details

- Admin panel should be accessible only by the admin.
- Students log in using their email ID and password.
- Predefined credentials for admin: Email - [admin@admin.com](mailto:admin@admin.com), Password - admin.
- Admins log in using their email ID and password.

## Instructions

1. **Authentication:**
   - Do not use session cookies for authentication.
   - Requests and responses should be in JSON format.

2. **Documentation:**
   - Provide proper API documentation.
   - Publish API documentation in Postman and share the URL.

3. **Environment Variables:**
   - Include a .env file with necessary variables and values.

4. **Sample Examples:**
   - Include sample examples in the API documentation.

5. **Database:**
   - Use MongoDB Atlas as the database.

6. **Technology Stack:**
   - TypeScript is the preferred language.

## Contact

For any queries or assistance, feel free to reach out to us at [hr@tghtech.com](mailto:hr@tghtech.com).

---

### Valid URLs:

1. API URL: [https://student-management-system-irkouww16-aashutosh-922.vercel.app/](https://student-management-system-irkouww16-aashutosh-922.vercel.app/)

### Postman Documentation:

2. Postman API Documentation: [Postman API Documentation](https://your-postman-docs-url.com)

### Environment Variables:

3. Sample .env File:
   ```
   MONGODB_URI=your_mongodb_uri
   PORT=your_port_number
   ADMIN_EMAIL=admin@admin.com
   ADMIN_PASSWORD=admin
   ```

### Sample API Request:

4. Sample API Request:
   ```json
   POST /admin/login
   {
     "email": "student@email.com",
     "password": "student123"
   }
   ```

### MongoDB Atlas:

5. MongoDB Atlas: [https://www.mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)

### Technology Stack:

6. TypeScript: [https://www.typescriptlang.org/](https://www.typescriptlang.org/)

---
