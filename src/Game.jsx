import { uniqueId } from 'lodash';

export default function Game({
  question, step, stepsCount, onClickVariant,
}) {
  const { title, variants } = question;

  const progress = (stage) => Math.round((stage / stepsCount) * 100);

  return (
    <>
      <div className="progress">
        <div style={{ width: `${progress(step)}%` }} className="progress__inner" />
      </div>
      <h1>{title}</h1>
      <ul>
        {variants.map((variant, index) => (
          <li
            key={uniqueId()}
            onClick={() => onClickVariant(index)}
            aria-hidden="true"
          >
            {variant}
          </li>
        ))}
      </ul>
    </>
  );
}
