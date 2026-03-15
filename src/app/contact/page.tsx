"use client";

import { useState } from "react";
import styles from "./Contact.module.scss";
import ptStyles from "@/styles/pt.module.scss";
import { siteContent } from "@/data/content";
import type { FormField } from "@/data/contentType";

export default function Contact() {
  const { contact } = siteContent;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(false);
    setIsLoading(true);

    try {
      // Add your form submission logic here
      // For now, just simulate a successful submission
      await new Promise((resolve) => setTimeout(resolve, 500));

      // Reset form and show success message
      setFormData({ name: "", email: "", message: "" });
      setSubmitted(true);

      // Hide success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      setError(true);
      console.error("Form submission error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={ptStyles.legalContainer}>
      <h1 className={styles.title}>{contact.title}</h1>
      <p className={styles.subtitle}>{contact.subtitle}</p>

      <div className={styles.formContainer}>
        {submitted && (
          <div className={styles.successMessage}>
            <p>{contact.form.successMessage}</p>
          </div>
        )}

        {error && (
          <div className={styles.errorMessage}>
            <p>{contact.form.errorMessage}</p>
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className={styles.fieldGroup}>
            {contact.form.fields
              .filter((field: FormField) => field.type !== "textarea")
              .map((field: FormField) => (
                <div key={field.name} className={styles.formGroup}>
                  <label htmlFor={field.name} className={styles.label}>
                    {field.label}
                    {field.required && (
                      <span className={styles.required}> *</span>
                    )}
                  </label>
                  <input
                    id={field.name}
                    type={field.type}
                    name={field.name}
                    placeholder={field.placeholder}
                    value={formData[field.name as keyof typeof formData]}
                    onChange={handleInputChange}
                    required={field.required}
                    className={styles.input}
                    disabled={isLoading}
                  />
                </div>
              ))}
          </div>

          {contact.form.fields
            .filter((field: FormField) => field.type === "textarea")
            .map((field: FormField) => (
              <div key={field.name} className={styles.formGroup}>
                <label htmlFor={field.name} className={styles.label}>
                  {field.label}
                  {field.required && (
                    <span className={styles.required}> *</span>
                  )}
                </label>
                <textarea
                  id={field.name}
                  name={field.name}
                  placeholder={field.placeholder}
                  value={formData[field.name as keyof typeof formData]}
                  onChange={handleInputChange}
                  required={field.required}
                  className={styles.textarea}
                  disabled={isLoading}
                />
              </div>
            ))}

          <button
            type="submit"
            className={styles.submitButton}
            disabled={isLoading}
          >
            {isLoading ? "Sending..." : contact.form.submitButton}
          </button>
        </form>
      </div>

      <div className={styles.note}>
        <div className={styles.noteTitle}>💡 Quick Tip</div>
        <p>
          We typically respond to messages within 24-48 hours. Thank you for
          your patience!
        </p>
      </div>
    </div>
  );
}
