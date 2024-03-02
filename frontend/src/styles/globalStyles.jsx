import styled, { createGlobalStyle, css } from 'styled-components';
// import { theme } from '../themes';

export const GlobalStyle = createGlobalStyle`

 :root {
    --hue: 200;
    --saturation: 70%;
    --lightness: 55%;

    --main-color: hsl(var(--hue), var(--saturation), var(--lightness));
  }

  html,
  body {
    scroll-behavior: smooth;
    overflow-x: hidden;
    overflow-y: scroll;
    ::-webkit-scrollbar{
      display: none;
    }
  }

     * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    border:0;
    text-decoration: none;
    list-style: none;
  }

  ::before,
  ::after {
    box-sizing: border-box;
  }



ul {
  list-style: none;
  li{
    padding: 0;
    margin: 0;
  }
}

a {
  text-decoration: none;
}

img {
  max-width: 100%;
  vertical-align: middle;

}

button {
  outline: none;
  border: none;
  cursor: pointer;
  :focus {
    outline: none;
  }
}

input {
   outline: none;
  border: none;
  ${'' /* cursor: pointer; */}
  :focus {
    outline: none;
  }
}

    @media (min-width: 992px) {
      .navbar .navbar-nav .nav-link {
        color: white; /* Set text color to white on large screens */
      }
/* Target the logo directly */


    }
    .logo img {
    outline: 2px solid white; /* Add a white outline to the logo image */
    position: relative; /* Set the logo's position to relative */
    z-index: 1000; /* Bring the logo on top of the background */
}
.scroll-to-top {
  display: none;
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #007bff;
  color: white;
  font-size: 20px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  text-align: center;
  line-height: 40px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.scroll-to-top:hover {
  background-color: #0056b3;
}

/* Add a class for fading animation */
  @keyframes fadeInOut {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }

  /* Apply the animation to the project name */
  .loading-text {
    animation: fadeInOut 2s ease-in-out infinite;
  }

   .registrationForm {
            max-width: 600px;
            margin: auto;
            padding: 20px;
            background-color: #f8f9fa; /* Set your preferred form background color */
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        label {
            display: block;
            margin-bottom: 8px;
            color: #000; /* Set your preferred label color */
        }

        input,
        select,
        .buttonForm {
            width: 100%;
            padding: 10px;
            margin-bottom: 16px;
            border: 1px solid #ced4da; /* Set your preferred input border color */
            border-radius: 5px;
            box-sizing: border-box;
        }

        .buttonForm {
            background-color: #007bff; /* Set your preferred button background color */
            color: #fff; /* Set your preferred button text color */
            cursor: pointer;
        }

       .buttonForm button:hover {
            background-color: #0056b3; /* Set your preferred button hover background color */
        }

        fieldset {
            max-width: 600px;
            margin: auto;
            padding: 20px;
            background-color: #f8f9fa;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        legend {
            font-size: 1.5em;
            font-weight: bold;
            color: #007bff;
            margin-bottom: 20px;
        }


`;

export const Container = styled.div`
  /* max-width: 1170px; */
  max-width: 1500px;
  margin: auto;
  padding: 0 15px;
  /* border: 2px dashed blue; */

  ${(props) =>
    props.primary &&
    css`
      display: flex;
      align-items: center;
      justify-content: space-between;
    `}

  ${(props) =>
    props.form &&
    css`
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      /* background-color: var(--main-color); */
      margin-top: 150px;
    `}
`;
