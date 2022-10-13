---
name: Backend Feature
about: this template for a new route (endpoint) in backend
title: "[Route]"
labels: Backend, Route
assignees: AseelL, mohmmed23, Saeed99Madi, salsabeelomar

---

# Title Here
 
 **labels**: `backend`, `route`

 **endpoint**: METHOD /endpoint-url   eg. `POST /users`

 **Description**
    what route should do

 **Protected**: Yes/No  

 **Required Middlewares**: if exist  

---
**Response**:
Response may be success or error :

Error :
```js
    {
        status:400,
        message:'Bad reqeust'
    }
```
Success
   ```js
    {
        status:200,
        data: [...please fill sample of data] , 
    }
```
---

 **Request body**:

    {
      x: "Y"
    }

 **Validation**

    {
      x: string.min(19)
    }

---

**Tests**: test all potential cases for the route itself.
