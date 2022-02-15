import PropTypes from "prop-types";
import { BtnList, BtnListItem, OptionBtn } from "./FeedbackOptions.styled";

export default function FeedbackOptions({ options, onBtnClick }) {
  return (
    <BtnList>
      {Object.keys(options).map((option) => {
        return (
          <BtnListItem key={option}>
            <OptionBtn type="button" onClick={() => onBtnClick(option)}>
              {option}
            </OptionBtn>
          </BtnListItem>
        );
      })}
    </BtnList>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onBtnClick: PropTypes.func.isRequired,
};
