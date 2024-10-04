¡Gracias por la información detallada! A continuación te presento el contenido actualizado del archivo `README.md` de acuerdo con tus indicaciones:

---

# DSW - ALEXANDRIAN ALEPH - Book Log API

Alexandrian Aleph is an innovative API designed for book lovers to effortlessly track their reading. Users can register the books they are currently reading and record the date they started and finished each book.

## Getting Started

These instructions will guide you through the process of setting up the project locally.

### Prerequisites

Make sure you have the following dependencies installed:

- Node.js (latest version): [https://nodejs.org/en/](https://nodejs.org/en/)
- MySQL2 (latest version): [https://dev.mysql.com/downloads/installer/](https://dev.mysql.com/downloads/installer/)

### Installing

To set up the project locally, follow these steps:

1. Install **Node.js** from [here](https://nodejs.org/en/) and **MySQL2** from [here](https://dev.mysql.com/downloads/installer/).
   
2. Clone the repository to your local machine using Git:

   ```bash
   git clone https://github.com/MiguelGC97/DSW2_Bookstore
   ```

3. Navigate to the root directory of the project and install the necessary dependencies:

   ```bash
   npm install express mySql2 sequelize cors
   ```

4. Install the **Ionic CLI** globally to run the frontend:

   ```bash
   npm install -g @ionic/cli
   ```

### Running the Application

To run the API locally, follow these steps:

1. Navigate to the backend directory and start the backend server:

   ```bash
   cd backend/
   node index.js
   ```

2. Navigate to the frontend directory and run the frontend:

   ```bash
   cd frontend/
   ionic serve
   ```

After running these commands, the API and the frontend should be up and running.

### Testing the API with Postman

To test the API endpoints using Postman, please refer to the documentation at:

[Postman Documentation](https://documenter.getpostman.com/view/38432288/2sAXxMfD5G)

## Built With

- **Node.js** - JavaScript runtime for backend development
- **Express** - Web framework for Node.js
- **Sequelize** - ORM for MySQL
- **MySQL2** - Database management
- **Ionic** - Framework for building mobile and web apps
- **Angular** - Frontend framework

## Author

- **Miguel Ángel Gutiérrez Carreño**

## License

This project is licensed under the MIT License - see the LICENSE.md file for details

