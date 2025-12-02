import React, { useState } from 'react'

const PasswordValidator = () => {

  const [password, setPassword] = useState("")
  const [currentPassword, setCurrentPassword] = useState("")
  const [errorMessage, setErrorMessage] = useState("")
  const [matchError, setMatchError] = useState("")
  const [successMessage, setSuccessMessage] = useState("")

  const [showNewPassword, setShowNewPassword] = useState(false)
  const [showCurrentPassword, setShowCurrentPassword] = useState(false)

  const toggleNewPassword = () => setShowNewPassword(!showNewPassword)
  const toggleCurrentPassword = () => setShowCurrentPassword(!showCurrentPassword)


  const isStrong = () => {
    setSuccessMessage("") // Clear success msg before validation

    const capitalRegex = /^(?=.*[A-Z])/
    const smallRegex = /^(?=.*[a-z])/
    const numbRegex = /^(?=.*\d)/

    if (!password) {
      setErrorMessage("Password is required")
      return
    }
    else if (password.length < 6) {
      setErrorMessage("Password length is weak")
      return
    }
    else if (password.length > 15) {
      setErrorMessage("Password length is too big")
      return
    }
    else if (!capitalRegex.test(password)) {
      setErrorMessage("Must include at least 1 capital letter")
      return
    }
    else if (!smallRegex.test(password)) {
      setErrorMessage("Must include at least 1 small letter")
      return
    }
    else if (!numbRegex.test(password)) {
      setErrorMessage("Must include at least 1 number")
      return
    }
    else {
      setErrorMessage("")
    }

    if (currentPassword && password !== currentPassword) {
      setMatchError("New password & current password must be same")
      return
    } else {
      setMatchError("")
    }

    // 🔥 SUCCESS
    setSuccessMessage("Password is validated ✔️")
  }


  const inputPassword = (e) => {
    const val = e.target.value
    setPassword(val)

    setErrorMessage("")
    setSuccessMessage("")

    if (currentPassword && val !== currentPassword) {
      setMatchError("New password & current password must be same")
    } else {
      setMatchError("")
    }
  }


  const inputCurrentPassword = (e) => {
    const val = e.target.value
    setCurrentPassword(val)

    setSuccessMessage("")

    if (password && val !== password) {
      setMatchError("New password & current password must be same")
    } else {
      setMatchError("")
    }
  }



  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 space-y-6">

        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">
          Password Validator
        </h2>

        {/* New Password */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            New Password
          </label>

          <div className="relative">
            <input
              type={showNewPassword ? "text" : "password"}
              placeholder="Enter new password"
              onChange={inputPassword}
              className="w-full py-3 px-4 border border-gray-300 rounded-xl"
            />

            <button
              type="button"
              onClick={toggleNewPassword}
              className="absolute inset-y-0 right-3 flex items-center"
            >
              {showNewPassword ? "🙈" : "👁️"}
            </button>
          </div>

          {errorMessage && (
            <p className="text-red-600 text-sm mt-1">{errorMessage}</p>
          )}
        </div>


        {/* Current Password */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Current Password
          </label>

          <div className="relative">
            <input
              type={showCurrentPassword ? "text" : "password"}
              placeholder="Enter current password"
              onChange={inputCurrentPassword}
              className="w-full py-3 px-4 border border-gray-300 rounded-xl"
            />

            <button
              type="button"
              onClick={toggleCurrentPassword}
              className="absolute inset-y-0 right-3 flex items-center"
            >
              {showCurrentPassword ? "🙈" : "👁️"}
            </button>
          </div>

          {matchError && (
            <p className="text-red-600 text-sm mt-1">{matchError}</p>
          )}
        </div>

        {/* Button */}
        <button
          onClick={isStrong}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold"
        >
          Validate Password
        </button>

        {/* ✅ SUCCESS MESSAGE */}
        {successMessage && (
          <p className="text-green-600 font-semibold text-center mt-2">
            {successMessage}
          </p>
        )}

      </div>
    </div>
  )
}

export default PasswordValidator
