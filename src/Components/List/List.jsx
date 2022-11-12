import React from 'react';
import { ListGroup } from 'react-bootstrap';
import styles from './list.module.css';

function List(props) {
  const { children } = props;

  return (
    <ListGroup variant="flush" className={styles.item}>
      <ListGroup.Item
        action
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        {children}
      </ListGroup.Item>
    </ListGroup>
  );
}

export default List;
