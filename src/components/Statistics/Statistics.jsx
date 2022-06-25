import { PropTypes } from 'prop-types';
import { StyledStatistics } from './Styled';

function Statistics({ stats }) {
  return (
    <StyledStatistics>
      <div className="stats-title">Upload stats</div>

      <ul className="stats">
        {stats.map(({ label, id, percentage }) => {
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
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ).isRequired,
};

export default Statistics;
