#Authentication App

## Quick Setup

Install packages 
```
npm install
```

## Runing the App
```
npm run start:dev
```

## Endpoints
```
http://localhost:9000/api/auth/register
http://localhost:9000/api/auth/login
http://localhost:9000/api/user/me
http://localhost:9000/api/auth/logout
```

### User Register Endpoint
```
http://localhost:9000/api/auth/register

**Payload**

{
    "firstName": "John", 
    "lastName": "Doe",
    "email": "john@mail.lk", 
    "password": "!Berr1@123123", 
    "rePassword": "!Berr1@123123"
}

validation rules.

1. firstName, email, password and rePassword are required fields.
2. email should be a vaild email
3. password and rePassword should be matched.
```

### User Login Endpoint
```
http://localhost:9000/api/auth/login

**payload**

{
    "email": "john@mail.lk",
    "password": "!Berr1@123123"
}

```

### User information EndPoint
```
http://localhost:9000/api/user/me

Authentication token should attached as a bearer token in header to access this endpoint
```