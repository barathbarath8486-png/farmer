function DashboardCard({
  title,
  value,
  description,
  icon,
  change,
}) {
  return (
    <div className="farmer-dashboard-card">
      <div className="dashboard-card-top">
        <div className="dashboard-card-icon">
          {icon}
        </div>

        {change && (
          <span className="dashboard-card-change">
            ↑ {change}
          </span>
        )}
      </div>

      <p>{title}</p>

      <h2>{value}</h2>

      <span className="dashboard-card-description">
        {description}
      </span>
    </div>
  );
}

export default DashboardCard;