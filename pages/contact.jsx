import Head from 'next/head'
import Image from 'next/image'
import swr from '../lib/swr';


export default function Home() {
  const { data: _projects } = swr('/api/projects');
  const projects = _projects ? _projects : null;

  return (
    <>
      <div className="py-20">
        <p className="text-3xl text-white font-semibold text-center">Contact Me</p>
        <p className="text-xl text-white/50 font-normal text-center mb-5">Other addresses where you can contact me.</p>
        <div className=" flex justify-center flex-col items-center">
            <div className="max-w-lg w-full">
                <a target="_blank" rel="norefferer" href="https://www.linkedin.com/in/wesley-luu-067771204/">
                    <div className="flex justify-between bg-zinc-500/5 hover:bg-zinc-500/10 transition-all duration-200 px-4 py-2 rounded-lg items-center">
                        <i className="fab fa-linkedin fa-2x" />
                        <p className="font-semibold text-xl">@Wesley_Luu</p>
                    </div>
                </a>
                <a target="_blank" rel="norefferer" href="https://discord.com/users/615029465726320654">
                    <div className="mt-2 flex justify-between bg-zinc-500/5 hover:bg-zinc-500/10 transition-all duration-200 px-4 py-2 rounded-lg items-center">
                        <i className="fab fa-discord fa-2x" />
                        <p className="font-semibold text-xl">Wesley_Luu#4484</p>
                    </div>
                </a>
                <a href="mailto:west1luu@gmail.com">
                    <div className="mt-2 flex justify-between bg-zinc-500/5 hover:bg-zinc-500/10 transition-all duration-200 px-4 py-2 rounded-lg items-center">
                        <i className="fa fa-envelope fa-2x" />
                        <p className="font-semibold text-xl">west1luu@gmail.com</p>
                    </div>
                </a>
                <a href="tel:916-462-4229">
                    <div className="mt-2 flex justify-between bg-zinc-500/5 hover:bg-zinc-500/10 transition-all duration-200 px-4 py-2 rounded-lg items-center">
                        <i className="fa fa-phone fa-2x" />
                        <p className="font-semibold text-xl">Text or Call at (916)-462-4229</p>
                    </div>
                </a>
            </div>
        </div>
      </div>
    </>
  )
}