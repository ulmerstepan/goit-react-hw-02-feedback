export default function FeedbackOptions({ options, onBtnClick }) {
  return (
    <ul>
      {Object.keys(options).map((option) => {
        return (
          <li key={option}>
            <button type="button" onClick={onBtnClick}>
              {option}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
