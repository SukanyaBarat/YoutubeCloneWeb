import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import {AppContext} from "./Context/ContextAPI";
import Header from "./Components/Header";
import Feed from "./Components/Feed";
import SearchResults from "./Components/SearchResults";
import VideoDetails from "./Components/VideoDetails";
const App=()=> {
  return(
     <AppContext>
         <BrowserRouter>
              <div className="flex flex-col h-full">
               <Header/>
               <Routes>
                 < Route path="/"exact element={<Feed/>}/>
                 < Route path="/searchResults/:searchQuery"element={<SearchResults/>}/>
                 < Route path="/video/:id"element={<VideoDetails/>}/>
               </Routes>
              </div>
         </BrowserRouter>
      </AppContext>
  );
};

export default App;
