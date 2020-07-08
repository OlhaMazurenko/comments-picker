import React from "react";
import { SliderPicker } from "react-color";
import onClickOutside from "react-onclickoutside";

function SketchPickerComponent({
  colorHandler,
  color,
  opened,
  closePickerHandler
}) {
  SketchPickerComponent.handleClickOutside = () => {
    closePickerHandler();
  };

  if (!opened) {
    return null;
  }
  return (
    <SliderPicker
      open={false}
      mode={"RGB"}
      color={color}
      onChange={colorHandler}
    />
  );
}

const clickOutsideConfig = {
  handleClickOutside: function(instanse) {
    return SketchPickerComponent.handleClickOutside;
  }
};
export default onClickOutside(SketchPickerComponent, clickOutsideConfig);
