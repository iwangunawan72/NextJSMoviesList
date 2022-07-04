import Head from 'next/head'
import React, { useRef } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from '../components/Navigationbar';
import Intro from '../components/Intro';
import Trending from './Components/Trending';
export default function Home() {
  constmyRef = useRef(null)
    const executeScroll = () => scrollToRef(myRef)
 return (
   <div className='htmlAll'>
     <Head>
       <title>Movie List</title>
       <meta name="description" content="Movie List" />
       <link rel="icon" href="/favicon.ico" />
     </Head>
     <div className='myBG'>
       <NavigationBar></NavigationBar>
       <Intro> scroll = {executeScroll}</Intro>
        <div className='border intro'>
           <Container className='text-dark d-flex justify-content-center align-items-center border'>
               <Row>
                   <Col>
                   <div className='title'>Review Film</div>
                   <div className='title'>Kesukaanmu</div>
                   </Col>
               </Row>
           </Container>
       </div>
     </div>
     <div className='trending' ref={myRef}>
        <Trending></Trending>
     </div>
   </div>
 )
}