# How to use this project:

1: Start a mongo server.
  1.1: In one terminal, run: `mongodb`.
  1.2: In a different terminal, run `mongo`.
2: In a third terminal, cd to the "project9" folder.
  2.1: Run `npm install`.
  2.2: Run `node server`.
3: Open up a web browser and navigate to "localhost:3000".
  3.1: Click the "Add User" button.
  3.2: Fill out the form and click the "Submit" button.
4: In the terminal that you ran the "mongo" command, do the following:
  4.1: Run `show dbs` - there should be a database called: "userManager".
  4.2: Run `use userManager`.
  4.3: Run `db.usercollections.insert({"firstName":"Brittany","lastName":"Taylor","emailAddress":"brittanytaylor@brainclip.com","address":"265 Goodwin Place, Itmann, North Carolina, 62265","age":39}{"firstName":"Bradley","lastName":"Cline","emailAddress":"bradleycline@brainclip.com","address":"358 Windsor Place, Sedley, Georgia, 90192","age":20}{"firstName":"Leah","lastName":"Travis","emailAddress":"leahtravis@brainclip.com","address":"200 Hyman Court, Thynedale, Puerto Rico, 43470","age":38}{"firstName":"Clay","lastName":"Cherry","emailAddress":"claycherry@brainclip.com","address":"469 Eaton Court, Cherokee, Oregon, 65854","age":29}{"firstName":"Huber","lastName":"Harper","emailAddress":"huberharper@brainclip.com","address":"780 Gunther Place, Homestead, Colorado, 77243","age":30}{"firstName":"Ella","lastName":"Winters","emailAddress":"ellawinters@brainclip.com","address":"149 Caton Place, Salunga, Utah, 43033","age":32}{"firstName":"Leta","lastName":"Copeland","emailAddress":"letacopeland@brainclip.com","address":"910 Boardwalk , Nicut, Nebraska, 48158","age":39}{"firstName":"Curry","lastName":"Melendez","emailAddress":"currymelendez@brainclip.com","address":"414 Irwin Street, Alafaya, Nevada, 21525","age":26}{"firstName":"Wyatt","lastName":"Forbes","emailAddress":"wyattforbes@brainclip.com","address":"329 Richardson Street, Kingstowne, Virginia, 27368","age":24}{"firstName":"Kara","lastName":"Hawkins","emailAddress":"karahawkins@brainclip.com","address":"798 Stone Avenue, Rodman, South Carolina, 85903","age":22});`. This will insert 10 users into the database.
  4.4: Run `db.usercollections.createIndex({firstName: "text", lastName: "text", emailAddress: "text", address: "text", age: "text"});` This will make sure that the search bar works.
5. Use the application as needed! Enjoy!
