import Rating from 'react-rating';
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Review = ({review}) => {
    const {name, comment, rating, photo} = review;
    
    return (
        <div className=''>
            <div class="card max-w-lg bg-base-100 shadow hover:shadow-2xl h-96">
                <div class="avatar mt-8">
                    <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 mx-auto">
                        <img className='' src={photo} alt=""/>
                    </div>
                </div>
                <div class="card-body">
                    <p class="card-title my-0">{name}
                    </p>
                    <p className='text-md '> <span className='text-primary font-semibold'>Comment:</span> {comment}<span className='text-secondary'>{}</span></p>
                    <Rating
                    initialRating={rating}
                    emptySymbol={<FontAwesomeIcon icon={faStar} />}
                    fullSymbol={<FontAwesomeIcon className='text-secondary' icon={faStar} />}
                    readonly
                    ></Rating>
                </div>
            </div>
        </div>

    );
};

export default Review;