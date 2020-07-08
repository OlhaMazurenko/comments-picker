import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Button, Input, Card, Col, Row } from "reactstrap";
import { connect } from "react-redux";
import { addCommentAction } from "../store/actions/items";
import SketchPickerComponent from "./SketchPicker ";

const Comments = ({selectedItem, addCommentAction, items}) => {

  const [comment, setComment] = useState("");
  const [color, setColor] = useState("#000000");
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    const listener = e => {
      if (e.ctrlKey && (e.code === "Enter" || e.code === "NumpadEnter")) {
        addComentHandler();
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [comment, color, selectedItem, items]);

  //add new comment
  const addComentHandler = () => {
    const data = {
      comment,
      color
    };
    if (selectedItem && selectedItem.id) {
      addCommentAction(selectedItem.id, data);
      setComment("");
    }
  };
  
  //shoe existing comments
  const drawComments = () => {
    if (selectedItem && selectedItem.id && items) {
      const item = items.find(item => item.id === selectedItem.id);
      if (item && item.comments) {
        return item.comments.map(comment => {
          return (
            <div key={comment.comment} className="comments">
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  background: `${comment.color}`
                }}
              ></div>
              <div className="text">{comment.comment}</div>
            </div>
          );
        });
      } else {
        return;
      }
    }
  };

  //new comment value
  const textareaHandler = e => {
    e.preventDefault();
    setComment(e.target.value);
  };

  //picker handlers
  const colorHandler = data => {
    setColor(data.hex);
  };

  const openSketchPickerComponent = () => {
    setOpened(true);
  };

  const closePickerHandler = () => {
    setOpened(false);
  };

  return (
    <DIV color={color}>
      <SketchPickerComponent
        closePickerHandler={closePickerHandler}
        opened={opened}
        colorHandler={colorHandler}
        color={color}
      />
      <Card body>
        <div className="header">
          Comments{" "}
          {selectedItem && selectedItem.id
            ? `#${selectedItem.id}`
            : null}
        </div>
        <Row>
          <Col md={2}>
            <div className="color" onClick={openSketchPickerComponent}></div>
          </Col>
          <Col md={6}>
            <Input
              type="textarea"
              placeholder="Type comment here..."
              value={comment}
              onChange={textareaHandler}
            />
          </Col>
          <Col md={3}>
            <Button color="info" onClick={addComentHandler}>
              Add Comment
            </Button>
          </Col>
        </Row>
        {selectedItem && drawComments()}
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

  .header {
    font-size: 26px;
  }

  .color {
    width: 40px;
    border: 1px solid black;
    height: 100%;
    background: ${props => props.color};
  }
  .comments {
    display: flex;
    margin: 5px;
  }

  .text {
    font-size: 18px;
    text-align: center;
    display: flex;
    align-items: center;
    padding: 5px;
  }
`;

const mapStateToProps = state => {
  return {
    selectedItem: state.items.selectedItem,
    items: state.items.itemsArray
  };
};

const mapDispatchToProps = {
  addCommentAction
};

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
