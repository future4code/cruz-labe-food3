import { Radio, withStyles } from "@material-ui/core";
import styled from "styled-components";
import { gray, neutralColor, primaryColor } from "../../constants/colors";

export const ContainerMyCart = styled.main`
  width: 100vw;
  height: 92vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const ContainerHeader = styled.header`
  width: 100%;
`;

export const HeaderCart = styled.div`
  width: 100%;
  text-align: center;
  padding: 10px 0;
  height: 44px;
`;

export const AdressCard = styled.div`
  border-top: 1px solid ${gray};
  padding: 12px 16px;
  background-color: #eeeeee;
  width: 100%;
`;

export const AdressLabel = styled.p`
  color: ${gray};
  margin-bottom: 8px;
`;

export const Adress = styled.p`
  font-weight: 500;
`;

export const ContainerScroll = styled.div`
  overflow-y: auto;
  width: 100%;
`;

export const ContainerOrder = styled.div`
  margin-top: 8px;
  width: 100%;
`;

export const RestaurantAdress = styled.div`
  margin-bottom: 8px;
  padding: 0 16px;
  p {
    color: ${gray};
  }
`;

export const LabelRestaurantName = styled.span`
  color: ${primaryColor};
`;

export const CardItem = styled.div`
  height: 112px;
  background-color: black;
  margin-bottom: 8px;
`;

export const ContainerPayment = styled.form`
  width: 100%;
  padding: 16px;
`;

export const ContainerValues = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const SubTotal = styled.div`
  margin-top: 13px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const TotalValue = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: ${primaryColor};
`;

export const PaymentType = styled.div`
  margin-top: 25px;
`;

export const PaymentTypeTitle = styled.p`
  margin-bottom: 3px;
`;

export const ConfirmButton = styled.button`
  width: 100%;
  border-radius: 5px;
  border: none;
  padding: 12px 16px;
  font-size: 16px;
  background-color: #5cb646;
  margin-top: 16px;
  height: 42px;

  :disabled {
    background-color: rgba(92, 182, 70, 0.5);
  }
`;

export const RadioBlack = withStyles({
  root: {
    color: neutralColor,
    "&$checked": {
      color: neutralColor,
    },
  },
  checked: {},
})((props) => <Radio required color="default" {...props} />);
