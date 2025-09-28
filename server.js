const http = require("http");
const { MongoClient } = require("mongodb");
const app = require("./app");

const connectionString = "mongodb+srv://abdulmukhtor18_db:J0WjbMsUBsAjsf0k@cluster0.kyhaujq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// MongoDB ga ulanish
MongoClient.connect(connectionString)
  .then(client => {
    console.log("✅ MongoDB connected successfully");

    const server = http.createServer(app);
    const PORT = 3000;
    server.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch(err => {
    console.error("MongoDB connection error:", err);
  });
