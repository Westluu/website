import { Icon } from '@iconify/react';

const items = [
    { icon: 'fab fa-linkedin', link: 'https://www.linkedin.com/in/wesley-luu-067771204/' },
    { icon: 'fab fa-discord', link: 'https://discord.com/users/746472347371831386' },
    { icon: "fab fa-dev" , link: 'https://devpost.com/wluu03?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav' },
    { icon: 'fab fa-github', link: 'https://github.com/Westluu' },
  ]

const navItems = [
    { icon: 'fal fa-home', active: 'fa fa-home', label: 'Home', href: '/' },
    { icon: 'fal fa-compass', active: 'fa fa-compass', label: 'Projects', href: '/projects' },
    { icon: 'fal fa-phone', active: 'fa fa-phone', label: 'Contact', href: '/contact' },
    { icon: 'fal fa-file', active: 'fa fa-file', label: 'Resume', target: "_blank", rel: "norefferer", href: 'https://drive.google.com/file/d/1v_6olT9s6_7RZWvQ9T5-FVP1dd2AlHSU/view' }
]

import Link from 'next/link';
import { useRouter } from 'next/router';

const Header = () => {
    const router = useRouter();
    return <>
        <div className="w-full border-b-2 border-neutral-800/20 pb-2">
            <div className="flex flex-col md:flex-row w-full items-center md:justify-between">
                <p className="font-semibold font-Poppins text-xl">Wesley Luu's Portfolio</p>
                <div className="flex items-center space-x-2">
                    {items.map(item => (
                        <a key={item.link} href={item.link} target="_blank" rel="noreferrer" className="flex items-center justify-center hover:bg-neutral-700/20 rounded-xl transition-all duration-150 p-2 px-3">
                            <i className={`${item.icon} text-3xl`} />
                        </a>
                    ))}
                </div>
            </div>
            <div className="flex justify-center md:justify-start items-center space-x-4 py-2">
                {navItems.map(item => (
                    <Link key={item.label} href={item.href} target={item.target} rel ={item.rel}>
                        <a target={item.target} rel={item.rel} className={`flex items-center justify-center text-white/50 cursor-pointer hover:text-white/100 rounded-xl transition-all duration-150 ${router.asPath === item.href && 'text-white/100'}`}>
                            <i className={`${router.asPath === item.href ? item.active : item.icon} mr-2`} />{item.label}
                        </a>
                    </Link>
                ))}
            </div>
        </div>
    </>
}

export default Header;
