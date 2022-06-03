import Book from "./Book";
import LoadingMask from "./LoadingMask";
import React, { useState, useEffect } from "react";
import Button from '@mui/material/Button';
// import TextField from '@mui/material/Button';


function App() {

  const [loading, setLoading] = useState(false)
  const [books, setBooks] = useState([])
  const [input, setInput] = useState("")
  const [sort, setSort] = useState("desc")

  async function fetchBooks(){

    const response = await fetch("https://www.testdomain.com/v1/api/books")
    const responseJSON = await response.json()

    console.log(responseJSON);

    setBooks(responseJSON)
    setLoading(false)
  }
  
  useEffect(() => {
    setLoading(true)
    fetchBooks()
  }, [])

  function sortBooks() {
    setBooks([...books.sort((a,b) => sort === "desc" ? b.year - a.year : a.year - b.year)])
    setSort(sort === "desc" ? "asc" : "desc")
  }


  return (
    <div className="App">
      {loading ? <LoadingMask /> : 
        <>
          <Button onClick={sortBooks} variant="contained">Sort</Button>
          {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" value={input} onChange={({target}) => {setInput(target.value)} }/> */}
          {books.map(({title, author, year}) => (title.toLowerCase().includes(input.toLowerCase()) && <Book key={year} title={title} author={author} year={year}/>))}
        </>
      }
    </div>
  );
}

export default App;
