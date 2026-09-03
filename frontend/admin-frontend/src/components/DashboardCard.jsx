function DashboardCard({
  title,
  value,
  icon,
  change,
  changeType = "positive",
  description,
}) {
  return (
    <div className="dashboard-stat-card">
      <div className="dashboard-stat-top">
        <div className="dashboard-stat-icon">
          {icon}
        </div>

        {change && (
          <span
            className={`dashboard-stat-change ${
              changeType === "negative"
                ? "change-negative"
                : "change-positive"
            }`}
          >
            {changeType === "negative" ? "↓" : "↑"} {change}
          </span>
        )}
      </div>

      <div className="dashboard-stat-content">
        <p>{title}</p>
        <h2>{value}</h2>

        {description && (
          <span>{description}</span>
        )}
      </div>
    </div>
  );
}

export default DashboardCard;