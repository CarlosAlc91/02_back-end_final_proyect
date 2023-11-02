//1. import 
import User from '../users/users.model.js'
import Review from './review.model.js'

//2. export class
export class ReviewService {
  static async findOneReview(id) {
    return Review.findOne({
      where: {
        id,
        status: 'active'
      },
      include: [
        {
          model: User
        }
      ]
    })
  }

  static async create(data) {
    return await Review.create(data)
  }

  static async updateReview(review, data) {
    return await review.update(data)
  }

  static async deleteReview(review) {
    return await review.update({ status: 'deleted' })
  }

  //3. go to reivew.middleware
}