# Book management system

Book management system with ReactJS, React Router, Context hook and Local Storage

## How it works?

You can navigate to 2 pages: _View Books_ and _Add New Book_
On View Books you will see all the listed books.
On Add New Book there is a form displayed where all the data is entered and then saved

### Components explained

#### 1. Header

The header component has the header (with titles) and the naviagtion buttons to View Book and Add New Book.
The navigation items are rendered from mapping NavLink items.
Navlink is a special type of Router Link item that knows if it's active or not.
If it's active active class is added which is then used to style the element

#### 2. Book List
