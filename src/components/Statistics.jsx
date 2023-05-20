export function Statistics({ title, stat, keySt }) {
  return (

    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}

      <ul className="stat-list">
        {stat.map(el => ( 
          <li className="item" key={el.id}> 
            <span className="label">{el.label}</span>
            <span className="percentage">{el.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
