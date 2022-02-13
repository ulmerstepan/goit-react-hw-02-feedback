export default function Statistics({ options, total, positivePercentage }) {
  return (
    <ul>
      {Object.entries(options).map(([key, value]) => {
        return (
          <li key={key}>
            <p>
              {key}: <span>{value}</span>
            </p>
          </li>
        );
      })}

      <li>
        <p>
          Total: <span>{total}</span>
        </p>
      </li>

      <li>
        <p>
          Positive feedback: <span>{positivePercentage}%</span>
        </p>
      </li>
    </ul>
  );
}
