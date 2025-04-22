import React from 'react'
import { MdStar, MdStarHalf, MdStarOutline } from 'react-icons/md';
import './Reviews.css';

const Reviews = () => {

    const reviewsData = [
        { country: 'Germany', 
          date: '23 December 2023',
          review: "I'm so Impressed with my new Puma Sneakers!. They're comfortable, stylish, and perfect for running. The quality is top-notch, and the shipping was fast. Highly recommended",
          rating: (<><MdStar/><MdStar/><MdStar/><MdStarHalf/><MdStarOutline/></>),
          img: '',
          name: 'Emily W.',
        },
        { country: 'France', 
            date: '02 February 2023',
            review: "Unfortunately, my experience with this store was dissapointing. The Reeboks Sneakers I ordered were cheapely made and fell apart after a week of wear. The customer service was unhelpful, and i'm extremely dissapointed.",
            rating: (<><MdStar/><MdStar/><MdStar/><MdStarHalf/><MdStarOutline/></>),
            img: '',
            name: 'Sarah K.',
          },
          { country: 'London', 
            date: '23 March 2023',
            review: "The Kids' sneakers i Ordered were decent, but not spectacular. They're okay quality, and the price was unreasonable. Maybe just avereage overall",
            rating: (<><MdStar/><MdStar/><MdStar/><MdStarHalf/><MdStarOutline/></>),
            img: '',
            name: 'Jennifer G',
          },
          { country: 'United States', 
            date: '14 October 2023',
            review: "I'm absolutely thrilled with my new Reebok boots! They're excellent quality, confortable, and stylish. The Store customer service was also fantastic. Highly recommened!",
            rating: (<><MdStar/><MdStar/><MdStar/><MdStarHalf/><MdStarOutline/></>),
            img: '',
            name: 'Amanda H.',
          },
          { country: 'Saudi Arabia', 
            date: '16 April 2023',
            review: "I recently purchased a pair of Nike boots from this store and i'm very happy with them.",
            rating: (<><MdStar/><MdStar/><MdStar/><MdStarHalf/><MdStarOutline/></>),
            img: '',
            name: 'Umar Zain',
          },
          { country: 'Nigeria', 
            date: '31 December 2023',
            review: "I Purchased a pair of New Balance Sneakers, and they're fine. They're not the most confortable shoes i've worn, but they're okay. The store's website could be improved, though.",
            rating: (<><MdStar/><MdStar/><MdStar/><MdStarHalf/><MdStarOutline/></>),
            img: '',
            name: 'Rachel T',
          },
          { country: 'New Zealand', 
            date: '13 November 2024',
            review: "I bought a pair of New Balance, they're perfectly Okay!",
            rating: (<><MdStar/><MdStar/><MdStar/><MdStarHalf/><MdStarOutline/></>),
            img: '',
            name: 'James B',
          },
          { country: 'South Africa', 
            date: '23 December 2023',
            review: "Very impressive vendor",
            rating: (<><MdStar/><MdStar/><MdStar/><MdStarHalf/><MdStarOutline/></>),
            img: '',
            name: 'Abena Bussia',
          },
          { country: 'Portugal', 
            date: '24 January 2024',
            review: "Perfect Store for your Soccer Boots, i've been shopping from them for a decade",
            rating: (<><MdStar/><MdStar/><MdStar/><MdStarHalf/><MdStarOutline/></>),
            img: '',
            name: 'Cristiano Ronaldo',
          },
          { country: 'Canada', 
            date: '17 June 2024',
            review: "The perfect store for your kids Kicks. You gotta love them!",
            rating: (<><MdStar/><MdStar/><MdStar/><MdStarHalf/><MdStarOutline/></>),
            img: '',
            name: 'Williams C',
          },
          { country: 'Australia', 
            date: '30 July 2025',
            review: "I've been looking for a particular pair of PumV female sneakers for some times, i'm glad to found it here. The quality is also exceptional",
            rating: (<><MdStar/><MdStar/><MdStar/><MdStarHalf/><MdStarOutline/></>),
            img: '',
            name: 'Mary Brose',
          },
          { country: 'Iceland', 
            date: '23 December 2023',
            review: "I've been looking for a new pair of Louis Vulton Sneakers, and i found the perfect pair here. The quality is Excrllent",
            rating: (<><MdStar/><MdStar/><MdStar/><MdStarHalf/><MdStarOutline/></>),
            img: '',
            name: 'Brian M',
          },
    ];
  return (
    <div className='reviewspage'>
      <h3>REVIEWS LIST</h3>
        <div className="review-container">
          {reviewsData.map((reviews) => (
            <div className="reviews-cards">
              <div className="review-details" key={reviews.name}>
                <div className="review-headline">
                  <h5>Review in {reviews.country} on {reviews.date}</h5>
                </div>
                <div className="customer-reviews">
                  <p>"{reviews.review}"</p>
                  <span className='ratings'>{reviews.rating}</span>
                </div>
              </div>
                  <div className="name-container">
                    <div className="customers-img">
                      <img src="" alt="" />
                    </div>
                    <h4>{reviews.name}</h4>
                  </div>
            </div>
          ))}
        </div>
      
    </div>
  )
}

export default Reviews


            
                
                
                
            
        
        
        

