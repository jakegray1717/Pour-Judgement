import React from 'react';
import { Form, Button } from 'react-bootstrap';

const Search = ({ setSearch, setButtonToggle, buttonToggle }) => {
  const pressButton = () => {
    setButtonToggle(!buttonToggle);
  }

  return (
    <div>
      <Form>
        <Form.Control type="text" size="lg" placeholder="Search for cocktails..." onChange={(e) => setSearch(e.target.value)} />
        <Button variant="primary" type="submit" onClick={pressButton}>
          Search
        </Button>
      </Form>
    </div>
  )
}

export default Search;