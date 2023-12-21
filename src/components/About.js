import React from 'react'
import profile from '../assets/krishan.jpg'

const About = () => {
    return (
        <section id="about">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium ">
                        Hi, I'm krishna.
                        <br className="hidden lg:inline-block" />I love to build amazing
                        apps.
                    </h1>
                    <p className="mb-8 leading-relaxed">
                        Hi, I'm Krishna saini. I'm Broadly and deeply knowledgeable in Frondend web development as well as the principles and having experience in solving DSA problems.
                        I graduated from the Full Stack Developer course from EDYODA Degital University. I am now looking for my full-time development role with room to grow and learn.
                        I find the creativity and visual aspects of Frontend and Backend very interesting and would love the opportunity to grasp more about Web Development.
                    </p>
                    <div className="flex justify-center">
                        <a
                            href="#contact"
                            className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                            Work With Me
                        </a>
                        <a
                            href="#projects"
                            className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                            See My Past Work
                        </a>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-5/6 w-5/6">
                    <img
                        className="object-cover object-center rounded h-100"
                        alt="profile"
                        src={profile}
                    />
                </div>
            </div>
        </section>
    )
}

export default About
