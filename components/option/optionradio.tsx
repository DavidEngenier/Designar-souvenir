import React from 'react';
interface ProductOption {
    'label-bottom': string;
    value: string;
    selected?: boolean;
  }
  
  interface ProductOptionsData {
    entries: ProductOption[];
  }
  



interface OptionRadioProps {
  option: ProductOption;
  type: string;
  optionClasses: string;
}

const OptionRadio: React.FC<OptionRadioProps> = ({ option, type, optionClasses }) => {
  return (
    <div className={`form-check-option ${optionClasses}`}>
      <input
        className="form-check-input "
        type="radio"
        name={type}
        id={`option-${option.value}`}
        value={option.value}
        defaultChecked={option.selected || false}
      />
      
      <label className="d-block" htmlFor={`option-${option.value}`}>
        {option['label-bottom']}
      </label>
    </div>
  );
};

export default OptionRadio;
