
# Multi-step form

This project aims to create a multistep form. Guides users through various data entry steps. Inspired by an advanced level challenge found on the Frontend Mentor website.


## Technologies

The technologies used in this project were :
- Angular
- TypeScript
- Html 5
- Css 3
## Funcionalidades

### First page

On the first page the user enters their username, email and telephone number. This data is stored in local storage in case the user wishes to return to the first screen and change the data!



#### Business rules :

- username cannot be longer than 15 and less than 5 characters

- email: it must be a valid email

- phone number: cannot have letters and must contain 11 numbers.



### Second page

User chooses the plan that interests them most and can change between the monthly or annual price

#### Business rules :

- user must choose at least one plan

The plan is stored in local storage
### Third page

User receives options for extras to add to their plan

The extras are stored in localstorage

### Fourth page

A review of user choices. The user can change their plan choices by pressing the "change" button

When confirming your choices, the data is deleted.

Note: application does not have a back-end


## Running the project

Clone the project to your computer
```bash
  git clone https://github.com/marleypm16/form-angular.git
```

Enter the project directory
```bash
  cd my-project
```

Install dependencies
```bash
  npm install
```

Start server
```bash
  npm start
```
