'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function DataDeletion() {
  const [formData, setFormData] = useState({
    name: '',
    orderNumber: '',
    phone: '',
    dataToDelete: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const emailBody = `Data Deletion Request

Name: ${formData.name}
Order Number: ${formData.orderNumber}
Phone Number: ${formData.phone}
Data to Delete: ${formData.dataToDelete}`

    const mailtoLink = `mailto:shlomi@tus.co.il?subject=Data Deletion Request&body=${encodeURIComponent(emailBody)}`

    window.location.href = mailtoLink
    setSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <main style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem', fontFamily: 'system-ui, sans-serif' }}>
      <Link href="/" style={{ color: '#0070f3', textDecoration: 'none', marginBottom: '2rem', display: 'inline-block' }}>
        ← Back to Home
      </Link>

      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Data Deletion Request</h1>

      <p style={{ marginBottom: '2rem', color: '#666' }}>
        Please fill out the form below to request deletion of your data. Your request will be sent to our team for processing.
      </p>

      {submitted ? (
        <div style={{
          padding: '1.5rem',
          backgroundColor: '#d4edda',
          border: '1px solid #c3e6cb',
          borderRadius: '8px',
          color: '#155724'
        }}>
          Your email client should have opened with your data deletion request. If it didn't, please send an email to shlomi@tus.co.il with your information.
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label htmlFor="name" style={{ fontWeight: '600' }}>
              Your Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              style={{
                padding: '0.75rem',
                border: '1px solid #ddd',
                borderRadius: '4px',
                fontSize: '1rem'
              }}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label htmlFor="orderNumber" style={{ fontWeight: '600' }}>
              Order Number *
            </label>
            <input
              type="text"
              id="orderNumber"
              name="orderNumber"
              required
              value={formData.orderNumber}
              onChange={handleChange}
              style={{
                padding: '0.75rem',
                border: '1px solid #ddd',
                borderRadius: '4px',
                fontSize: '1rem'
              }}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label htmlFor="phone" style={{ fontWeight: '600' }}>
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              style={{
                padding: '0.75rem',
                border: '1px solid #ddd',
                borderRadius: '4px',
                fontSize: '1rem'
              }}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label htmlFor="dataToDelete" style={{ fontWeight: '600' }}>
              Data You Want Deleted *
            </label>
            <textarea
              id="dataToDelete"
              name="dataToDelete"
              required
              value={formData.dataToDelete}
              onChange={handleChange}
              rows={5}
              placeholder="Please describe the data you would like to have deleted..."
              style={{
                padding: '0.75rem',
                border: '1px solid #ddd',
                borderRadius: '4px',
                fontSize: '1rem',
                fontFamily: 'inherit',
                resize: 'vertical'
              }}
            />
          </div>

          <button
            type="submit"
            style={{
              padding: '1rem',
              backgroundColor: '#0070f3',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer'
            }}
          >
            Submit Data Deletion Request
          </button>
        </form>
      )}
    </main>
  )
}
