import React from "react";
import PropTypes from "prop-types";


const Statistics = ({ title, stats }) => {
    return (
<section className="statistics">
        <h2 className="title">{title}</h2>

        <ul className="stat-list">
                {stats.map((data) => (
            <li key={data.id}>
                <span className="label">{data.label} </span>
                <span className="percentage">{data.percentage}</span>
            </li>
        ))}
        </ul>
        
</section>
    )  
}

// Profile.defaultProps = {
//     title:,
// };

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.array.isRequired,
};

export default Statistics;