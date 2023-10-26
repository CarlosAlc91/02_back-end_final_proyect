//1. import 
import Review from './review.model.js'

//2. export class
export class ReviewService {
  async findOneReview(id) {
    return Review.findOne({
      where: {
        id,
        status: 'active'
      }
    })
  }

  //3. go to reivew.middleware
}