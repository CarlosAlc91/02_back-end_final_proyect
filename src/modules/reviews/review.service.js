//1. import 
import Review from './review.model.js'

//2. export class
export class ReviewService {
  static async findOneReview(id) {
    return Review.findOne({
      where: {
        id,
        status: 'active'
      }
    })
  }

  static async create(data) {
    return await Review.create(data)
  }

  //3. go to reivew.middleware
}