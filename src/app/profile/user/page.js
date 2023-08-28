import React from 'react'

const UserProfile = () => {
  return (
    <div>

<div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="bg-blue-500 px-4 py-5 sm:px-6">
          <h1 className="text-white text-3xl font-semibold">User Name</h1>
          <p className="mt-1 text-blue-200">User Email</p>
        </div>
        <div className="border-t border-gray-200">
          <dl>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Username</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">User Name</dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Location</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">User Location</dd>
            </div>
            {/* Add more user information as needed */}
          </dl>
        </div>
      </div>
    </div>
  );

    </div>
  )
}

export default UserProfile