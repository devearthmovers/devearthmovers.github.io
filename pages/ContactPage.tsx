import React from 'react';
import AnimatedSection from '../components/AnimatedSection';

const ContactPage: React.FC = () => {

    const PageHeader: React.FC = () => (
        <div className="relative pt-48 pb-32 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1444723121867-7a241cacace9?q=80&w=1920&auto=format&fit=crop')" }}>
            <div className="absolute inset-0 bg-brand-dark bg-opacity-70"></div>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative text-center">
                <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">Contact Us</h1>
                <p className="mt-4 text-lg md:text-xl text-brand-yellow max-w-3xl mx-auto">
                    Let's build something great together. Get in touch for a free consultation.
                </p>
            </div>
        </div>
    );

    return (
        <div>
            <PageHeader />
            <AnimatedSection className="py-20 lg:py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                    <div className="grid lg:grid-cols-3 gap-12">
                        <div className="lg:col-span-1 space-y-8">
                             <div>
                                <h2 className="text-3xl font-bold text-brand-dark">Get In Touch</h2>
                                <p className="mt-2 text-text-light">Contact us today for a consultation and discover how our 12+ years of experience can bring your construction vision to life.</p>
                             </div>
                             {[
                                {
                                    icon: <svg className="w-6 h-6 mr-3 text-brand-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
                                    title: 'Our Office',
                                    content: <p className="mt-2 text-text-light">C-137 Birla Farm, Chhatarpur, New Delhi – 110074</p>
                                },
                                {
                                    icon: <svg className="w-6 h-6 mr-3 text-brand-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>,
                                    title: 'Phone',
                                    content: <>
                                        <a href="tel:+919205312697" className="mt-2 text-text-light hover:text-brand-dark block">+91 9205312697</a>
                                        <a href="tel:+919599012309" className="mt-1 text-text-light hover:text-brand-dark block">+91 9599012309</a>
                                    </>
                                },
                                {
                                    icon: <svg className="w-6 h-6 mr-3 text-brand-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
                                    title: 'Email',
                                    content: <a href="mailto:Devearthmovers9599@gmail.com" className="mt-2 text-text-light hover:text-brand-dark break-all block">Devearthmovers9599@gmail.com</a>
                                }
                             ].map(item => (
                                <div key={item.title} className="bg-brand-light p-6 rounded-lg border border-gray-200">
                                    <h3 className="text-lg font-bold text-brand-dark flex items-center">
                                        {item.icon}
                                        {item.title}
                                    </h3>
                                    {item.content}
                                </div>
                             ))}
                        </div>
                        <div className="lg:col-span-2 bg-white p-8 rounded-lg shadow-2xl">
                             <h2 className="text-3xl font-bold text-brand-dark mb-6">Send us a Message</h2>
                             <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-text-main">Full Name</label>
                                        <input type="text" id="name" className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-brand-yellow focus:border-brand-yellow" placeholder="John Doe"/>
                                    </div>
                                     <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-text-main">Email Address</label>
                                        <input type="email" id="email" className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-brand-yellow focus:border-brand-yellow" placeholder="you@example.com"/>
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-text-main">Phone Number</label>
                                    <input type="tel" id="phone" className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-brand-yellow focus:border-brand-yellow" placeholder="+91 12345 67890"/>
                                </div>
                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-text-main">Subject</label>
                                    <input type="text" id="subject" className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-brand-yellow focus:border-brand-yellow" placeholder="Regarding excavation services"/>
                                </div>
                                 <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-text-main">Message</label>
                                    <textarea id="message" rows={5} className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-brand-yellow focus:border-brand-yellow" placeholder="Tell us about your project..."></textarea>
                                </div>
                                <div>
                                    <button type="submit" className="w-full bg-brand-yellow text-brand-dark font-bold py-4 px-6 rounded-md shadow-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105">
                                        Submit Inquiry
                                    </button>
                                </div>
                             </form>
                        </div>
                    </div>
                </div>
            </AnimatedSection>
        </div>
    );
};

export default ContactPage;