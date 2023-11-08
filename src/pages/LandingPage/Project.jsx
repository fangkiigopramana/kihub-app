import { useState } from 'react'
import { Tab } from '@headlessui/react'
import '../../index.css'
import datas from '../../datas/projects.json';

// icon image
import bootstrap from '../../assets/images/icon/bootstrap.svg';
import php from '../../assets/images/icon/php.svg';
import reactJs from '../../assets/images/icon/reactJs.svg';
import nodeJs from '../../assets/images/icon/nodeJs.svg';
import MySql from '../../assets/images/icon/mySQL.svg';
import tailwind from '../../assets/images/icon/tailwind.svg';
import laravel from '../../assets/images/icon/laravel.svg';
import javascript from '../../assets/images/icon/javascript.svg';


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Project() {
    let [categories] = useState(datas)
    const getIconTools = (param) => {
        switch (param) {
            case 'php': return php; case 'laravel': return laravel; case 'reactJs': return reactJs; case 'nodeJs': return nodeJs; case 'MySql': return MySql; case 'bootstrap': return bootstrap; case 'tailwind': return tailwind; case 'javascript': return javascript; default: return ' ';
        }
    }

    return (
        <>

            <section id="skill" className="bg-page">
                <div className="container">
                    <div className="w-full px-4">
                        <div className="max-w-xl mx-auto text-center mb-16">
                            <h4 className="font-bold text-3xl text-primary mb-2">Projects</h4>
                        </div>
                    </div>
                    <div className="w-full max-w-xxl px-2 py-16 pt-0 sm:px-0">
                        <Tab.Group>
                            <Tab.List className="flex justify-center max-w-lg space-x-1 rounded-xl bg-blue-900/20 p-1 w-full">
                                {Object.keys(categories).map((category) => (
                                    <Tab
                                        key={category}
                                        className={({ selected }) =>
                                            classNames(
                                                'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-primary',
                                                'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2 font-bold',
                                                selected
                                                    ? 'bg-white text-slate-800 shadow'
                                                    : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                                            )
                                        }
                                    >
                                        {category}
                                    </Tab>
                                ))}
                            </Tab.List>
                            <Tab.Panels className="mt-2 pb-40 w-full">
                                {Object.values(categories).map((posts, idx) => (
                                    <Tab.Panel
                                        key={idx}
                                        className={classNames(
                                            'rounded-xl p-3'
                                        )}
                                    >
                                        <div class="flex flex-wrap -mx-4">


                                            {posts.length > 0 ? (
                                                posts.map((post, idx) => (
                                                    <div class="w-full md:w-1/3 p-4" key={idx}>
                                                        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                                            <a href="#">
                                                                <img class="rounded-t-lg w-full" src={post.image} alt="" />
                                                            </a>
                                                            <div class="p-5">
                                                                <a href="#">
                                                                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{post.name}</h5>
                                                                </a>
                                                                <div className="flex items-center mb-3">
                                                                    {post.tools.map(icon => (
                                                                        <div className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 hover:border-primary hover:bg-primary hover:text-white">
                                                                            <img src={getIconTools(icon)} width="20" alt="" srcset="" />
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                                {post.link.length !== 0 ? (
                                                                    <a href={post.link} target="_blank" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                                                        Demo
                                                                        <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                                                        </svg>
                                                                    </a>
                                                                ) :
                                                                (
                                                                    <a href={post.link} target="_blank"  class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                                                        Github
                                                                        <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                                                        </svg>
                                                                    </a>
                                                                )}
                                                                
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))
                                            ) : (
                                                <h3 className='text-primary font-bold text-center'>!! Not yet !!</h3>
                                            )}

                                        </div>

                                    </Tab.Panel>
                                ))}
                            </Tab.Panels>
                        </Tab.Group>
                    </div>
                </div>
            </section>

        </>
    )
}
