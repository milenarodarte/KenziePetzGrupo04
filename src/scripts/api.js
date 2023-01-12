const baseUrl = "https://m2-api-adot-pet.herokuapp.com/"
export const login = async (body) => {
  const options = {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(body)
  }
  try {
    const request = await fetch(`${baseUrl}session/login`, options)
    const response = await request.json()
    if (request.ok) {
      localStorage.setItem("token", response.token )
      localStorage.setItem("user", JSON.stringify(response.user) )
      window.location.assign("/src/pages/home")
    }
    return response
  } catch (err) {
    return {
      response: "ERROR",
      status: err.status,
      message: err.message
    }
  } 
}

export const createUser = async (body) => {
  const options = {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(body)
  }
  try {
    const request = await fetch(`${baseUrl}users`, options)
    const response = await request.json()
    return response
  } catch (err) {
    return {
      response: "ERROR",
      status: err.status,
      message: err.message
    }
  } 
}

export const getAllUsers = async (token) => {
  const options = {
    method: "GET",
    headers: {
      "Content-type": "application/json",
      "Authorization": `Bearer ${token}`
    }
  }
  try {
    const request = await fetch(`${baseUrl}users`, options)
    const response = await request.json()
    return response
  } catch (err) {
    return {
      response: "ERROR",
      status: err.status,
      message: err.message
    }
  } 
}

export const getProfile = async (token) => {
  const options = {
    method: "GET",
    headers: {
      "Content-type": "application/json",
      "Authorization": `Bearer ${token}`
    }
  }
  try {
    const request = await fetch(`${baseUrl}users/profile`, options)
    const response = await request.json()
    return response
  } catch (err) {
    return {
      response: "ERROR",
      status: err.status,
      message: err.message
    }
  } 
}

export const updateProfile = async (token, body) => {
  const options = {
    method: "PATCH",
    headers: {
      "Content-type": "application/json",
      "Authorization": `Bearer ${token}`
    },
    body: JSON.stringify(body)
  }
  try {
    const request = await fetch(`${baseUrl}users/profile`, options)
    const response = await request.json()

    if (request.ok) {
      localStorage.setItem("user", JSON.stringify(response) )
    }

    return response
  } catch (err) {
    return {
      response: "ERROR",
      status: err.status,
      message: err.message
    }
  } 
}

export const deleteProfile = async (token) => {
  const options = {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
      "Authorization": `Bearer ${token}`
    }
  }
  try {
    const request = await fetch(`${baseUrl}users/profile`, options)
    const response = await request.json()

    if (request.ok) {
      localStorage.removeItem("token")
      localStorage.removeItem("user")
      window.location.assign("/")
    }

    return response
  } catch (err) {
    return {
      response: "ERROR",
      status: err.status,
      message: err.message
    }
  } 
}

export const createPet = async (token, body) => {
  const options = {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      "Authorization": `Bearer ${token}`
    },
    body: JSON.stringify(body)
  }
  try {
    const request = await fetch(`${baseUrl}pets`, options)
    const response = await request.json()
    return response
  } catch (err) {
    return {
      response: "ERROR",
      status: err.status,
      message: err.message
    }
  } 
}

export const getAllPets = async (token) => {
  const options = {
    method: "GET",
    headers: {
      "Content-type": "application/json",
      "Authorization": `Bearer ${token}`
    }
  }
  try {
    const request = await fetch(`${baseUrl}pets`, options)
    const response = await request.json()
    return response
  } catch (err) {
    return {
      response: "ERROR",
      status: err.status,
      message: err.message
    }
  } 
}

export const getAllMyPets = async (token) => {
  const options = {
    method: "GET",
    headers: {
      "Content-type": "application/json",
      "Authorization": `Bearer ${token}`
    }
  }
  try {
    const request = await fetch(`${baseUrl}pets/my_pets`, options)
    const response = await request.json()
    return response
  } catch (err) {
    return {
      response: "ERROR",
      status: err.status,
      message: err.message
    }
  } 
}

export const updatePet = async (token, petId, body) => {
  const options = {
    method: "PATCH",
    headers: {
      "Content-type": "application/json",
      "Authorization": `Bearer ${token}`
    },
    body: JSON.stringify(body)
  }
  try {
    const request = await fetch(`${baseUrl}pets/${petId}`, options)
    const response = await request.json()
    return response
  } catch (err) {
    return {
      response: "ERROR",
      status: err.status,
      message: err.message
    }
  } 
}

export const deletePet = async (token, petId) => {
  const options = {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
      "Authorization": `Bearer ${token}`
    }
  }
  try {
    const request = await fetch(`${baseUrl}pets/${petId}`, options)
    const response = await request.json()
    return response
  } catch (err) {
    return {
      response: "ERROR",
      status: err.status,
      message: err.message
    }
  } 
}

export const createAdoption = async (token, body) => {
  const options = {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      "Authorization": `Bearer ${token}`
    },
    body: JSON.stringify(body)
  }
  try {
    const request = await fetch(`${baseUrl}adoptions`, options)
    const response = await request.json()
    return response
  } catch (err) {
    return {
      response: "ERROR",
      status: err.status,
      message: err.message
    }
  } 
}

export const getAllAdoptions = async (token) => {
  const options = {
    method: "GET",
    headers: {
      "Content-type": "application/json",
      "Authorization": `Bearer ${token}`
    }
  }
  try {
    const request = await fetch(`${baseUrl}adoptions`, options)
    const response = await request.json()
    return response
  } catch (err) {
    return {
      response: "ERROR",
      status: err.status,
      message: err.message
    }
  } 
}

export const getAdoptionById = async (token, adoptionId) => {
  const options = {
    method: "GET",
    headers: {
      "Content-type": "application/json",
      "Authorization": `Bearer ${token}`
    }
  }
  try {
    const request = await fetch(`${baseUrl}adoptions/${adoptionId}`, options)
    const response = await request.json()
    return response
  } catch (err) {
    return {
      response: "ERROR",
      status: err.status,
      message: err.message
    }
  } 
}

export const getMyAdoptions = async (token) => {
  const options = {
    method: "GET",
    headers: {
      "Content-type": "application/json",
      "Authorization": `Bearer ${token}`
    }
  }
  try {
    const request = await fetch(`${baseUrl}adoptions/myAdoptions`, options)
    const response = await request.json()
    return response
  } catch (err) {
    return {
      response: "ERROR",
      status: err.status,
      message: err.message
    }
  } 
}
export const updateAdoptionById = async (token, adoptionId, body) => {
  const options = {
    method: "PATCH",
    headers: {
      "Content-type": "application/json",
      "Authorization": `Bearer ${token}`
    },
    body: JSON.stringify(body)
  }
  try {
    const request = await fetch(`${baseUrl}adoptions/update/${adoptionId}`, options)
    const response = await request.json()
    return response
  } catch (err) {
    return {
      response: "ERROR",
      status: err.status,
      message: err.message
    }
  } 
}

export const deleteAdoptionBy = async (token, adoptionId) => {
  const options = {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
      "Authorization": `Bearer ${token}`
    }
  }
  try {
    const request = await fetch(`${baseUrl}adoptions/delete/${adoptionId}`, options)
    const response = await request.json()
    return response
  } catch (err) {
    return {
      response: "ERROR",
      status: err.status,
      message: err.message
    }
  } 
}
