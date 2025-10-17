import React from 'react';

const Footer = () => {
    return (
        <footer className='footer bg-base-200 text-base-content p-10 grid grid-cols-1 md:grid-cols-4 gap-8'>
            <aside>
                <h2 className='text-2xl font-bold'>fluffelcloud</h2>
                <p>
                    Your reliable weather companion
                    <br />
                    Providing accurate forecast since 2025
                </p>
            </aside>

{/*Column 1*/}
            <nav>
                <h6 className='footer-title'>Services</h6>
                <a className='link link-hover'>Weather Forecast</a>
                <a className='link link-hover'>Hourly Updates</a>
                <a className='link link-hover'>Storm Alerts</a>
                <a className='link link-hover'>Climate Data</a>
            </nav>

{/*Column 2*/}
            <nav>
                <h6 className='footer-title'>Company</h6>
                <a className='link link-hover'>About Us</a>
                <a className='link link-hover'>Contact</a>
                <a className='link link-hover'>Careers</a>
                <a className='link link-hover'>Press Kit</a>
            </nav>

{/*Column 3*/}
            <nav>
                <h6 className='footer-title'>Legal</h6>
                <a className='link link-hover'>Terms of Use</a>
                <a className='link link-hover'>Privacy Policy</a>
                <a className='link link-hover'>Cookie Policy</a>
            </nav>

        </footer>

    );
};

export default Footer;