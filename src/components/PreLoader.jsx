import React from 'react';
import styles from '../../public/css/transition.module.css';

export default function PreLoader() {
  return (
    <div className='h-screen w-screen bg-slate-950 flex flex-col justify-center items-center'>
      <style>{`
        .violet {
          color: #86329c;
        }
        .blue {
          color: #31299e;
        }
        .blue-light {
          color: #5085d4;
        }
        .func {
          color: #9dbecc;
        }
      `}</style>
      <div className='text-4xl text-slate-300 max-[700px]:text-xl'>
        <p className='text-slate-600 mb-4'>//Life of Coder</p>
        <p><span className='violet'>for(</span><span className='blue'>dateTime</span> <span className='blue-light'>i</span> = 1; <span className='blue-light'>i</span> {'<'} <span className='blue-light'>death</span>; <span className='blue-light'>i</span>+=<span className='blue-light'>day</span>)</p>
        <p className='violet'>&#123;</p>
        <p className={`${styles.first} ${styles.animation}`}> &emsp;<span className='func'>Eat</span><span className='blue'>()</span>;</p>
        <p className={`${styles.second} ${styles.animation}`}> &emsp;<span className='func'>Sleep</span><span className='blue'>()</span>;</p>
        <p className={`${styles.third} ${styles.animation}`}> &emsp;<span className='func'>Code</span><span className='blue'>()</span>;</p>
        <p className='violet'>&#125;</p>
      </div>
    </div>
  )
}
