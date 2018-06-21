import styled from 'styled-components';
import { palette } from 'styled-theme';

const QuestionaireStyleWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100vh;
  align-items: center;
  position: relative;

  
  input::placeholder {
    text-align: center;
  }

  input {
    text-align: center;
  }

  #myProgress {
      width: 100%;
      background-color: #92cbf7;
  }

  ::-webkit-input-placeholder {
   text-align: center;
}

:-moz-placeholder { /* Firefox 18- */
   text-align: center;  
}

::-moz-placeholder {  /* Firefox 19+ */
   text-align: center;  
}

:-ms-input-placeholder {  
   text-align: center; 
}

  #myBar {
      height: 38px;
      background-color: #158daf;
  }

  .isoFormContentWrapper {
    width: 500px;
    height: 100%;
    overflow-y: auto;
    z-index: 10;
    position: relative;
  }

  .buttonTest:focus {
    border: 0 0 1 0px solid black;
    box-shadow: 0 0 0 0px;

  }

  .isoFormContent {
    min-height: 100%;
    display: flex;
    flex-direction: column;
    padding: 70px 50px;
    position: relative;
    background-color: #ffffff;

    @media only screen and (max-width: 767px) {
      width: 100%;
      padding: 70px 20px;
    }

    .isoLogoWrapper {
      width: 100%;
      display: flex;
      margin-bottom: 70px;
      justify-content: center;

      a {
        font-size: 24px;
        font-weight: 300;
        line-height: 1;
        text-transform: uppercase;
        color: ${palette('secondary', 2)};
      }
    }

    .isoFormHeadText {
      width: 100%;
      display: flex;
      flex-direction: column;
      margin-bottom: 15px;
      justify-content: center;

      h3 {
        font-size: 14px;
        font-weight: 500;
        line-height: 1.2;
        margin: 0 0 7px;
        color: ${palette('text', 0)};
      }

      p {
        font-size: 13px;
        font-weight: 400;
        line-height: 1.2;
        margin: 0;
        color: ${palette('text', 2)};
      }
    }

    .ant-avatar-lg { 
      width: 80px;
      height: 80px;
      border-radius: 40px
    }

    .isoForgotPassForm {
      width: 100%;
      display: flex;
      flex-shrink: 0;
      flex-direction: column;

      .isoInputWrapper {
        margin-bottom: 10px;

        &:last-child {
          margin-bottom: 0;
        }

        input {
          &::-webkit-input-placeholder {
            color: ${palette('grayscale', 0)};
          }

          &:-moz-placeholder {
            color: ${palette('grayscale', 0)};
          }

          &::-moz-placeholder {
            color: ${palette('grayscale', 0)};
          }
          &:-ms-input-placeholder {
            color: ${palette('grayscale', 0)};
          }
        }

        button {
          height: 42px;
          width: 100%;
          font-weight: 500;
          font-size: 13px;
        }
      }
    }
  }
`;

export default QuestionaireStyleWrapper;
