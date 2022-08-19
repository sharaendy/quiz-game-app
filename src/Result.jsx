export default function Result({ correctCount, stepsCount }) {
  return (
    <div className="result">
      <img
        src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png"
        alt="victory"
      />
      <h2>
        Правильных ответов
        {' '}
        {correctCount}
        {' '}
        из
        {' '}
        {stepsCount}
      </h2>
      <a href="/">
        <button type="button">Попробовать снова</button>
      </a>
    </div>
  );
}
