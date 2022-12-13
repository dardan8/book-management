# Book management system

Book management system with ReactJS, React Router, Context hook and Local Storage
by Dardan D.

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

We get the book state from the Context. If there are no books inside the array, a message to Add Books is rendered.
Otherwise, we map the books and render them.

#### 3. Book Component

Here the book card is created.
The book state and handleRemoveBook functions are received as state.
If Edit is clicked we go to the EditBook component. If delete is clicked, the handleRemoveBook function filters the book array and removes the id that matches. Then sets the new state with the filtered array.

#### 4. Add Book

Displays the BookForm component that is used to add the books.
It also has a handle submit function that adds the new book to the state.

#### 5. BookForm

Book Form component gets two props: book and handleSubmit
We declare a state that bookState that handles the state of the book in the form fields.
It contains the parameters name, author and price. It gets the initial value from the book object received as a prop.
If the book object exits, so it's received as a prop, it sets the bookState values to these values. If it's empty it leaves them empty.

renderInputField is the compontent that renders the input fields for the form. It accepts label, placeholder and name as parameters and
renders them accordingly. It also has the function handleChange, where it sets the bookState object to the values of the data being entered.

The BookForm component returns the form with the rendered input fields.
It uses the onSubmit function, which itself takes the handleSubmit function that was passed as a prop.
The function sets the id to the bookState object, the date and spreads the existing bookState values.
Then it sets the bookState state to empty values.

The handleOnSubmit function that comes from the AddBook component takes a book object as a parameter and sets the main books object state that comes from the BookContext. Finally it forces the user to navigate to the main page using the useNavigate() from react router.

#### 6. EditBook

EditBook is rendered in the /edit/:id path every time the Edit icon in clicked in the book component.
EditBook component displays the BookForm component again. But this time the book and handleSubmit props are different.
The book object is passed as the books that needs to be edited. bookToEdit object filters the books object from the BookContext and only keeps the book where the id matches the id objects that we get from the url via the useParams function of react router.

the handleOnSubmit function in this case filters the books object and removes the item that matches the id of the selected one.
Then the state of the books object is set to this filtered array, and the edited book is added on top.

## Book Context

Book Provider has the books state and setBooks function. It initially gets the values from the local storage, if the object exits there.
