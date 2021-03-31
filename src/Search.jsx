import React from 'react';
import { Form, Button, Navbar, Nav, FormControl } from 'react-bootstrap';

const Search = ({ setSearch }) => {
  const updateSearch = (e) => {
    if (e.target.value.length > 2) {
      setSearch(e.target.value);
    }
  }

  // return (
  //   <div>
  //     <Form>
  //       <Form.Control type="text" size="lg" placeholder="Search for cocktails..." onChange={(e) => updateSearch(e)} />
  //     </Form>
  //   </div>
  // )

  return (
    <Navbar bg="dark" variant="dark" fixed="top">
      <Navbar.Brand href="#home">
        <img src="./pour_judgement_3v2.png"  width="80" height="80"/>
      </Navbar.Brand>
      <Form inline>
        <FormControl type="text" placeholder="Search for cocktails..." className="mr-sm-2" size="lg" onChange={(e) => updateSearch(e)} />
      </Form>

    </Navbar>
  )
}

export default Search;