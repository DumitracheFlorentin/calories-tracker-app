import React, { useState } from 'react'
import { useReviews } from '../store/Review'
import { useAuth } from '../store/Auth'
import Modal from './Modal'
import { toast } from 'react-toastify'

function ReviewsList() {
  const { reviews, addReview } = useReviews()
  const { user } = useAuth()
  const [isModalOpen, setModalOpen] = useState(false)
  const [rating, setRating] = useState(1)
  const [description, setDescription] = useState('')

  function getRatingHandler(rating) {
    const ratings = []
    for (const x of Array(rating).keys()) {
      ratings.push(
        <svg
          key={x}
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>,
      )
    }

    return ratings
  }

  async function submitHandler() {
    await addReview({
      rating,
      description,
      userId: user.id,
    })

    toast.success('Review was added!')
    setModalOpen(false)
  }

  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <h2 className="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Read trusted reviews from our customers
        </h2>
        <div className="flex justify-center items-center my-5">
          <button
            onClick={() => setModalOpen(true)}
            className="bg-green-600 px-4 py-3 rounded-xl text-white font-bold"
          >
            Add Your Review
          </button>
        </div>
        <div className="mt-8 [column-fill:_balance] sm:columns-2 sm:gap-6 lg:columns-3 lg:gap-8">
          {reviews.map((review) => (
            <div key={review._id} className="mb-8 sm:break-inside-avoid">
              <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                <p className="mb-0.5 text-lg font-medium text-gray-900">
                  {review.user.email}
                </p>
                <div className="flex items-center gap-4">
                  <div>
                    <div className="flex justify-center gap-0.5 text-green-500">
                      {getRatingHandler(review.rating)}
                    </div>
                  </div>
                </div>

                <p className="mt-4 text-gray-700">{review.description}</p>
              </blockquote>
            </div>
          ))}
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        header="Add Review"
        body={
          <>
            <div>
              <label
                htmlFor="HeadlineAct"
                className="block text-sm font-medium text-gray-900"
              >
                Rating
              </label>
              <select
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                id="HeadlineAct"
                className="mb-5 mt-1.5 w-full rounded-lg border-gray-300 text-gray-700 sm:text-sm"
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
            <div className="mb-5">
              <label
                htmlFor="Description"
                className="block text-xs font-medium text-gray-700"
              >
                Description
              </label>
              <textarea
                type="text"
                id="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="p-2 mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
              />
            </div>

            <button
              onClick={submitHandler}
              className="mt-2 bg-green-500 w-full py-2 text-white rounded-lg"
            >
              Add Review
            </button>
          </>
        }
      />
    </section>
  )
}

export default ReviewsList
