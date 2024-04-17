import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import Icons from './Pages/Icons';
import Map from './Pages/Map';
import Notifications from './Pages/Notifications';
import UserProfile from './Pages/UserProfile';
import TableSet from './Pages/TableSet';
import Typography from './Pages/Typography'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Dashboard /> } />
      <Route path='/icons' element={<Icons />  } />
      <Route path='/map' element={<Map />  } />
      <Route path='/notifications' element={<Notifications />  } />
      <Route path='/user-profile' element={<UserProfile />  } />
      <Route path='/table-set' element={<TableSet />  } />
      <Route path='/typography' element={<Typography />  } />
    </Routes>
  )
}

export default App