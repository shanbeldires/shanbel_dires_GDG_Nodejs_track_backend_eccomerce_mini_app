

# **Mini Project Documentation: E-commerce Backend**

**Deadline:** February 6, 2026
**Project Type:** Backend API
**Technology Stack:** Node.js, Express.js, MongoDB (Atlas), Mongoose

---

## **1. Project Overview**

This project is a **simple E-commerce backend API** that allows users to:

* View available products
* Add products to a cart
* Place orders

The goal is to demonstrate understanding of **Node.js, Express, REST API principles, CRUD operations, and MongoDB integration using Mongoose**.

The project structure follows **MVC (Model-View-Controller)**, separating models, controllers, and routes for maintainable code.

---

## **2. Learning Objectives**

By completing this project, you should be able to:

1. Apply **REST API design** and **CRUD operations**.
2. Connect **Express.js** to **MongoDB Atlas** and manage data using **Mongoose models**.
3. Implement **input validation** and **error handling**.
4. Test endpoints using **Postman** and document responses.

---

## **3. Folder Structure**

```
ecommerce-mini-project/
│
├─ config/
│   └─ mongodb.js          # MongoDB connection
│
├─ controllers/
│   ├─ productsController.js
│   ├─ cartController.js
│   └─ ordersController.js
│
├─ models/
│   ├─ productsModel.js
│   ├─ cartModel.js
│   └─ ordersModel.js
│
├─ routes/
│   ├─ productsRoute.js
│   ├─ cartRoute.js
│   └─ ordersRoute.js
│
├─ validation/
│   └─ productValidation.js
│
├─ errorHandler/
│   └─ errorHandler.js
│
├─ app.js                 # Express app
├─ server.js              # Server start
├─ package.json
└─ .env                   # Environment variables
```

---

## **4. Database Models**

### **4.1 Product Model**

* **Fields:**

  * `name` (String, required)
  * `description` (String, required)
  * `price` (Number, required, min 0)
  * `stock` (Number, required, min 0)
  * `category` (String, required)
  * `image` (String, required)
  * `timestamps` (createdAt, updatedAt)

* **Validation:** Price must be positive, stock non-negative.

---

### **4.2 Cart Model**

* **Fields:**

  * `item` (ObjectId, ref `product`, required)
  * `quantity` (Number, required, min 1)
  * `ordered` (Boolean, default false)
  * `timestamps` (createdAt, updatedAt)

* **Behavior:** Only items with `ordered: false` are active in the cart.

---

### **4.3 Order Model**

* **Fields:**

  * `items`: Array of

    * `product` (ObjectId, ref `product`)
    * `quantity` (Number)
  * `totalAmount` (Number)
  * `customerName` (String)
  * `customerAddress` (String)
  * `date` (Date, default now)
  * `timestamps` (createdAt, updatedAt)

---

## **5. API Endpoints**

### **5.1 Products**

| Method | Endpoint      | Description               | Request Body                                           |
| ------ | ------------- | ------------------------- | ------------------------------------------------------ |
| GET    | /products     | List all products         | None                                                   |
| GET    | /products/:id | Get product details by ID | None                                                   |
| POST   | /products     | Create a new product      | `{ name, description, price, stock, category, image }` |
| PUT    | /products/:id | Update product details    | `{ name, description, price, stock, category, image }` |
| DELETE | /products/:id | Delete a product          | None                                                   |

* **Filters:** `?category=`, `?minPrice=`, `?maxPrice=`

---

### **5.2 Cart**

| Method | Endpoint  | Description                    | Request Body                    |
| ------ | --------- | ------------------------------ | ------------------------------- |
| GET    | /cart     | Get all cart items             | None                            |
| POST   | /cart     | Add item to cart               | `{ item: productId, quantity }` |
| PUT    | /cart     | Update quantity of a cart item | `{ id: cartId, quantity }`      |
| DELETE | /cart/:id | Remove item from cart          | None                            |

* Only items with `ordered: false` are shown.

---

### **5.3 Orders**

| Method | Endpoint    | Description                     | Request Body                        |
| ------ | ----------- | ------------------------------- | ----------------------------------- |
| GET    | /orders     | List all orders                 | None                                |
| GET    | /orders/:id | Get details of a specific order | None                                |
| POST   | /orders     | Create an order from cart       | `{ customerName, customerAddress }` |

* **Behavior:**

  * Validates stock for each product.
  * Reduces product stock.
  * Clears cart after successful order.

---

## **6. Validation & Error Handling**

* **Products:**

  * Name is required
  * Price must be positive
  * Stock must be non-negative
* **Cart:**

  * Product must exist
  * Quantity must not exceed stock
* **Orders:**

  * Cart cannot be empty
  * Stock validation for each item
* **HTTP Status Codes:**

  * `200 OK` — successful GET/PUT/DELETE
  * `201 Created` — successful POST
  * `400 Bad Request` — validation errors
  * `404 Not Found` — missing resource
  * `500 Internal Server Error` — server issues

---

## **7. Testing & Documentation**

* **Postman Collection:**

  * Test all endpoints with sample requests and responses.
  * Include filters on `/products` and stock checks on `/cart` and `/orders`.

* **Example Request (Add to Cart):**

```json
POST /cart
{
  "item": "64de87cfa2b4e123456789cd",
  "quantity": 3
}
```

* **Example Response:**

```json
{
  "_id": "698f65effbecec3da4c6cd61",
  "item": "64de87cfa2b4e123456789cd",
  "quantity": 3,
  "ordered": false,
  "createdAt": "2026-02-13T17:57:03.320Z",
  "updatedAt": "2026-02-13T17:57:03.320Z"
}
```

---

## **8. Success Criteria**

1. All required endpoints function correctly.
2. Data persists in MongoDB Atlas.
3. Application runs without crashes and handles errors gracefully.
4. Input validation prevents invalid data.
5. Folder structure is clean and organized (MVC).
6. Endpoints are tested and documented in Postman.

---

## **9. Evaluation Metrics**

| Metric                      | Description                                        |
| --------------------------- | -------------------------------------------------- |
| Completeness                | All endpoints implemented                          |
| Logic Correctness           | Cart, stock checks, and order creation work        |
| Folder Structure            | Clear and organized                                |
| MongoDB Integration         | Models and queries functional                      |
| Validation & Error Handling | Proper validation and meaningful HTTP responses    |
| Code Quality                | Clean, readable, consistent naming                 |
| Testing & Documentation     | Postman collection with example requests/responses |

---

✅ **Project meets all requirements if all endpoints work, validations are in place, and Postman tests pass.**

---

I can also make a **ready-to-use Postman documentation JSON** with **all endpoints, sample requests, and responses** for your submission.

Do you want me to do that next?
