import NewUsers from '../pages/NewUsers/NewUsers';
import OtherPage from '../pages/OtherPage/OtherPage';

//Navigation menu with the respective menu content
export const navigationMenu = [
    {menu:'Reputation', content:<OtherPage></OtherPage>},
    {menu:'New users', content:<NewUsers></NewUsers>},
    {menu:'Voters', content:<OtherPage></OtherPage>},
    {menu:'Editors', content:<OtherPage></OtherPage>},
    {menu:'Moderators', content:<OtherPage></OtherPage>},
];
