import React from "react";
import { Button, ButtonGroup } from '@chakra-ui/react';
 
import { Select } from '@chakra-ui/react';

const Pagination = () => {
  // TODO: Remove below const and instead import them from chakra

  return (
    <ButtonGroup>
      <Button data-cy="pagination-first-button">First</Button>
      <Button data-cy="pagination-previous-button">Previous</Button>
      <Select data-cy="pagination-limit-select">
        <option data-cy="pagination-limit-3">1</option>
        <option data-cy="pagination-limit-6">2</option>
        <option data-cy="pagination-limit-9">3</option>
      </Select>
      <Button data-cy="pagination-next-button">Next</Button>
      <Button data-cy="pagination-last-button">Last</Button>
    </ButtonGroup>
  );
};

export default Pagination;
