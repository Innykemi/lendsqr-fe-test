interface CardProps {
  icon: React.ReactNode;
  title?: string;
  value?: string;
  iconWrapperBg?: string;
}

function UsersCard({ icon, title, value, iconWrapperBg }: CardProps) {
  const iconWrapperStyle = {
    "--icon-wrapper-bg": iconWrapperBg
  } as React.CSSProperties;

  return (
    <div className="card-wrapper">
      <div className="card-wrapper__icon-wrapper" style={iconWrapperStyle}>{icon}</div>
      <p className="card-wrapper__card-title">{title}</p>
      <p className="card-wrapper__card-value">{value}</p>
    </div>
  );
}

export default UsersCard;
