import './App.css';
import NavBar from './components/NavBar/NavBar';
import SearchIcon from './assets/icon/search.png';
import UserDetails from './assets/data/userData';
import UserList from './components/UserList/UserList';

function App() {
    return (
    <header>
      <p id='app-name'>Users</p>
      <div className='container flex center'>
        <form>
          <button type='submit' className='submit-button'>
            <img src={SearchIcon} alt='search icon'></img>
          </button>
          <input type='text' id='search-bar' placeholder='Search users' />
        </form>
        <NavBar></NavBar>
      </div>
      <div className='user-container flex'>
        <UserList users={UserDetails}></UserList>
      </div>
    </header>
  );
}

export default App;
