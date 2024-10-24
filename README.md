
# EcoPro - Fertilizer Marketplace

## 📝 Project Overview
**EcoPro** is a dynamic marketplace where farmers can sell organic fertilizers to a broad audience, promoting sustainable agriculture practices. In addition to the marketplace, EcoPro provides a pest and disease detection system for plants, enabling users to identify potential issues based on images they upload. The platform also features a community section, allowing users to share and read articles related to agriculture, sustainability, and organic farming.

## 🌟 Features
### 1. Fertilizer Marketplace
- Farmers can list and sell organic fertilizers.
- Buyers can browse through listings and purchase fertilizers suited to their needs.

### 2. Pest and Disease Detection System
- Users can upload images of plants to detect potential diseases or pests.
- The system predicts the disease or pest based on the image data.
- **Validation**: Uploaded images are processed and tagged to ensure they are related to crops or plants, preventing unrelated images from being submitted.

### 3. Community Section
- Users can post articles about farming practices, pest control, organic fertilizers, and more.
- All users can read and engage with the articles.

## 🛠️ Technology Stack
### Frontend
- **React.js** with **Vite** for fast build times and efficient development.
- **React-Redux** for global state management across the application.

### Backend
- **Node.js** with **Express.js** for server-side logic.
- **MongoDB** as the NoSQL database.

### Security
- **JWT (JSON Web Tokens)** for user authentication and session management.
- **Crypto** and **bcrypt** for secure password hashing and encryption.

## 🚀 Installation

### Prerequisites
- Node.js and npm installed
- MongoDB instance running

### Steps to Install
1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/ecopro.git
   cd ecopro
   ```

2. **Install Backend Dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Install Frontend Dependencies**
   ```bash
   cd ../frontend
   npm install
   ```

4. **Run the Application**
   - **Backend**:
     ```bash
     cd backend
     npm start
     ```
   - **Frontend**:
     ```bash
     cd ../frontend
     npm run dev
     ```

## 💡 Usage
- **Marketplace**: Navigate to the marketplace to view and purchase fertilizers.
- **Pest and Disease Detection**: Upload an image of your plant to get disease or pest predictions.
- **Community Section**: Read or post articles in the community forum.

## 🤝 Contributing
We welcome contributions! If you'd like to improve the project, feel free to fork the repository and submit a pull request.

## 📜 License
This project is licensed under the MIT License.
