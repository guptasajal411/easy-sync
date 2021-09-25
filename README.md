# 🔄 Easy-Sync!
Easy Sync is an application by which you can access your bookmarks/URL's/important texts from anywhere, anytime in the world! This is a full stack, CRUD application.
Try it out: https://try-easy-sync.herokuapp.com/

# 🥳 Features
- ✅ New users can register for Easy Sync
- ✅ Stores user's password with strong & modern, `bcrypt` hashing and salting.
- ✅ Allows users to login and logout
- ✅ Users can add new bookmarks/URL's to their account
- ✅ Users can see their old synced bookmarks
- ✅ One-click copy! Click on your old bookmark to copy to clipboard!
- ✅ Allows users to delete their bookmarks
- ✅ Users shouldn't be able to view other's bookmarks
- ✅ Creates a custom route for each user associated with their userID
- ✅ Doesn't allow to access bookmarks without signing in
- ✅ Doesn't allow to submit blank bookmarks
- ✅ Snazzy button animations! Try it out: https://try-easy-sync.herokuapp.com/

# 🎥 Demo

# 🧐 What's the stack?
- Frontend: Basic HTML, CSS & JavaScript. I have used jQuery for keeping the library simple and responsive.
- Backend: Node.js & Express.js for creating new routes, handling GET, POST & DELETE requests, and performing CRUD operations on databases.
- Database: I have used MongoDB Atlas for remote database, and Mongoose for modelling the application data.
- One schema & collection, each user has `username`, `password` & an array of bookmarks
- Deployed on Heroku! - https://try-easy-sync.herokuapp.com/
- 
# 📷 Screenshots
![image](https://user-images.githubusercontent.com/70312106/134774698-84af7522-4cd4-42ef-8c3b-1581a7b8fad4.png)
![image](https://user-images.githubusercontent.com/70312106/134774722-2849c2a4-7b65-41af-8bda-82e3699f4a04.png)
![image](https://user-images.githubusercontent.com/70312106/134774700-aea3cddb-0814-4288-9237-1da35aea73cf.png)
![image](https://user-images.githubusercontent.com/70312106/134774701-673c2b05-3e79-4ebf-a60e-db5ccc8e54c3.png)

# 🤔 How to use this?
- You can access all cool features of Easy Sync here: https://try-easy-sync.herokuapp.com/
- For running the app locally on your system, follow these steps: 
  -  Clone the project repository: `git clone https://github.com/guptasajal411/easy-sync.git`
  -  Move to the project directory: `cd easy-sync`
  -  Install dependencies for Bookshelfly with NPM: `npm install`
  -  Create a new `.env` file in the project folder for credentials to the MongoDB Atlas database, with variables: `MONGO_URI`, check [.env.example](https://github.com/guptasajal411/easy-sync/blob/main/.env.example)
  -  Run `npm start` to kickstart the application
  -  Go to `localhost:3000` to access Easy-Sync! 🥳
