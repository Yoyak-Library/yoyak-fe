import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/login/login';
import SignUp from './pages/login/signup';
import FindAccount from './pages/login/findAccount';
import Home from './pages/home/home';
import Yoyak from './pages/yoyak/yoyak';
import ViewYoyak from './pages/yoyak/viewYoyak';
import OneReview from './pages/home/oneReview';
import Onboarding1 from './pages/onboarding/onboarding1';  
import Onboarding2 from './pages/onboarding/onboarding2';  
import Loading from './pages/onboarding/loading';
import MyPost from './pages/library/myPost';
import YoyakList from './pages/yoyak/yoyaklist';
import Summarize1 from './pages/summation/summarize1';
import Summarize2 from './pages/summation/summarize2';
import PersonalLibrary from './pages/mypages/personalLibrary';
import ProfileSetting from './pages/mypages/profileSetting';
import PasswordCheck from './pages/mypages/passwordCheck';
import HighlightView from './pages/yoyak/highlightView';

function App() {
  return (
    <Router
      future={{
        v7_startTransition: true, // 상태 업데이트를 React.startTransition으로 감싸기
        v7_relativeSplatPath: true, // Splat 경로를 상대 경로로 처리
      }}
    >
      <Routes>
        {/* 로그인 */}
        <Route path="/" element={<Login />} />
        {/* 회원가입 */}
        <Route path="/signup" element={<SignUp />} />
        {/* 아이디/패스워드 찾기 */}
        <Route path="/findAccount" element={<FindAccount />} />
        {/* 홈 */}
        <Route path="/home" element={<Home />} />
        {/* 요약 */}
        <Route path="/yoyak" element={<Yoyak />} />
        {/* 요약글 보기 */}
        <Route path="/viewYoyak" element={<ViewYoyak />} />
        {/* 내가 작성한 글 */}
        <Route path="/myPost" element={<MyPost />} />
        <Route path="/yoyaklist" element={<YoyakList />} />

        <Route path="/review" element={<OneReview />} />

        <Route path="/highlightview" element={<HighlightView />} />
        
        {/* 온보딩*/}
        <Route path="/onboarding1" element={<Onboarding1 />} />
        <Route path="/onboarding2" element={<Onboarding2 />} />
        <Route path="/Loading" element={<Loading />} />

        {/* 요약글쓰기기*/}
        <Route path="/summarize1" element={<Summarize1 />} />
        <Route path="/summarize2" element={<Summarize2 />} />

        {/* 개인 라이브러리 */}
        <Route path="/personallibrary" element={<PersonalLibrary />} />
        <Route path="/profilesetting" element={<ProfileSetting />} />
        <Route path="/passwordcheck" element={<PasswordCheck />} />


      </Routes>
    </Router>
  );
}

export default App;
