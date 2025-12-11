function Home() {

  // handle the enter portfolio button scroll
  const handleScroll = (e) => {
    e.preventDefault();
    
    const section = document.getElementById('about');
    const navHeight = 60;

    if (section) {
      const yOffset = -navHeight;
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth'});
    }
  };

  return (
    <div className='home-container'>
      <div className='pic-container'>
        <img src='upd_profile_pic.jpg' alt='profile_pic'></img>
      </div>
      <h2>Alex Ryse</h2>
      <h3>Computer Science Undergraduate Student</h3>
      <div className='enter-container'>
        <button onClick={(e) => handleScroll(e)}><b>Enter Portfolio</b></button>
      </div>
    </div>
  );
}

export default Home;