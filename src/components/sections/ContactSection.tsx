import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { toast } from 'sonner';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Message sent successfully! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['+91 1234567890', '+91 9876543210'],
      color: 'text-blue-600'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@businessgroup.com', 'support@businessgroup.com'],
      color: 'text-blue-600'
    },
    {
      icon: MapPin,
      title: 'Address',
      details: ['Business District', 'Main Street, City 123456'],
      color: 'text-blue-600'
    },
    {
      icon: Clock,
      title: 'Working Hours',
      details: ['Monday - Saturday', '9:00 AM - 7:00 PM'],
      color: 'text-blue-600'
    }
  ];

  const officeLocations = [
    { name: 'Pushpa Finance Agency', address: '123 Finance Street, Business District' },
    { name: 'Pushpa Agency (Medical)', address: '456 Medical Plaza, Healthcare District' },
    { name: 'Silver Drive', address: '789 Auto Street, Vehicle Hub District' },
    { name: 'Technology Development', address: '321 Tech Park, Innovation District' }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-black mb-4">
            Contact Us
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Have questions or need assistance? We're here to help! Reach out to us through any of the channels below.
          </p>
        </motion.div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="border-2 border-gray-200 hover:border-blue-500 transition-all h-full bg-white shadow-lg">
                <CardContent className="p-6 text-center">
                  <info.icon className={`h-8 w-8 mx-auto mb-4 ${info.color}`} />
                  <h4 className="text-black mb-3">{info.title}</h4>
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-gray-600 text-sm">{detail}</p>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="border-2 border-gray-200 bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="text-black">Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Input
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="border-gray-300"
                        required
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="border-gray-300"
                        required
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Input
                        type="tel"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="border-gray-300"
                        required
                      />
                    </div>
                    <div>
                      <Input
                        placeholder="Subject"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="border-gray-300"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <Textarea
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="border-gray-300 min-h-[150px]"
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900"
                  >
                    Send Message <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Office Locations */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="border-2 border-gray-200 bg-white shadow-lg h-full">
              <CardHeader>
                <CardTitle className="text-black">Office Locations</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {officeLocations.map((office, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-4 rounded-lg bg-blue-50 border-2 border-blue-200"
                  >
                    <h4 className="text-black mb-2">{office.name}</h4>
                    <p className="text-gray-600 text-sm flex items-start gap-2">
                      <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-blue-600" />
                      {office.address}
                    </p>
                  </motion.div>
                ))}

                {/* Map Placeholder */}
                <div className="mt-6 rounded-lg overflow-hidden">
                  <div className="w-full h-48 bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center border-2 border-blue-200">
                    <div className="text-center">
                      <MapPin className="h-12 w-12 mx-auto mb-2 text-blue-600" />
                      <p className="text-gray-600 text-sm">Interactive Map</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Emergency Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Card className="bg-gradient-to-r from-black to-gray-900 border-blue-500/30">
            <CardContent className="p-8 text-center">
              <h3 className="text-white mb-3">24/7 Emergency Support</h3>
              <p className="text-gray-300 mb-4">
                For urgent matters, our emergency helpline is available round the clock
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a href="tel:+911234567890" className="text-blue-400 hover:text-blue-300 flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  <span>+91 1234567890</span>
                </a>
                <a href="mailto:emergency@businessgroup.com" className="text-blue-400 hover:text-blue-300 flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  <span>emergency@businessgroup.com</span>
                </a>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
