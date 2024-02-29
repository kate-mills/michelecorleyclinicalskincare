import React from 'react'

import styles from './downloadList.module.css'

const DownloadList = ({ data, className }) => {
  return (
    <div className={`${styles.download_list} ${className || 'primary'} `}>
      { data.map(({ id, data }) => {
        return (
          <div key={id} className={styles.download}>
            <h3 className={styles.download__name}>{data.name}</h3>
            <p className={styles.download__notes}>{data.notes}</p>
            <a
              className={styles.download__btn}
              href={data.pdf.localFiles[0].publicURL}
              target="_blank"
              rel="noreferrer"
              download={data.name}>Download</a>
          </div>
        )
      })}
    </div>
  )
}
export default DownloadList
