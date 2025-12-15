import React, { useState } from 'react';
import { Section, Input, TextArea, Select, Button, Card } from '../components/UI';
import { Mail, Phone, MapPin, CheckCircle, AlertCircle } from 'lucide-react';
import { SERVICES } from '../constants';
import { useSearchParams } from 'react-router-dom';

export const Contact: React.FC = () => {
  const [searchParams] = useSearchParams();
  const defaultService = searchParams.get('service') || '';
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
  };

  return (
    <div>
      <div className="bg-black text-white pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Let's Start Your Project</h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Reach out to us for quotes, consultations, or general inquiries.
          </p>
        </div>
      </div>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          {/* Form */}
          <div className="lg:col-span-3 order-2 lg:order-1">
            {formStatus === 'success' ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-12 text-center">
                    <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-green-800 mb-2">Message Sent Successfully!</h3>
                    <p className="text-green-700">Thank you for contacting Belfort. Our team will get back to you within 24 hours.</p>
                    <Button variant="outline" className="mt-8 text-black border-black hover:bg-black hover:text-white" onClick={() => setFormStatus('idle')}>Send Another Message</Button>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="bg-white p-8 md:p-12 rounded-lg shadow-xl border border-gray-100">
                    <h3 className="text-2xl font-bold mb-8">Send us a Message</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Input label="Full Name" placeholder="John Doe" required />
                        <Input label="Email Address" type="email" placeholder="john@example.com" required />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Input label="Phone Number" type="tel" placeholder="+234..." required />
                        <Select 
                            label="Service Interested In" 
                            defaultValue={defaultService}
                            options={SERVICES.map(s => ({ value: s.id, label: s.title }))}
                        />
                    </div>
                    <TextArea label="Project Details" placeholder="Tell us about your project requirements..." required />
                    
                    <div className="flex items-center justify-between mt-8">
                        <Button type="submit" variant="primary" className="w-full md:w-auto" disabled={formStatus === 'submitting'}>
                            {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                        </Button>
                        {formStatus === 'error' && <span className="text-red-500 text-sm flex items-center"><AlertCircle size={14} className="mr-1"/> Error sending message</span>}
                    </div>
                </form>
            )}
          </div>

          {/* Info */}
          <div className="lg:col-span-2 order-1 lg:order-2 space-y-8">
             <div>
                <h3 className="text-xl font-bold mb-6 border-l-4 border-belfort-red pl-4">Contact Information</h3>
                <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gray-50 flex items-center justify-center rounded-full text-belfort-red shrink-0">
                            <MapPin size={24} />
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-900">Our Office</h4>
                            <p className="text-gray-500 text-sm mt-1">
                                Plot 456, Constitution Avenue,<br />
                                Central Business District,<br />
                                Abuja, Nigeria.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gray-50 flex items-center justify-center rounded-full text-belfort-red shrink-0">
                            <Phone size={24} />
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-900">Phone</h4>
                            <p className="text-gray-500 text-sm mt-1">
                                +234 800 BELFORT<br />
                                +234 900 123 4567
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gray-50 flex items-center justify-center rounded-full text-belfort-red shrink-0">
                            <Mail size={24} />
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-900">Email</h4>
                            <p className="text-gray-500 text-sm mt-1">
                                info@belfortintegrated.com<br />
                                support@belfortintegrated.com
                            </p>
                        </div>
                    </div>
                </div>
             </div>

             <Card className="bg-belfort-black text-white border-none">
                <h3 className="text-xl font-bold mb-4">Business Hours</h3>
                <ul className="space-y-3 text-sm text-gray-400">
                    <li className="flex justify-between border-b border-gray-800 pb-2">
                        <span>Monday - Friday</span>
                        <span className="text-white">8:00 AM - 6:00 PM</span>
                    </li>
                    <li className="flex justify-between border-b border-gray-800 pb-2">
                        <span>Saturday</span>
                        <span className="text-white">9:00 AM - 4:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                        <span>Sunday</span>
                        <span className="text-belfort-red">Closed</span>
                    </li>
                </ul>
             </Card>
          </div>
        </div>
      </Section>
      
      {/* Map */}
      <div className="h-96 w-full bg-gray-200 relative">
        <div className="absolute inset-0 flex items-center justify-center bg-gray-300">
            <span className="text-gray-500 font-bold">Google Maps Embed Placeholder (Abuja)</span>
        </div>
      </div>
    </div>
  );
};