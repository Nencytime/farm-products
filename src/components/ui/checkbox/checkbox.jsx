import React from "react";
import { VisuallyHiddenInput, Label } from "/src/components/styled";

// чекбокс
function Checkbox({
  onClick,
  labelComponent, // Компонент для отображения label
  isChecked, // выбранно ли значение
  title, // имя
  value, // значение
  text, // текст элемента
  onChange, // событие при изменении
  ...props
}) {
  const LabelComponent = labelComponent;

  return (
    <Label>
      <VisuallyHiddenInput
        value={value}
        checked={isChecked}
        title={title}
        onChange={() => onChange(value)}
        {...props}
        type="checkbox"
      />
      <LabelComponent onClick={() => onClick(value)} $isChecked={isChecked}>
        {text}
      </LabelComponent>
    </Label>
  );
}

export default Checkbox;
