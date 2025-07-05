import React, { useRef, useState } from 'react';
import { Send, Loader } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { ContactFormData } from '../types';

interface ContactProps {
  id: string;
}

const Contact: React.FC<ContactProps> = ({ id }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1 });
  
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Le nom est requis';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'L\'email est requis';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'L\'email n\'est pas valide';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Le sujet est requis';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Le message est requis';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Le message doit contenir au moins 10 caractères';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true);
      setSubmitStatus('idle');

      try {
        const response = await fetch('https://formspree.io/f/xwpbjoqe', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message
          }),
        });

        if (response.ok) {
          setSubmitStatus('success');
          setFormData({
            name: '',
            email: '',
            subject: '',
            message: '',
          });
        } else {
          setSubmitStatus('error');
          console.error('Erreur lors de l’envoi');
        }
      } catch (error) {
        setSubmitStatus('error');
        console.error('Erreur réseau :', error);
      }

      setIsSubmitting(false);

      // Reset form status after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    }
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  return (
    <section 
      id={id}
      ref={sectionRef}
      className="bg-white dark:bg-gray-900"
    >
      <div className="container-section">
        <h2 className={`section-title ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          Contact
        </h2>
        <p className={`section-subtitle ${isVisible ? 'animate-fade-in animate-delay-100' : 'opacity-0'}`}>
          Vous avez un projet en tête ou une opportunité à me proposer ? N'hésitez pas à me contacter !
        </p>
        
        <div className="max-w-2xl mx-auto">
          <div className={`bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md p-6 md:p-8 ${isVisible ? 'animate-fade-in animate-delay-200' : 'opacity-0'}`}>
            {submitStatus === 'success' ? (
              <div className="text-center p-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-500 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Message envoyé !</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Merci pour votre message. Je vous répondrai dans les plus brefs délais.
                </p>
              </div>
            ) : submitStatus === 'error' ? (
              <div className="text-center p-6 text-red-500">
                <h3 className="text-xl font-semibold mb-2">Erreur d'envoi</h3>
                <p>Une erreur est survenue. Veuillez réessayer plus tard.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="form-label">Nom</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`form-input ${errors.name ? 'border-red-500' : ''}`}
                      placeholder="Votre nom"
                    />
                    {errors.name && <p className="form-error">{errors.name}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`form-input ${errors.email ? 'border-red-500' : ''}`}
                      placeholder="votre@email.com"
                    />
                    {errors.email && <p className="form-error">{errors.email}</p>}
                  </div>
                </div>
                
                <div className="mt-6">
                  <label htmlFor="subject" className="form-label">Sujet</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`form-input ${errors.subject ? 'border-red-500' : ''}`}
                    placeholder="Sujet de votre message"
                  />
                  {errors.subject && <p className="form-error">{errors.subject}</p>}
                </div>
                
                <div className="mt-6">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className={`form-input ${errors.message ? 'border-red-500' : ''}`}
                    placeholder="Votre message..."
                  ></textarea>
                  {errors.message && <p className="form-error">{errors.message}</p>}
                </div>
                
                <div className="mt-8">
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className={`w-full btn btn-primary flex items-center justify-center ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader size={20} className="mr-2 animate-spin" />
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        <Send size={20} className="mr-2" />
                        Envoyer le message
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
