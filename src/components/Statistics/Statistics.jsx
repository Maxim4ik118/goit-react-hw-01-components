import { PropTypes } from 'prop-types';
import { StyledStatistics } from './Styled';

function Statistics({ title, stats = [] }) {
  return (
    <StyledStatistics>
      <div className="stats-title">{title}</div>

      <ul className="stats">
        {stats.length > 0 && stats.map(({ label, id, percentage }) => {
          const bgColor = '#' + Math.floor((Math.random() * 2 ** 16)).toString(16).padStart(6, 'f');

          return (
            <li key={id} style={{ backgroundColor: bgColor }}>
              <span className="format">{label}</span>
              <span className="value">{percentage}%</span>
            </li>
          );
        })}
      </ul>
    </StyledStatistics>
  );
}

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Statistics;
