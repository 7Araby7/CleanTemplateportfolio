import { useEffect, useState } from 'react';
import styled from 'styled-components';
import P from 'prop-types';

const StyledSwitchWrapper = styled.div`
  cursor: pointer;
  z-index: 1001;
  position: absolute;
  top: 30px;
  left: 50px;
  display: flex;
  align-items: center;
  padding: 0;
  background-color: var(--primary);

  .form-check-input {
    transform: scale(2);
    border-color: var(--text);
  }

  .form-check-input:focus {
    box-shadow: none;
  }

  .form-check-input:checked {
    background-color: rgb(42, 69, 78);
    border-color: var(--text);
  }

  .form-switch .form-check-input {
    --bs-form-switch-bg: url("data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2010%2010'%3e%3ccircle%20cx='5'%20cy='5'%20r='4'%20fill='rgb(42, 69, 78)'/%3e%3c/svg%3e");
  }

  .form-switch .form-check-input:checked {
    --bs-form-switch-bg: url("data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2010%2010'%3e%3ccircle%20cx='5'%20cy='5'%20r='4'%20fill='white'/%3e%3c/svg%3e");
  }

  .form-switch .form-check-input:focus {
    --bs-form-switch-bg: url("data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2010%2010'%3e%3ccircle%20cx='5'%20cy='5'%20r='4'%20fill='rgb(42, 69, 78)'/%3e%3c/svg%3e");
  }

  .form-switch .form-check-input:focus:checked {
    --bs-form-switch-bg: url("data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2010%2010'%3e%3ccircle%20cx='5'%20cy='5'%20r='4'%20fill='white'/%3e%3c/svg%3e");
  }

  @media (max-width: 848px) {
    top: 17px;
    left: 20px;
    .form-check-input {
      transform: scale(1.5);
    }
  }
`;

const Switch = ({ handleThemeToggle, dark }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    handleThemeToggle(!isChecked);
    setIsChecked(!isChecked);
  };

  useEffect(() => {
    setIsChecked(dark);
  }, [dark]);

  return (
    <StyledSwitchWrapper>
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="customSwitch"
          checked={isChecked}
          onChange={handleToggle}
        />
      </div>
    </StyledSwitchWrapper>
  );
};

Switch.propTypes = {
  handleThemeToggle: P.func.isRequired,
  dark: P.bool.isRequired,
};

export default Switch;
