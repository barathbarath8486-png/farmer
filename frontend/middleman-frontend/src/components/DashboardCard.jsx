function DashboardCard({ label, value, tone = '' }) {
  return <article className={`dashboard-card ${tone}`}><span>{label}</span><strong>{value}</strong></article>
}

export default DashboardCard