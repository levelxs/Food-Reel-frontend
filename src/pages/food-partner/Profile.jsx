import React, { useState, useEffect } from 'react'
import '../../styles/profile.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Profile = () => {
  const { id } = useParams()
  const [profile, setProfile] = useState(null)
  const [videos, setVideos] = useState([])

  useEffect(() => {
    axios
      .get(`https://food-reel-backend-87nt.onrender.com/api/food-partner/${id}`, { withCredentials: true })
      .then(response => {
        setProfile(response.data.foodPartner)
        setVideos(response.data.foodPartner.foodItems)
      })
  }, [id])

  return (
    <main className="profile-page">
      <section className="profile-header">
        <div className="profile-meta">
          <img
            className="profile-avatar"
            src="https://images.unsplash.com/photo-1754653099086-3bddb9346d37?w=500&auto=format&fit=crop&q=60"
            alt="Profile"
          />

          <div className="profile-info">
            <h1 className="profile-name">{profile?.name}</h1>
            <p className="profile-address">{profile?.address}</p>
          </div>
        </div>

        <div className="profile-stats">
          <div className="profile-stat">
            <span className="profile-stat-value">{profile?.totalMeals}</span>
            <span className="profile-stat-label">Total Meals</span>
          </div>
          <div className="profile-stat">
            <span className="profile-stat-value">{profile?.customersServed}</span>
            <span className="profile-stat-label">Customers Served</span>
          </div>
        </div>
      </section>

      <section className="profile-grid">
        {videos.map(v => (
          <div key={v.id} className="profile-grid-item">
            <video
              className="profile-grid-video"
              src={v.video}
              muted
            />
          </div>
        ))}
      </section>
    </main>
  )
}

export default Profile
