import { Link } from 'react-router-dom';
import { FaFacebook, FaGithub, FaInstagramSquare, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className='bg-gray-800 pt-10 pb-4'>
            <div className='container mx-auto flex flex-wrap justify-between'>

                {/* Each section adjusted for responsiveness */}
                <div className='w-full md:w-1/2 lg:w-1/4 text-gray-400 text-center mb-6 md:mb-0'>
                    <h2 className='text-white text-2xl mb-4'>MD: Maruf Mia</h2>
                    <ul>
                        <li><Link to='/home'>Web Developer</Link></li>
                        <li><Link to='/home'>Front End Developer</Link></li>
                        <li><Link to='/home'>Lorem, ipsum.</Link></li>
                        <li><Link to='/home'>Lorem, ipsum.</Link></li>
                    </ul>
                </div>

                <div className='w-full md:w-1/2 lg:w-1/4 text-center mb-6 md:mb-0'>
                    <h2 className='text-white text-2xl mb-4'>Skill</h2>
                    <ul className='text-gray-400 mb-6 md:mb-0'>
                        <li><Link to='/home'>Html</Link></li>
                        <li><Link to='/home'>Css</Link></li>
                        <li><Link to='/home'>SCSS</Link></li>
                        <li><Link to='/home'>JavaScript</Link></li>
                        <li><Link to='/home'>Tailwind</Link></li>
                        <li><Link to='/home'>React</Link></li>
                    </ul>
                </div>

                <div className='w-full md:w-1/2 lg:w-1/4 text-center mb-6 md:mb-0'>
                    <h2 className='text-white text-2xl mb-4'>Contact Us</h2>
                    <ul className='text-gray-400 mb-6 md:mb-0'>
                        <li><Link to='/home'>+8801900000000</Link></li>
                        <li><Link to='/home'>+8801700000000</Link></li>
                        <li><Link to='/home'>+8801300000000</Link></li>
                        <li><Link to='/home'>+8801800000000</Link></li>
                        <li><Link to='/home'>+8801500000000</Link></li>
                    </ul>
                </div>

                <div className='w-full md:w-1/2 lg:w-1/4 text-center mb-6 md:mb-0'>
                    <h2 className='text-white text-2xl mb-4'>Contact</h2>
                    <ul className='text-black mb-6 md:mb-0'>
                        <li className='mt-4'><input className='w-full h-10 rounded-md' type="text" placeholder='Enter Name' /></li>
                        <li className='mt-4'><input className='w-full h-10 rounded-md' type="text" placeholder='Enter Address' /></li>
                        <li className='mt-4'><input className='w-full h-10 rounded-md' type="email" placeholder='Enter E-mail' /></li>
                        <li className='mt-4'><input className='w-full h-10 rounded-md' type="tel" placeholder='Enter Number' /></li>
                    </ul>
                </div>

                {/* Social Media section */}
                <div className='w-full text-center mb-6'>
                    <h1 className='text-white text-4xl font-bold mb-4'>Social Media</h1>
                    <ul className='flex justify-center gap-4'>
                        <li>
                            <Link to='https://www.facebook.com/maruf.mia.98871' target="_blank" rel="noopener noreferrer">
                                <FaFacebook className='text-[#0866FF] text-4xl' />
                                Facebook
                            </Link>
                        </li>
                        <li>
                            <Link to='https://github.com/marufmia95' target="_blank" rel="noopener noreferrer">
                                <FaGithub className='text-black text-4xl' />
                                GitHub
                            </Link>
                        </li>
                        <li>
                            <Link to='https://www.instagram.com/mdmarufmia86/' target="_blank" rel="noopener noreferrer">
                                <FaInstagramSquare className='text-[#F501C8] text-4xl' />
                                Instagram
                            </Link>
                        </li>
                        <li>
                            <Link to='https://twitter.com/mia_maruf17792' target="_blank" rel="noopener noreferrer">
                                <FaTwitter className='text-4xl text-[#00FFFF]' />
                                Twitter
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div className='text-white  text-center '>
                <p>© 2024 NexusDev. All rights reserved. | Designed and developed by NexusDev</p>
            </div>
        </footer>
    );
};

export default Footer;
