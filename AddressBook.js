class AddressBook
{
   //constructor
   constructor(...params) 
   {
      this.firstName = params[0];
      this.lastName = params[1];
      this.address = params[2];
      this.city = params[3];
      this.state = params[4];
      this.zip = params[5];
      this.phoneNumber = params[6];
      this.email = params[7];
   }

   // get and set for firstname 
   //first letter should be capital and min 3 letters
   get firstName() 
   {
        return this._firstName; 
   }
   set firstName(firstName) 
   {
     let nameRegex = RegExp("^[A-Z]{1}[A-Za-z]{2,}$");
     // test returns a boolen value
     if (nameRegex.test(firstName))
       this._firstName = firstName;
     else
       throw "Invalid First Name";
   }

   //get and set for lastname
   //first letter should be capital and min 3 letters
   get lastName() 
   {
        return this._lastName; 
   }
   set lastName(lastName) 
   {
     let nameRegex = RegExp("^[A-Z]{1}[A-Za-z]{2,}$");
     // test returns a boolen value
     if (nameRegex.test(lastName))
       this._lastName = lastName;
     else
       throw "Invalid  Last Name";
   }

   //get and set for address
   //minimum four characters
   get address() 
   {
        return this._address; 
   }
   set address(address)
   {
     let addressRegex = RegExp("^[A-Za-z]{4,}$");
     if (addressRegex.test(address))
       this._address = address;
     else
       throw "Invalid Address ";
   }

   //get and set for city
   //minimum four characters
   get city() 
   {
        return this._city; 
   }
   set city(city) 
   {
     let cityRegex = RegExp("^[A-Za-z]{4,}$");
     if (cityRegex.test(city))
       this._city = city;
     else
       throw "Invalid City ";
   }

   //get and set for state
   //minimum four characters
   get state() 
   {
        return this._state; 
   }
   set state(state) 
   {
     let stateRegex = RegExp("^[A-Za-z]{4,}$");
     if (stateRegex.test(state))
       this._state = state;
     else
       throw "Invalid State";
   }

   //get and set for zip
   //pin code of form 789 987
   get zip() 
   {
        return this._zip; 
   }
   set zip(zip) 
   {
     let zipRegex = RegExp("^[5-8]{1}[0-9]{5}$");
     if (zipRegex.test(zip))
       this._zip = zip;
     else
       throw "Invalid Zip ";
   }

   //get and set for phoneNumber
  //phone number should be of form 91 8149240833
   get phoneNumber() 
   {
      return this._phoneNumber; 
   }
   set phoneNumber(phoneNumber) 
   {
     let phoneRegex = RegExp("^[6-9]{1}[0-9]{9}$");
     if (phoneRegex.test(phoneNumber))
       this._phoneNumber = phoneNumber;
     else
       throw "Invalid Phone Number";
   }

   // get and set for email
   //ac.xyz@gmail.com.in .xyz-optional  .in-optional
   get email() 
   {
      return this._email; 
   }
   set email(email) 
   {
     let emailRegex = RegExp("^([a-z0-9A-Z])+([.]?[a-z0-9A-Z]+)*[@]{1}[a-z0-9A-Z]+[.]{1}[a-zA-Z]{2,}([.]{1}[a-z]{2,})?$");
     if (emailRegex.test(email))
       this._email = email;
     else
       throw "Invalid Email";
   }

   //defining to string method
   toString() 
   {
    return "First Name: " + this.firstName + "\nLast Name: " + this.lastName
    + "\nAddress: " + this.address
    + "\nCity: " + this.city + "\nState: "
    + this.state + "\nZip: " + this.zip
    + "\nPhone Number: " + this.phoneNumber + "\nEmail: " + this.email + "\n";
   }
}

try 
{
      let ContactsArray = new Array();
      ContactsArray.push
      (
        new AddressBook
        (
            "Lokesh", "Sai", "ClockTower", "Oongole", "AndhraPradesh", "505534", "6747384608", "lokesh000@gmail.com"
        )
      );
      ContactsArray.push
      (
        new AddressBook
        (
          "Rakesh", "Guptha", "KrishnaPark", "Tirupathi", "AndhraPradesh", "555534", "7387598583", "rkguptha@gmail.com"
        )
      );
      ContactsArray.push
      (
        new AddressBook
        (
            "Mohan", "Kumar", "MainStreet", "Hyderabad", "Telangana", "500534", "9874982708", "mohan@gmail.com"
        )
      );
      ContactsArray.push
      (
        new AddressBook
        (
          "Durga", "Bhavani", "BusStandRoad", "Warangal", "Telangana", "504534", "8838375333", "db1777@gmail.com"
        )
      );

      // Printing Contacts before updating
      ContactsArray.forEach((contactBook) => console.log(contactBook.toString()));
      
      //finding contact using name
      var readline = require("readline-sync");
      let name = readline.question("Enter the contact name to be edited : ");
      let check = ContactsArray.findIndex((contactBook) => contactBook.firstName == name);

      //updating the contact detail
      let choice = readline.question("Choose the field you want to edit : \n 1. First name \n 2. Last name \n 3. Address \n 4. City \n 5. State \n 6. Zip code \n 7. Phone Number \n 8. Email \n");
      switch(choice)
      {
          case "1":
              let first = readline.question("Enter you want to edit : ");
              ContactsArray[check].firstName = first;
              break;
          case "2":
              let last = readline.question("Enter you want to edit : ");
              ContactsArray[check].lastName = last;
              break;
          case "3":
              let add = readline.question("Enter you want to edit : ");
              ContactsArray[check].address = add;
              break;
          case "4":
              let cit = readline.question("Enter you want to edit : ");
              ContactsArray[check].city = cit;
              break;
          case "5":
              let stat = readline.question("Enter you want to edit : ");
              ContactsArray[check].state = stat;
              break;
          case "6":
              let pin = readline.question("Enter you want to edit : ");
              ContactsArray[check].zip = pin;
              break;
          case "7":
              let phone = readline.question("Enter you want to edit : ");
              ContactsArray[check].phoneNumber = phone;
              break;
          case "8":
              let em = readline.question("Enter you want to edit : ");
              ContactsArray[check].email = em;
              break;
          default:
              flag = false;
              break;
      }

      //displaying contacts after being updated
      console.log("--------After Updating, The Contacts are--------------");
      ContactsArray.forEach((contactBook) => console.log(contactBook.toString()));
} 
catch (e) 
{
  console.log(e);
}