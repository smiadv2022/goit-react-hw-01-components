import { Statistics } from "./Statistics";
import statData from '../data.json';

export function StatisticList (){
  return (<div>
    
{statData.map(el=><Statistics title="1222222" stat={el}/>)}
  </div>
  );
}