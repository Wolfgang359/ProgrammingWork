export const Card = ({children, title}) => (
  <div className="card">
    <div class="card-header">
      <h5 className="card-title">{title}</h5>
      </div>
        <div className="card-body">{children}</div>
    </div>
);
