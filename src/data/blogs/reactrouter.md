
# React Router


When defining the path pararm, you can add a colon to add a dynamic parameter which you can later find with ```useParams```

```
<Route path='/books/:id' element={Book}>
<Link path="/books/1>
<Link path="/books/2>
<Link path="/books/3>

const {id} = useParams()
```

A sidebar is the navigation bar that follows with your scrolling.