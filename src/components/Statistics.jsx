export function Statistics({ title, stat, keySt }) {
  return (

    <section class="statistics">
      {title && <h2 class="title">{title}</h2>}

      <ul class="stat-list">
        {stat.map(el => ( 
          <li class="item">
            <span class="label">{el.label}</span>
            <span class="percentage">{el.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
