import React from 'react';
import VisuallyHiddenInput from '../../styled/visually-hidden-input/visually-hidden-input';

function Checkbox({
  labelComponent, // компонент для отображения label
  name, // имя
  value, // значение
  text, // текст элемента
  onClick,
  isChecked,
  onChange,
  ...props
}) {
  const LabelComponent = labelComponent;
  return (
    <label>
      <VisuallyHiddenInput
        value={value}
        name={name}
        onChange={() => {
          onChange(value);
        }}
        checked={isChecked}
        {...props}
        type="checkbox"
      />
      <LabelComponent $isChecked={isChecked} onClick={() => onClick(value)}>
        {text}
      </LabelComponent>
    </label>
  );
}

export default Checkbox;
