import PropTypes from "prop-types";
import {
  StatisticList,
  StatisticItem,
  StatisticItemText,
  StatisticItemValue,
} from "./Statistics.styled";

export default function Statistics({ options, total, positivePercentage }) {
  return (
    <StatisticList>
      {Object.entries(options).map(([key, value]) => {
        return (
          <StatisticItem key={key}>
            <StatisticItemText>
              {key}: <StatisticItemValue>{value}</StatisticItemValue>
            </StatisticItemText>
          </StatisticItem>
        );
      })}

      <StatisticItem>
        <StatisticItemText>
          Total: <StatisticItemValue>{total}</StatisticItemValue>
        </StatisticItemText>
      </StatisticItem>

      <StatisticItem>
        <StatisticItemText>
          Positive feedback:{" "}
          <StatisticItemValue>{positivePercentage}%</StatisticItemValue>
        </StatisticItemText>
      </StatisticItem>
    </StatisticList>
  );
}

Statistics.propTypes = {
  options: PropTypes.objectOf(PropTypes.number),
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
