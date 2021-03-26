import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';


function getRandomColor() {
  let color = '';
  for (let i = 0; i < 3; i++) {
    let sub = Math.floor(Math.random() * 256).toString(16);
    color += sub.length === 1 ? '0' + sub : sub;
  }
  return '#' + color;
}

const Statistics = ({ title, stats }) => {
  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}

      <ul className={styles.stat__list}>
        {stats.map(({ id, label, percentage }) => (
          <li
            className={styles.stat__item}
            key={id}
            style={{
              backgroundColor: getRandomColor()
            }}
          >
            <span className={styles.label}>{label} </span>
            <span className="percentage">{percentage} %</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.defaultProps = {
  title: '',
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default Statistics;
