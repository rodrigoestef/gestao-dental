import styled from "styled-components";

interface LabelType {
  error?: boolean;
}

export const Label = styled.label<LabelType>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.25em;
  border: 1px solid
    ${(props) => (props.error ? "var(--error-color)" : "var(--primary-color)")};
  font-size: 1.2em;
  padding: 20px;
`;

export const ErrorText = styled.span`
  color: var(--error-color);
  font-size: 0.75rem;
`;

export const Radio = styled.input.attrs({ type: "radio" })`
  display: none;
  &:checked {
    & + label {
      background-color: var(--primary-color);
      color: #fff;
    }
  }
`;
