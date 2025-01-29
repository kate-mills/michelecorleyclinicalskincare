import React from 'react'
import styles from './index.module.css'
import ProVideo from '../proVideo'

const VirtualClasses  = () => {
  return (
    <article>
      {/* Row - Virtual Classes*/}
      <section className={styles.section} id="virtual-classes">
        <div>
          <ProVideo
            videoId="1018659107"
            title="Acne Safe Best Sellers Zoom Training"
          />
          <ProVideo
            videoId="1036018318"
            title="All Acne Safe Products Zoom Training"
          />
          <ProVideo
            videoId="1035709332"
            title="All Acne Safe Products Zoom Training"
          />
        </div>
      </section>
    </article>
  )
}

export default VirtualClasses
