export   function Statistics ({title, stat}){
  return (<section class="statistics">
  
  <h2 class="title">{title}</h2>

  <ul class="stat-list">
    <li class="item">
      <span class="label">{stat.label}</span>
      <span class="percentage">{stat.percentage}</span>
    </li>
    <li class="item">
      <span class="label">{stat.label}</span>
      <span class="percentage">{stat.percentage}</span>
    </li>
  </ul>
</section>);
}