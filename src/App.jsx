import React from 'react';

import {
  Routes,
  Route,
} from 'react-router-dom';

import HomePage from './page/HomePage';
import AboutPage from './page/AboutPage';
import MemberListPage from './page/MemberListPage';
import MemberDetailPage from './page/MemberDetailPage';
import CheerSongListPage from './page/CheerSongListPage';
import SongListPage from './page/SongListPage';
import SongPage from './page/SongPage';
import AlbumListPage from './page/AlbumListPage';
import NotFoundPage from './page/NotFoundPage';

import Root from './styles/root';

export default function App() {
  return (
    <Root>
      <Routes>
        <Route path="/home" element={<HomePage/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route exact path="/member" element={<MemberListPage/>} />
        <Route path="/member/:id" element={<MemberDetailPage/>} />
        <Route path="/cheer-song" element={<CheerSongListPage/>} />
        <Route exact path="/song" element={<SongListPage/>} />
        <Route path="/song/:id" element={<SongPage/>} />
        <Route path="/album" element={<AlbumListPage/>} />
        <Route element={<NotFoundPage/>} />
      </Routes>
    </Root>
  );
}
