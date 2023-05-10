import { sprinkles } from './theme/sprinkles.css';

export const button = sprinkles({
  display: 'flex',
  padding: 'small',
  background: 'gray-700',
  color: 'blue-200',
  borderRadius: 'large',
});

export const Vanilla = () => {
  return (
    <button type="button" className={button}>
      Vanilla
    </button>
  );
};
