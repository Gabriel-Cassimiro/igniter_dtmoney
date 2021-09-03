import { createGlobalStyle } from "styled-components"

export const Globalstyles = createGlobalStyle`
:root {
  --green: #33CC95;
  --red: #E52E4D;
  --blue: #5429CC;
  --blue-light:#6933FF;

  --text-title:#363F5F;
  --text-body:#969CB3;

  --background:#F0F2F5;
  --shape:#FFFFFF;
}

*{
  margin: 0;
  pad: 0;
  box-sizing: border-box;
}

// Rem is equal to font-size. If font-size is set in px, it becomes static
// Static font-size is bad for user accebility
@media (max-width: 1080px){
  font-size: 93.75%;
}

@media (max-width: 720px){
  font-size: 87.50%;
}

body {
  background: var(--background);
  -webkit-font-smoothing: antialiased;
}

body, input, button, textarea {
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
}

h1, h2, h3, h4, h5, h6, strong{
  font-weight: 600;
}

button {
  cursor: pointer;
}

[disabled]{
  opacity: 0.6;
}

.react-modal-overlay{
  background: rgba(0, 0, 0, 0.5);

  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;
}

.react-modal-content{
  background: var(--background);
  width: 100%;
  max-width: 576px;
  padding: 3rem;
  position: relative;
  border-radius: 0.24rem;
}

.react-modal-close{
  position: absolute;
  right: 1.5rem;
  top: 1.5rem;
  border: 0;
  background: transparent;
  transition: filter 0.2s;

  &:hover{
    filter: brightness(0.8);
  }
}

`
