function Home() {
    return (
        <div id="carouselExample" className="carousel slide">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://t3.ftcdn.net/jpg/04/11/82/12/360_F_411821271_HXEiuyPkjAhOo6c8igT0i9WC26lhyfN5.jpg"
                    height="300" className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src="https://t4.ftcdn.net/jpg/02/40/63/55/360_F_240635575_EJifwRAbKsVTDnA3QE0bCsWG5TLhUNEZ.jpg"
                    height="300" className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnKJBTb9cjlPAaYPxrr0zgZ6x2MgtaNgxcaw&s"
                    height="300" className="d-block w-100" alt="..."/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}

export default Home;