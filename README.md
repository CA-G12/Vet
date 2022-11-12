# [Paws](https://vet.onrender.com/)🐾 
## **The Problem** :no_entry: 
- Pet owners struggle with finding a vet for their little friends, they can find their pet really sick and have no idea where to find a vet that can actually help them with their case or in a late time of the night.

## **The solution** :bulb: 
- We used our web development skills to make an online community that gathers the pet owners together with the vets to create a virtual community for them to communicate and connect, as well as for pet owners to connect directly with available doctors for instant consultation or book an appointment later in the doctor's own clinic.

## **User Stories**  :book: 
### User who owns the pets
- As a pet owner, I want to connect with a community of pet owners who share similar problems and interests to mine.
- As a pet owner, I want to be able to find emergency help via direct messages from a registered vet when I need it.
- As a pet owner, I want to be notified about the replies I'm recieving from my direct messages with the vets.
- As a pet owner, I want to be able to schedule an appointment with a vet to meet them in their clinic.

### User who is a veterinarian
- As a vet, I want to connect with a community of pet owners that can use my services and help.
- As a vet, I want to accept or decline appointments from patients and have it marked on a private calender.
- As a vet, I want to have access to direct chats with pet owners who need emergency help.
- As a vet, I want to recieve notifications when I'm connected to the website for the chats

## **User Journey** :world_map: 
 ### User who owns the pets
 - As a pet owner, I can see the landing page with a list of the services which this website offers.
 - As a pet owner, I can sign up for a new account or log into an existing account of mine.
 - As a pet owner, I can click on an emergency button to access a list of availabe doctors for a direct private chat.
 - As a pet owner, I can add posts to the public community page.
 - As a pet owner, I can view other users' posts and interact with them.
 - As a pet owner, I can navigate to a page with a list of doctors to book an appointment on their calendar.

### User who is a veterinarian
- As a vet, I can sign up a new account and attach my university degree to confirm that I'm a veterinarian.
- As a vet, I can log into my account and see a tab of a calender of my appointments of the month and a list of my posts on the community page.
- As a vet, I can view a list of appointment bookings on my calendar, thus accepting or declining them.

## **Prototype**

[View Prototype](https://www.figma.com/file/cmar5SGeAkMPqUGBZs7MVT/Untitled?node-id=0%3A1)
## **SQL Scheme**
![](https://i.imgur.com/qaGa4bJ.png)


## **How to Launch App Locally** :-

*  clone this repo by typing this command in the terminal:  
`git clone https://github.com/CA-G12/Vet`

*  Run `npm i` to install the packages for the app as well as the client side packages.



### Database Setup  :clipboard:

make sure you have installed PostgreSQL and pgcli - if you're working on linux

```sql=
CREATE DATABASE {database name};
CREATE USER {user name} WITH superuser password {password}
ALTER DATABASE {database name} OWNER TO {user name};
```
- Test DB:
- Do the same as before but make sure to change the names.

* Run the following command in terminal to build your database directly after adding it in your environment variables

`npm run buildDB`


### **Environment variables:**
Environment variables are one of the ways we keep our product safe. If you want to access our app locally you will need to add your own.
- create .env file
- add your Environment variables
```sh
DEV_DB_URL= # Your development PostgreSQL connect
DATABASE_URL= # Your production PostgreSQL connect
SECRET_TOKEN= # Your token Secret key
```
- add your client side Environment variable
```sh 
REACT_APP_BASE_URL=http://localhost:8080/api/v1/
```

### Start the App :electric_plug:

To start the App Locally you can start the server First then start client-side or vice versa!
> To run Server, In your terminal Type: 

`npm run dev` 
then you should be able to go to (http://localhost:8080/) 
> To run client-side, In your terminal Type:    

`cd client` => `npm start` 
    then you will be able to run (http://localhost:3000/) 

Now you can view the app live in the Browser!

## **Technologies** :computer: :-

- BackEnd: **Node JS & Express JS**
- FrontEnd: **React JS**
- Middlewares: **Axios**
- Database: **PostgreSQL**
- ORM library: **Sequalize**
- Libraries: **Material UI**
- Cloud Storage, Chat and Notifications: **Firebase**

## **Lead Mentors** :sunglasses:

- [Imad Shatali](https://github.com/Amoodaa)
- [Abdullah Abu Amra](https://github.com/aaamra)

## **Team Members** 

- [Aseel Abu Sahmoud](https://github.com/AseelL)
- [Mohammed Al-Shurafa](https://github.com/mohmmed23)
- [Said Madi](https://github.com/Saeed99Madi)
- [Salsabeel Omar](https://github.com/salsabeelomar)

## **Resources** 

- [Node Js](https://nodejs.org/en/)
- [React Js](https://reactjs.org/)
- [Express](http://expressjs.com/)
- [Material UI](https://mui.com/)
- [Firebase](https://firebase.google.com/)

