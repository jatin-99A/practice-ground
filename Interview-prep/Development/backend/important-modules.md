# Node.js Backend Modules Roadmap

## 1. Built-in (Core) Modules

> Node.js ke andar already hote hain, install nahi karne padte.

```js
fs          // file system handle
path        // file/folder paths
http        // server create
events      // event handling
stream      // large data chunks handling
os          // operating system info
crypto      // hashing/encryption
process     // current node process
```

---

# 2. Main Backend Packages

## Express

Server & APIs banane ke liye

```bash
npm i express
npm i -D @types/express
```

---

## Environment Variables

### dotenv

`.env` file use karne ke liye

```bash
npm i dotenv
```

---

## Database ORMs / ODMs

## Mongoose (MongoDB)

```bash
npm i mongoose
```

---

## Prisma

```bash
npm i prisma @prisma/client
npx prisma init
```

---

## Drizzle ORM

```bash
npm i drizzle-orm
```

### PostgreSQL Driver

```bash
npm i pg
npm i -D @types/pg
```

---

# 3. Authentication & Security

## JWT (Login Tokens)

```bash
npm i jsonwebtoken
npm i -D @types/jsonwebtoken
```

---

## Password Hashing

### bcrypt

```bash
npm i bcrypt
npm i -D @types/bcrypt
```

---

## CORS

```bash
npm i cors
npm i -D @types/cors
```

---

## Cookie Parser

```bash
npm i cookie-parser
npm i -D @types/cookie-parser
```

---

# 4. File Uploads

## multer

```bash
npm i multer
npm i -D @types/multer
```

---

# 5. Validation

## express-validator

```bash
npm i express-validator
```

---

# 6. Real-time Communication

## socket.io

```bash
npm i socket.io
```

---

# 7. API Requests

## axios

```bash
npm i axios
```

---

# 8. Emails

## nodemailer

```bash
npm i nodemailer
npm i -D @types/nodemailer
```

---

# 9. Development Tools

## nodemon

```bash
npm i -D nodemon
```

---

# 10. TypeScript Essentials

## TypeScript

```bash
npm i -D typescript ts-node
```

---

## Node Types

```bash
npm i -D @types/node
```

---

# 11. Important Concepts

```txt
async-await   -> async code handle
streams       -> large data chunks
events        -> actions/listeners
middlewares   -> request ke beech ka logic
REST APIs     -> backend endpoints
MVC Pattern   -> clean folder structure
JWT Auth      -> authentication system
```

---

# 12. Recommended Learning Order

```txt
1. Express
2. REST APIs
3. Middleware
4. MongoDB + Mongoose
5. Authentication (JWT + bcrypt)
6. File Upload (multer)
7. Validation
8. Socket.io
9. Prisma / Drizzle
10. Streams/buffer & Events
```
