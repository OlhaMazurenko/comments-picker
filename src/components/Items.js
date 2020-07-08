import React, { useState } from "react";
import styled from "styled-components";
import { Button, Input, Card, Col, Row } from "reactstrap";
import { connect } from "react-redux";
import {
  addItemAction,
  deleteItemAction,
  selectItemAction
} from "../store/actions/items";

const Items = ({
  addItemAction,
  itemsArray,
  deleteItemAction,
  selectItemAction,
  selectedItem
}) => {
  const [item, setItem] = useState("");

  //new item value
  const inputHandler = e => {
    e.preventDefault();
    setItem(e.target.value);
  };
  
  //add new item
  const addItemHandler = () => {
    if (item !== "") {
      const newItem = {
        id: Date.now(),
        value: item,
        comments: []
      };

      addItemAction(newItem);
      setItem("");
    }
  };
 
  //selecting from existing items
  const selectItemHandler = item => {
    selectItemAction(item);
  };

  // show existing items
  const itemsArrayHandler = () => {
    if (itemsArray && itemsArray.length > 0) {
      return itemsArray.map(item => {
        return (
          <Row
            key={item.id}
            onClick={() => selectItemHandler(item)}
            className={`item ${
              selectedItem && selectedItem.id === item.id ? "border" : ""
            }`}
          >
            <Col md={6}>
              <h4>{item.value}</h4>
            </Col>
            <Col md={2}>
              <div className="comments">{item.comments.length}</div>
            </Col>
            <Col md={3}>
              <Button
                outline
                color="danger"
                onClick={e => deleteItemHandler(e, item.id)}
              >
                Delete
              </Button>
            </Col>
          </Row>
        );
      });
    }
  };

  const deleteItemHandler = (e, id) => {
    e.stopPropagation();
    deleteItemAction(id);
  };

  return (
    <DIV>
      <Card body>
        <div className="header">Items</div>
        <Row>
          <Col md={7}>
            <Input
              type="text"
              placeholder={"Type name here"}
              onChange={inputHandler}
              value={item}
            />
          </Col>
          <Col md={5}>
            <Button color="info" onClick={addItemHandler}>
              Add Item
            </Button>
          </Col>
        </Row>
        {itemsArrayHandler()}
      </Card>
    </DIV>
  );
};

const DIV = styled.form`
  padding: 10px;
  height: min-content;
  max-width: 400px;
  .row {
    padding: 5px;
  }

  .item {
    border: 1px solid #8080803b;

    &:hover {
      box-shadow: inset 0 0 2px #9c7777;
      cursor: pointer;
    }
  }

  .border {
    border-left: 4px solid red !important;
  }

  .comments {
    color: blue;
    font-weight: bold;
    line-height: 2;
  }
`;

const mapStateToProps = state => {
  console.log("state", state);
  return {
    itemsArray: state.items.itemsArray,
    selectedItem: state.items.selectedItem
  };
};

const mapDispatchToProps = {
  addItemAction,
  deleteItemAction,
  selectItemAction
};

export default connect(mapStateToProps, mapDispatchToProps)(Items);
